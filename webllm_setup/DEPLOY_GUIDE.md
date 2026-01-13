# 🚀 Deploy Your WebLLM to GitHub Pages

## Quick Deploy (5 minutes)

### Step 1: Download Everything
1. **Download this entire `webllm_setup` folder** to your computer
2. **Download the Phi-4-mini model** (2.18GB):
   ```bash
   cd webllm_setup
   chmod +x download_model.sh
   ./download_model.sh
   ```
   *OR use the manual method in README.md*

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. **Repository name**: `my-webllm` (or your choice)
3. **Make it Public** (required for free GitHub Pages)
4. **Don't check** "Add a README file" (we have our own)
5. Click **"Create repository"**

### Step 3: Deploy Your Files
After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Navigate to your webllm_setup folder
cd /path/to/webllm_setup

# Initialize git
git init
git add .
git commit -m "Initial commit: WebLLM self-hosted"

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/my-webllm.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to: https://github.com/YOUR_USERNAME/my-webllm/settings/pages
2. **Source**: "Deploy from a branch"
3. **Branch**: "main" / "(root)"
4. Click **"Save"**

### Step 5: Get Your URL
🎉 **Your WebLLM will be available at:**
```
https://YOUR_USERNAME.github.io/my-webllm/
```

## ⏱️ Timeline
- **Deploy time**: 2-5 minutes
- **Model download**: 10-30 minutes (depending on internet speed)
- **GitHub Pages activation**: 5-10 minutes
- **First visit**: Model downloads to iPhone (5-10 minutes)

## 📱 Testing on iPhone
1. Open your GitHub Pages URL on iPhone Safari
2. Select "Phi-4-mini-instruct-q4f16_1-MLC (Local)" from dropdown
3. Click **"Download"** and wait for model to load
4. Start chatting! 🤖

## 🔧 Alternative: Netlify Deploy
If GitHub seems complicated, try Netlify:
1. Go to https://app.netlify.com/
2. Drag the `webllm_setup` folder to the deploy area
3. Get instant URL: `https://random-name.netlify.app`

## ❓ Need Help?
- **Model not downloading?** Check the `download_model.sh` script
- **GitHub Pages not working?** Wait 10 minutes and refresh
- **iPhone not loading model?** Ensure you have 3GB+ free space
- **Chat not working?** Make sure the model finished downloading

## 🎉 Success!
Once deployed, you'll have:
- ✅ Permanent WebLLM URL you control
- ✅ 100% offline functionality after first load
- ✅ Works on any device (iPhone, Android, computer)
- ✅ No external dependencies or API keys needed
- ✅ Your own private AI assistant!