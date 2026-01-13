# 📱 iOS Shortcuts for WebLLM Setup

This collection of iOS Shortcuts automates the entire WebLLM iOS setup process, from folder organization to GitHub deployment.

## 🎯 Overview

**4 Automated Shortcuts:**
1. **📁 Folder Organization** - Creates proper file structure
2. **🤖 Model Download** - Manages AI model download (2.18GB)
3. **🚀 GitHub Deploy** - Deploys to GitHub Pages (3 methods)
4. **✅ File Verification** - Checks everything is set up correctly

## 📋 Prerequisites

### Required (Free)
- **iOS 15.0+** (iPhone/iPad)
- **3GB free storage** (for model + app)
- **GitHub account** (free, for deployment)
- **WiFi connection** (for model download)

### Recommended Apps (Free)
- **GitHub Mobile** - Repository management
- **Files app** - Already built-in
- **Safari** - Already built-in
- **iSH Shell** - Advanced users only (TestFlight)

## 🚀 Quick Start Guide

### Step 1: Import Shortcuts
1. **Download** all 4 JSON files to your iPhone
2. **Open iOS Shortcuts app** (pre-installed)
3. **Tap "+"** to create new shortcut
4. **Tap "Add Action"** → **"Import Shortcut"**
5. **Select** the 4 JSON files
6. **Grant permissions** as requested

### Step 2: Run in Order
Run the shortcuts in this exact order:

```
1. Folder Organization
2. Model Download  
3. GitHub Deploy (optional)
4. File Verification (final check)
```

## 📖 Detailed Shortcut Guide

### 1. 📁 Folder Organization Shortcut
**Purpose:** Creates the correct folder structure in iOS Files app

**What it does:**
- ✅ Creates main folder: `WebLLM_iOS_App`
- ✅ Creates subfolders: `models/`, `downloads/`, `temp/`
- ✅ Sets up model folder: `Phi-4-mini-instruct-q4f16_1-MLC/`
- ✅ Opens Files app to show structure

**When to use:** First shortcut - before any other setup

**Requirements:** None - works on any iOS device

---

### 2. 🤖 Model Download Shortcut
**Purpose:** Manages the large AI model download process

**What it does:**
- ✅ Checks available storage (warns if <3GB)
- ✅ Downloads configuration files (3.9KB)
- ✅ Creates download script for large files
- ✅ Provides 3 download methods:
  - Auto download (recommended)
  - Manual script (iSH required)
  - Check existing files

**When to use:** After folder organization, before deployment

**Requirements:** 
- 3GB+ free storage
- WiFi connection (cellular will work but expensive)
- 10-30 minutes for full download

**Output files:**
- `mlc-chat-config.json` ✅
- `ndarray-cache.json` ✅
- `added_tokens.json` ✅
- `merges.txt` ✅
- `params_shard_*.bin` ⚠️ (50 files, 2.18GB - need manual download)

---

### 3. 🚀 GitHub Deploy Shortcut
**Purpose:** Deploys WebLLM to GitHub Pages (free hosting)

**What it does:**
- Asks you to choose deployment method:
  - **GitHub Mobile** (easiest)
  - **iSH Shell** (advanced)
  - **Safari only** (no apps)

**Method 1: GitHub Mobile (Recommended)**
- Creates all necessary files:
  - `index.html` (iOS-optimized WebLLM app)
  - `.nojekyll` (GitHub Pages compatibility)
  - `README.md` (documentation)
- Opens GitHub Mobile app
- Guides you through repository creation
- Sets up GitHub Pages automatically

**Method 2: iSH Shell (Advanced)**
- Creates deployment script: `deploy-ios.sh`
- Requires iSH Shell app installation
- Provides step-by-step instructions
- Full Git control available

**Method 3: Safari Only (Minimal)**
- No additional apps required
- Uses GitHub web interface
- Creates all files automatically
- Opens Safari to GitHub.com

**When to use:** After model files are ready

**Requirements:**
- GitHub account (free)
- Chosen method's apps (varies)
- 5-10 minutes for deployment

---

### 4. ✅ File Verification Shortcut
**Purpose:** Ensures everything is set up correctly

**What it does:**
- ✅ Checks main app files exist
- ✅ Verifies model files present
- ✅ Tests Home Screen integration
- ✅ Validates storage space
- ✅ Generates verification report
- ✅ Shows next steps

**When to use:** After all other shortcuts, before testing

**Output:**
- Detailed verification report: `verification_report.md`
- Clear status of each component
- Actionable next steps

## 🎯 Recommended Workflow

### Option A: Complete iOS Setup (No GitHub)
```
1. Folder Organization
2. Model Download  
3. File Verification
4. Add to Home Screen
5. Test app locally
```

