# 🔧 iOS WebLLM Troubleshooting Checklist

## ❌ Common Issues & Quick Fixes

### 🚫 "Site not available" after deployment

**Checklist:**
- [ ] Waited 10-15 minutes for initial deployment
- [ ] Repository is set to Public (required for free GitHub Pages)
- [ ] Pages settings: Deploy from branch → main → / (root)
- [ ] Repository name has no special characters or spaces
- [ ] Checked GitHub Pages status at: `https://status.github.com/`

**Quick Fixes:**
1. Go to repository Settings → Pages
2. Re-select branch and folder, then Save again
3. Wait 5-10 minutes
4. Try accessing site in incognito/private mode

### 🚫 JavaScript not working on iOS Safari

**Checklist:**
- [ ] JavaScript enabled in Settings → Safari → Advanced → JavaScript
- [ ] Safari cache cleared: Settings → Safari → Clear History
- [ ] Using Safari (not Chrome or other browsers)
- [ ] Requested desktop site: Tap AA button → Request Desktop Site
- [ ] Safari extensions disabled

**Quick Fixes:**
1. Settings → Safari → Clear History and Website Data
2. Settings → Safari → Advanced → JavaScript: ON
3. Restart Safari app
4. Force quit other apps to free memory

### 🚫 Model download fails or takes forever

**Checklist:**
- [ ] 3GB+ free storage available on device
- [ ] Connected to stable WiFi (not cellular)
- [ ] No other apps using internet heavily
- [ ] Device not in Low Power Mode
- [ ] Safari not in private/incognito mode

**Quick Fixes:**
1. Switch to different WiFi network
2. Disable cellular data temporarily
3. Close all other Safari tabs
4. Turn off Low Power Mode
5. Restart iPhone/iPad

### 🚫 App won't add to Home Screen

**Checklist:**
- [ ] Long pressed index.html file (not the folder)
- [ ] File is in root directory of folder
- [ ] Using Safari browser
- [ ] File has .html extension
- [ ] Device has iOS 14.0 or later

**Quick Fixes:**
1. Use Files app to locate the exact file
2. Long press index.html → Share → Add to Home Screen
3. Try different folder location (iCloud Drive instead of On My iPhone)
4. Check file is not corrupted

### 🚫 iPhone/iPad runs out of memory or crashes

**Checklist:**
- [ ] Other Safari tabs closed
- [ ] Other apps closed
- [ ] Restarted device recently
- [ ] Using iOS-optimized version of code
- [ ] Device has iOS 15.0 or later

**Quick Fixes:**
1. Double-click Home Button → Swipe up on Safari to close all tabs
2. Settings → Safari → Clear History
3. Restart device completely
4. Use smaller model (Qwen3-0.6B instead of Phi-4-mini)
5. Enable Low Power Mode during use

### 🚫 Slow response times from AI

**Checklist:**
- [ ] Device is iPhone 12 or newer
- [ ] Other apps closed
- [ ] Model has finished downloading completely
- [ ] Chat history not too long (clear if > 20 messages)
- [ ] Device not overheating

**Quick Fixes:**
1. Clear chat history to free memory
2. Close all other apps
3. Wait for device to cool down
4. Use smaller, faster model
5. Restart app

### 🚫 GitHub authentication errors

**Checklist:**
- [ ] Using correct GitHub username
- [ ] Password field contains personal access token (not password)
- [ ] Token has proper permissions (repo access)
- [ ] 2FA enabled if required
- [ ] Repository is owned by your account

**Quick Fixes:**
1. Generate new token: GitHub → Settings → Developer settings → Tokens
2. Use token as password in git commands
3. Enable 2FA on GitHub
4. Use GitHub Mobile instead of command line

### 🚫 Can't find app after deployment

**Checklist:**
- [ ] Checked correct URL format: `https://username.github.io/repository-name`
- [ ] Repository name has no spaces or special characters
- [ ] Waited minimum 10 minutes after deployment
- [ ] Tried accessing from different browser/device
- [ ] Repository is Public (not Private)

**Quick Fixes:**
1. Copy exact URL from repository Settings → Pages
2. Test in incognito/private mode
3. Try from different device
4. Check if repository is public
5. Wait additional 10-15 minutes

---

## 🔍 Diagnostic Information

### System Information to Check

**iOS Version:**
- Settings → General → About → Software Version
- Minimum required: iOS 15.0

**Storage Space:**
- Settings → General → iPhone Storage
- Required: 3GB+ free space

**Safari Version:**
- Settings → Safari → About
- Should be latest available

**Memory Usage:**
- During model download, check Settings → Battery
- Should show Safari using 2-3GB

### Browser Console Errors

**To check Safari console:**
1. Open Safari on Mac (if available)
2. Or use Xcode on Mac for iOS simulator
3. Look for red error messages during model load

**Common errors:**
- `CORS error` → Check URL format
- `Network timeout` → Check internet connection
- `Out of memory` → Use smaller model or close apps
- `Model not found` → Check model name spelling

---

## 🚑 Emergency Solutions

### When Everything Fails

**Option 1: Use iSH Shell Method**
- Install via TestFlight
- Use command-line deployment
- More reliable for some users

**Option 2: Use Files App Method**
- Download pre-built files to iPhone
- Install directly from Files app
- No internet required after download

**Option 3: Use Alternative Platform**
- Deploy to Netlify instead of GitHub Pages
- Use Vercel as alternative
- Both have free tiers

**Option 4: Use Pre-built Apps**
- Search App Store for "WebLLM" or "Local AI"
- Some pre-built solutions available
- May require payment

---

## 📞 Getting Help

### Before Asking for Help

**Gather this information:**
- [ ] iOS version (15.0+ required)
- [ ] iPhone/iPad model
- [ ] Free storage space (need 3GB+)
- [ ] Browser being used (Safari recommended)
- [ ] Method used for setup
- [ ] Error messages (screenshots helpful)
- [ ] What worked and what didn't

### Self-Help Resources

1. **Complete Guide**: COMPLETE-iOS-GUIDE.md
2. **Quick Reference**: QUICK-REFERENCE.md
3. **WebLLM Docs**: https://mlc.ai/web-llm/
4. **GitHub Pages Docs**: https://docs.github.com/en/pages

### Community Support

- **GitHub Mobile Community**: github.community
- **Reddit iOS Subreddit**: r/ios
- **iSH Shell Reddit**: r/ishshell
- **WebLLM GitHub Issues**: github.com/mlc-ai/web-llm/issues

---

## ✅ Final Checklist Before Asking for Help

**Setup Verification:**
- [ ] Followed exact steps in complete guide
- [ ] Waited appropriate time (10+ minutes)
- [ ] Used recommended browser (Safari)
- [ ] Have required iOS version (15.0+)
- [ ] Have enough storage (3GB+)
- [ ] Tried basic troubleshooting steps

**Documentation Ready:**
- [ ] Screenshots of error messages
- [ ] Exact URL you're trying to access
- [ ] Device model and iOS version
- [ ] Method used (GitHub Pages, iSH, etc.)
- [ ] What worked before it failed

**Have you tried:**
- [ ] Restarting iPhone/iPad?
- [ ] Clearing Safari cache?
- [ ] Waiting 10+ minutes?
- [ ] Using different WiFi?
- [ ] Closing other apps?
- [ ] Checking free storage space?

---

*If all else fails, try a different deployment method!*

**Remember**: The Files App method works offline and doesn't require any internet services after initial setup.
