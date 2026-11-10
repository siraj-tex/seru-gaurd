<p align="center">
  <img src="docs/assets/logo.svg" width="140" height="140" alt="SERU GUARD Logo" />
</p>

<h1 align="center">🛡️ SERU GUARD</h1>

<p align="center">
  <strong>Fast, Lightweight, Open-Source & Privacy-First Ad Blocker for Chrome & Chromium Browsers</strong><br>
  <em>Manifest V3 &bull; 18,660+ Declarative Net Request Rules &bull; Deep Scriptlet Interception &bull; Zero Telemetry</em>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a>
  <img src="https://img.shields.io/badge/Manifest-V3-success.svg" alt="Manifest V3">
  <img src="https://img.shields.io/badge/Telemetry-0%25%20(None)-brightgreen.svg" alt="Zero Telemetry">
  <img src="https://img.shields.io/badge/Rules-18%2C660%2B-orange.svg" alt="18k Rules">
  <img src="https://img.shields.io/badge/Platform-Chrome%20%7C%20Brave%20%7C%20Edge-lightgrey.svg" alt="Cross Chromium">
</p>

---

## 📌 Introduction

**SERU GUARD** is a fast, robust, and completely open-source ad-blocking and privacy protection browser extension for Google Chrome and Chromium-based browsers (Brave, Edge, Opera, Vivaldi).

Unlike conventional ad blockers that track user activity or send analytics back to third-party servers, **SERU GUARD is built with zero telemetry**. All remote logging endpoints, heartbeat telemetry, and external phone-home mechanisms have been completely removed. It runs purely on your device, providing maximum speed, ultra-low memory consumption, and uncompromised privacy.

---

## ✨ Key Features

- 🚫 **18,660+ Declarative Net Request (DNR) Rules**  
  Uses native browser-level network filtering powered by Chromium's Declarative Net Request engine. Ads and trackers are dropped before network requests ever leave the browser, minimizing CPU and RAM overhead.

- 📺 **Advanced YouTube Ad Interception**  
  - Dynamically prunes `adPlacements` and `playerResponse.adPlacements` from YouTube `fetch` and `XHR` responses at the JSON parsing level.
  - Automatically filters YouTube Shorts video ads (`reel_watch_sequence`).
  - Accelerates and skips unskippable video ad countdown timers.
  - **Anti-Bypass Guard (`preventDomBypass`)**: Detects and neutralizes attempts by anti-adblock scripts to bypass network filters via hidden `iframe` creation.

- 📱 **Social Media Sponsored Post Cleaner**  
  - Intercepts Facebook and Instagram GraphQL API responses to prune `sponsored_data`, `ad_id`, and commercial feed items before they render on your screen.

- 🎨 **Cosmetic Filtering & Shadow DOM Piercing**  
  - Injects anti-layout-collapse CSS rules (`display: none !important; opacity: 0; width: 0; height: 0;`).
  - Traverses open Shadow DOM roots to detect and hide ads encapsulated inside custom Web Components.

- 🛑 **Popunder & Synthetic Click Shield**  
  - Identifies and neutralizes deceptive redirect scripts that create dynamic hidden `<a>` elements and trigger synthetic click events within 50 milliseconds.

- 🔒 **100% Zero Telemetry & Privacy-First**  
  - No analytics, no tracking, no heartbeat pings, no user profiling. Your browsing data never leaves your computer.

---

## 🚀 How to Install in Google Chrome (Step-by-Step)

You can load SERU GUARD directly into any Chromium browser in less than a minute—no build tools or compilation required:

### Step 1: Clone or Download the Repository
Clone the repository using Git:
```bash
git clone https://github.com/siraj-tex/seru-gaurd.git
```
*(Or click **Code > Download ZIP** on GitHub and extract the archive on your computer).*

---

