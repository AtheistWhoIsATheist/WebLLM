#!/bin/bash

# WebLLM GitHub Pages Deployment Script
# This script helps you deploy your WebLLM to GitHub Pages

echo "🚀 WebLLM GitHub Pages Deployment"
echo "=================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   - Windows: Download from https://git-scm.com/"
    echo "   - macOS: brew install git"
    echo "   - Linux: sudo apt-get install git"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Get repository name
echo "📝 Setting up GitHub repository..."
read -p "Enter your repository name (e.g., my-webllm): " REPO_NAME

if [ -z "$REPO_NAME" ]; then
    echo "❌ Repository name cannot be empty"
    exit 1
fi

# Initialize git repository
echo "📂 Initializing git repository..."
git init

# Add all files
echo "📁 Adding files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: WebLLM self-hosted setup"

# Create GitHub repository
echo ""
echo "🔗 Next steps to create GitHub repository:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: $REPO_NAME"
echo "3. Make it Public (required for free GitHub Pages)"
echo "4. Don't initialize with README (we already have files)"
echo "5. Click 'Create repository'"
echo ""
echo "After creating the repository, GitHub will show you commands like:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/$REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Run those commands, then enable GitHub Pages:"
echo "1. Go to https://github.com/YOUR_USERNAME/$REPO_NAME/settings/pages"
echo "2. Source: Deploy from a branch"
echo "3. Branch: main / (root)"
echo "4. Click Save"
echo ""
echo "🎉 Your site will be available at:"
echo "   https://YOUR_USERNAME.github.io/$REPO_NAME/"
echo ""
echo "📱 Test on your iPhone after the model downloads complete!"
echo ""
echo "⏱️  Note: GitHub Pages may take 5-10 minutes to become available."