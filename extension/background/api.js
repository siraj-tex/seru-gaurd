"use strict";

const serverApi = {
  async callUrl({
    data,
    url,
    method = 'GET'
  }) {
    if (!url) {
      return { data: null };
    }
    debug.log(`[Request] URL: ${url}`, {
      data,
      method
    });
    let body = null;
    if (data) {
      body = typeof data === 'string' ? data : JSON.stringify(data);
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Cache-Control', 'no-cache');
    try {
      const response = await fetch(url, {
        method,
        headers,
        body
      });
      const isJSON = response.headers.get('Content-Type')?.includes('application/json');
      if (response.status === 200 && isJSON) {
        const responseData = await response.json();
        debug.log(`[Response] URL: ${url}`, responseData);
        return {
          data: responseData
        };
      }
      return {
        error: new Error(`Status ${response.status}`),
        skip: response.status === 422
      };
    } catch (e) {
      debug.error('Error in callUrl', e);
      return {
        error: e
      };
    }
  }
};
