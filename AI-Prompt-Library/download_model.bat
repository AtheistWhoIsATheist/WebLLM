@echo off
echo Installing required tools for model download...

REM Check if curl is available
curl --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Curl not found. Please install Git for Windows or use PowerShell method below.
    pause
    exit /b 1
)

echo Using curl to download model files...
echo This will download approximately 2.18 GB of model data.
echo Please ensure you have stable internet connection.

REM Create model directory structure
mkdir "models\Phi-4-mini-instruct-q4f16_1-MLC" 2>nul

echo Downloading model configuration files...
curl -L -o "models\Phi-4-mini-instruct-q4f16_1-MLC\mlc-chat-config.json" "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/mlc-chat-config.json"
curl -L -o "models\Phi-4-mini-instruct-q4f16_1-MLC\added_tokens.json" "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/added_tokens.json"
curl -L -o "models\Phi-4-mini-instruct-q4f16_1-MLC\merges.txt" "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/merges.txt"

echo Downloading model shard files (this may take a while)...

REM Download the 50 model shard files
for /L %%i in (0,1,49) do (
    echo Downloading shard %%i/50...
    curl -L -o "models\Phi-4-mini-instruct-q4f16_1-MLC\model-%%i-of-050.bin" "https://huggingface.co/MLC-AI/Phi-4-mini-instruct-q4f16_1-MLC/resolve/main/model-%%i-of-050.bin"
)

echo.
echo Model download completed!
echo You can now run the WebLLM setup.
echo.
pause