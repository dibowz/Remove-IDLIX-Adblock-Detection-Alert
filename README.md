# Remove IDLIX Adblock Detection Alert

If you have adblock browser extension (ABP, AdGuard, uBlock Origin, etc.) and/or using adblock DNS (AdGuard, Tiar.app, etc.) and getting the annoying adblock detection overlay, you may have removed the overlay by adding it to the blocklist.
But, the blur is still on the page because it's embedded into the CSS (not just HTML elements).

This userscript removes IDLIX's adblock detection elements along with its blurring styles from a loaded HTML page. This also applies to other web pages which using the same adblock detection alert.
It can be installed using Tampermonkey (for Chrome) or Greasemonkey (for Firefox).

## Features

Removes alert wrapper, red overlay, and blur filter from the page.

### From this:

![Before](https://raw.githubusercontent.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/main/Screenshots/BEFORE-remove-idlix-adblock-detection-alert.png "Before")

### To this:

![After](https://raw.githubusercontent.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/main/Screenshots/AFTER-remove-idlix-adblock-detection-alert.png "After")

## Installation

### Step 0: Use Adblock

This step is necessary to be done by yourself before installing this userscript. Otherwise, this userscript would be useless.

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

The userscript will be automatically updated whenever this repo is updated. Make sure your Tampermonkey/Greasemonkey to have the "automatically update scripts" feature turned on.

## Notes

If you encounter any issues or have questions, feel free to [open an issue](https://github.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/issues) on this repository.

Happy browsing without those annoying elements and styles!

## Credits

Thanks to ChatGPT for helping me build this userscript.
