# Remove IDLIX Adblock Detection Alert

If you have adblock browser extension (ABP, AdGuard, uBlock Origin, etc.) or using adblock DNS (AdGuard, Tiarapp, etc.) and getting the annoying adblock detection overlay, you may have removed the overlay by adding it to the blocklist.
But, the blur is still on the page because it's embedded into the CSS (not just HTML elements).

This userscript removes IDLIX's kind of adblock detection elements along with its blurring styles from a loaded HTML page.
It can be installed using Tampermonkey (for Chrome) or Greasemonkey (for Firefox).

## Features

Removes alert wrapper, red overlay, and blur filter from the page.

### From this:

*screenshot coming soon*

### To this:

*screenshot coming soon*

## Installation

### Step 0: Use Adblock

This step is necessary to be done by yourself before installing this userscript. Otherwise, this script would be useless.

### Step 1: Install the Appropriate Extension

#### a. For Chrome (Tampermonkey):
   1. Go to [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and click on the "Download" button.
   2. Follow the instructions to install the Tampermonkey extension for Chrome.

#### b. For Firefox (Greasemonkey):
   1. Go to [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) on Firefox Add-ons.
   2. Click on the "Add to Firefox" button and follow the instructions to install Greasemonkey.

### Step 2: One-Click Installation

Click on the following link to install the userscript:

[Install Remove-IDLIX-Adblock-Detection-Alert](https://raw.githubusercontent.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/main/remove-idlix-adblock-detection-alert.user.js)

### Step 3: Confirm Installation

- **For Tampermonkey (Chrome):**
  Tampermonkey will prompt you to confirm the installation. Click on "Install" to confirm (or "Reinstall" if you've already installed the previous version).

- **For Greasemonkey (Firefox):**
  Greasemonkey will prompt you to confirm the installation. Click on "Install" to confirm (or "Reinstall" if you've already installed the previous version).

### Step 4: Verify Installation

Visit IDLIX or other web page with similar adblock detection alert. The Adblock Detection Alert should be removed.

## Updating the Userscript

The userscript will be automatically updated.

## Notes

If you encounter any issues or have questions, feel free to [open an issue](https://github.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/issues) on this repository.

Happy browsing without those annoying elements and styles!
