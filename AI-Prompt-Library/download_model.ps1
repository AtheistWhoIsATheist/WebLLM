# PowerShell script for downloading Phi-4-mini model
Write-Host "Installing required tools for model download..." -ForegroundColor Green

# Check if curl is available
$curlExists = Get-Command curl -ErrorAction SilentlyContinue
if (-not $curlExists) {
    Write-Host "Curl not found. Trying alternative methods..." -ForegroundColor Yellow
    $useInvokeWebRequest = $true
} else {
    $useInvokeWebRequest = $false
}

Write-Host "Using PowerShell to download model files..." -ForegroundColor Green
Write-Host "This will download approximately 2.18 GB of model data." -ForegroundColor Yellow
Write-Host "Please ensure you have stable internet connection." -ForegroundColor Yellow
Write-Host ""

# Create model directory structure
$modelDir = "models\Phi-4-mini-instruct-q4f16_1-MLC"
New-Item -ItemType Directory -Force -Path $modelDir | Out-Null

function Download-File {
    param($url, $output)
    Write-Host "Downloading: $(Split-Path $output -Leaf)"
    try {
        if ($useInvokeWebRequest) {
            Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing
        } else {
            curl -L -o $output $url
        }
        Write-Host "✓ Downloaded: $(Split-Path $output -Leaf)" -ForegroundColor Green
    }
    catch {
        Write-Host "✗ Failed to download: $(Split-Path $output -Leaf)" -ForegroundColor Red
    }
}

Write-Host "Downloading model configuration files..." -ForegroundColor Cyan
Download-File "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/mlc-chat-config.json" "$modelDir\mlc-chat-config.json"
Download-File "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/added_tokens.json" "$modelDir\added_tokens.json"
Download-File "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/merges.txt" "$modelDir\merges.txt"

Write-Host ""
Write-Host "Downloading model shard files (this will take a while)..." -ForegroundColor Cyan
Write-Host ""

# Download the 50 model shard files
for ($i = 0; $i -lt 50; $i++) {
    $paddedNumber = $i.ToString("D3")  # Zero-pad to 3 digits
    $outputFile = "$modelDir\model-$paddedNumber-of-050.bin"
    $url = "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/model-$paddedNumber-of-050.bin"
    
    Download-File $url $outputFile
}

Write-Host ""
Write-Host "Model download completed!" -ForegroundColor Green
Write-Host "You can now run the WebLLM setup." -ForegroundColor Green
Write-Host ""
Read-Host "Press Enter to exit"