### Step 2: Open Extensions Management
1. Open Google Chrome (or Brave / Edge).
2. Type `chrome://extensions` in the address bar and press **Enter**.
3. In the top-right corner, toggle **Developer mode** to **ON**.

---

### Step 3: Load the Unpacked Extension
1. In the top-left corner, click the **"Load unpacked"** button.
2. Navigate to your cloned repository and select the **`extension`** folder (e.g. `d:\adblocker\extension`).

<p align="center">
  <img src="docs/assets/chrome-extension-install.png" width="850" alt="Chrome Extension Developer Mode Installation Guide" />
</p>

---

### Step 4: Pin and Enjoy!
- Click the Extensions puzzle icon in the Chrome toolbar.
- Pin **SERU GUARD** for quick access.
- Browse YouTube and the web completely ad-free!

---

## 🛠️ Modifying & Customizing for Personal Use

SERU GUARD is designed to be easily hackable and customizable for your own workflows.

### 1. Whitelisting Specific Websites
- Click the SERU GUARD icon in your toolbar and toggle off **"Block ads on this site"** for domains you wish to support.
- Or open the **Settings** page (`chrome-extension://<id>/index.html#/settings/whitelistedSites`) to manage your allowed domains list.

### 2. Customizing Network & Cosmetic Rules
- **Declarative Net Request Rules**: Edit `extension/declarative_net_request/requests.json` to add or modify network blocking patterns.
- **Custom Scripts**: Inspect `extension/content/custom-scripts/` for site-specific scripts (e.g., YouTube player interception, Facebook post filter).
- **Element Hiding (CSS)**: Add cosmetic hiding rules in `extension/content/custom-scripts/cosmetic/`.

### 3. Validating the Extension
Run the built-in validation script to verify manifest integrity and required assets:
```bash
node scripts/validate.js
```

### 4. Packaging for Distribution
To create a clean, distribution-ready ZIP archive for offline sharing or uploading to the Chrome Web Store:
```bash
node scripts/package.js
```
The packaged archive will be saved in `dist/seru-guard-extension.zip`.

---

## 📂 Project Architecture

```text
├── docs/                               # Documentation assets & guides
│   └── assets/
│       ├── chrome-extension-install.png # Step-by-step visual installation screenshot
│       ├── logo.svg                    # Vector brand logo
│       └── logo.png                    # High-resolution raster brand emblem
├── extension/                          # Ready-to-load unpacked Chrome Extension
│   ├── manifest.json                   # Manifest V3 extension configuration
│   ├── index.html                      # Popup and settings single-page app
│   ├── favicon.ico                     # Multi-resolution browser icon
│   ├── assets/                         # Compiled UI views, styles, and SVG components
│   ├── background/                     # Service worker logic, DNR routing, state management
│   ├── content/                        # Content scripts, DOM observers, custom scriptlets
│   │   └── custom-scripts/             # In-page interceptors for YouTube, Meta, popups
│   ├── declarative_net_request/        # 18,660+ DNR network filtering rule declarations
│   ├── icons/                          # Multi-resolution extension icons (16px to 512px)
│   └── _locales/                       # Localization bundles across 50+ languages
├── scripts/
│   ├── validate.js                     # Integrity checker for manifest & assets
│   └── package.js                      # Automated release archiver (excludes temporary metadata)
├── LICENSE                             # MIT Open Source License
└── README.md                           # Documentation
```

---

## 🛡️ Privacy Policy

SERU GUARD has a strict zero-data-collection policy:
1. **No External Network Calls**: The extension makes zero requests to third-party telemetry, logging, or analytics servers.
2. **Local Processing**: All blocking decisions, statistic counters, and whitelists are stored exclusively inside your browser's local storage (`chrome.storage.local`).
3. **Open & Auditable**: The entire source code is available in this repository under the MIT License for anyone to inspect and verify.

---

## 📄 License

This project is open-source software licensed under the **[MIT License](LICENSE)**. You are free to use, modify, distribute, and adapt it for personal or commercial projects.
