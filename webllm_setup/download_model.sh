#!/bin/bash

# WebLLM Phi-4-mini Model Download Script
# This script downloads all the model files (2.18GB total)
# Run this script on your device where you want to store the model

echo "🚀 Downloading Phi-4-mini-instruct-q4f16_1-MLC model files..."
echo "📁 This will download 2.18GB of model files"
echo "⏱️  Estimated time: 10-30 minutes depending on your internet speed"
echo ""

# Create model directory
mkdir -p "Phi-4-mini-instruct-q4f16_1-MLC"
cd "Phi-4-mini-instruct-q4f16_1-MLC"

echo "📋 Downloading essential configuration files..."
curl -L "https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/mlc-chat-config.json" -o mlc-chat-config.json
curl -L "https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/ndarray-cache.json" -o ndarray-cache.json
curl -L "https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/added_tokens.json" -o added_tokens.json
curl -L "https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/merges.txt" -o merges.txt

echo "🤖 Downloading model parameter files (50 files, 2.18GB)..."

# Download all parameter shard files
for i in {0..49}; do
    echo "📥 Downloading params_shard_${i}.bin..."
    curl -L "https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/params_shard_${i}.bin" -o "params_shard_${i}.bin"
    
    # Check if download was successful
    if [ $? -eq 0 ]; then
        echo "✅ params_shard_${i}.bin downloaded successfully"
    else
        echo "❌ Failed to download params_shard_${i}.bin"
    fi
done

echo ""
echo "🎉 Model download complete!"
echo "📂 Model files are in: $(pwd)"
echo "📏 Total size: 2.18GB"
echo ""
echo "Next steps:"
echo "1. Copy this folder to your WebLLM project models/ directory"
echo "2. The model will work completely offline on your iPhone!"
echo ""
echo "Alternative: Use Git LFS for faster downloads:"
echo "git lfs install"
echo "git clone https://huggingface.co/mlc-ai/Phi-4-mini-instruct-q4f16_1-MLC"