### Option B: GitHub Deployment
```
1. Folder Organization
2. Model Download
3. GitHub Deploy
4. File Verification
5. Test deployed site
```

### Option C: Minimal Setup
```
1. Folder Organization
2. File Verification
3. Add to Home Screen (manual)
4. Download model files manually
```

## 🔧 Troubleshooting Shortcuts

### Common Issues & Solutions

**Shortcut won't import**
- ✅ Ensure iOS 15+ (required for Shortcuts)
- ✅ Use iOS Shortcuts app (not Shortcuts app on Mac)
- ✅ Check file is not corrupted
- ✅ Try importing one by one

**Model download fails**
- ✅ Check storage space (need 3GB+)
- ✅ Use WiFi instead of cellular
- ✅ Try manual download method
- ✅ Clear Safari cache and retry

**Home Screen not working**
- ✅ Long press index.html in Files app
- ✅ Select "Share" not "Quick Look"
- ✅ Tap "Add to Home Screen" option
- ✅ Name the app clearly (e.g., "WebLLM Chat")

**GitHub deployment issues**
- ✅ Ensure repository is public (GitHub Pages requirement)
- ✅ Wait 5-10 minutes for deployment
- ✅ Check repository Settings → Pages
- ✅ Verify branch is set to "main"

**App loads but model doesn't**
- ✅ Model files must be in exact path
- ✅ All 50 parameter files required
- ✅ Check iOS storage space
- ✅ Try smaller model (Qwen2-0.5B)

## 📱 iOS-Specific Tips

### Performance Optimization
- **Close other Safari tabs** - frees memory for model
- **Use newer devices** - iPhone 12+ recommended
- **Keep charged** - AI processing uses battery
- **WiFi for download** - saves cellular data

### Native App Experience
- **Add to Home Screen** - creates app icon
- **Full-screen mode** - no Safari chrome
- **Haptic feedback** - iPhone vibrates on interactions
- **iOS keyboard** - return key sends message

### Security & Privacy
- **Local processing** - AI never leaves your device
- **No tracking** - no analytics or data collection
- **iOS sandbox** - secure app environment
- **No internet required** - works 100% offline

## 📞 Getting Help

### If Shortcuts Don't Work
1. **Update iOS** to latest version
2. **Restart device** - simple but effective
3. **Re-import shortcuts** - sometimes fixes corruption
4. **Check iOS permissions** - Shortcuts need file access

### If WebLLM App Doesn't Work
1. **Check model files** - ensure all 50 files present
2. **Verify storage space** - need 3GB+ free
3. **Try Safari** - some features work better in Safari
4. **Clear cache** - Settings → Safari → Clear History

### If GitHub Deployment Fails
1. **Wait longer** - can take up to 15 minutes
2. **Check repository settings** - ensure public + Pages enabled
3. **Verify branch name** - must be "main" not "master"
4. **Test with simple HTML** - isolate issues

## 🎉 Success Indicators

### Folder Setup Complete
- ✅ `WebLLM_iOS_App` folder in iCloud Drive
- ✅ All subfolders created correctly
- ✅ Files app opens showing structure

### Model Download Complete
- ✅ Configuration files present
- ✅ 50 parameter files downloaded (2.18GB)
- ✅ Total folder size ~2.2GB

### GitHub Deployment Complete
- ✅ Site loads at `https://username.github.io/repo-name`
- ✅ No 404 errors
- ✅ WebLLM interface appears
- ✅ Model loads successfully

### App Setup Complete
- ✅ App icon on Home Screen
- ✅ Opens in full-screen mode
- ✅ Chat interface responsive
- ✅ AI responses generate

## 📚 Additional Resources

- **WebLLM Documentation:** https://mlc.ai/web-llm/
- **iOS Shortcuts User Guide:** https://support.apple.com/guide/shortcuts/
- **GitHub Pages Help:** https://docs.github.com/en/pages
- **iOS Files App Tips:** https://support.apple.com/guide/iphone/

---

## ⚡ Quick Reference

| Shortcut | Time | Storage | Apps Needed |
|----------|------|---------|-------------|
| **Folder Org** | 1 min | 0MB | Files (built-in) |
| **Model Download** | 30 min | 2.2GB | Safari/Files |
| **GitHub Deploy** | 10 min | 0MB | Varies by method |
| **File Verification** | 2 min | 0MB | Files (built-in) |

**Total setup time:** ~45 minutes (one-time)
**Total storage required:** 3GB
**Ongoing costs:** $0 (completely free)

---

*Last Updated: November 2025*  
*Tested on: iOS 15+ | iPhone 12+ | iPad (8th gen)+*