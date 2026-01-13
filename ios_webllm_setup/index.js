import * as webllm from "https://esm.run/@mlc-ai/web-llm";

/*************** iOS WebLLM logic ***************/
const messages = [
  {
    content: "You are a helpful AI agent helping users.",
    role: "system",
  },
];

// Get available prebuilt models
const availableModels = webllm.prebuiltAppConfig.model_list.map(
  (m) => m.model_id,
);

// Add local Phi-4-mini model
const localModel = {
  model_id: "Phi-4-mini-instruct-q4f16_1-MLC",
  model_url: "./models/Phi-4-mini-instruct-q4f16_1-MLC"
};

// Set default model to our local Phi-4-mini (optimized for iOS)
let selectedModel = localModel.model_id;

// iOS-specific performance optimizations
let isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let isIPadOS = /iPad/.test(navigator.userAgent) && (navigator.maxTouchPoints > 1);

if (isIOS || isIPadOS) {
  console.log("📱 iOS device detected - applying mobile optimizations");
}

// Callback function for initializing progress
function updateEngineInitProgressCallback(report) {
  console.log("initialize", report.progress);
  const statusElement = document.getElementById("download-status");
  if (statusElement) {
    statusElement.textContent = report.text;
  }
}

// iOS-optimized MLCEngine creation
function createEngineInstance() {
  const engine = new webllm.MLCEngine();
  
  // iOS-specific engine optimizations
  if (isIOS || isIPadOS) {
    // Enable memory optimization for iOS
    engine.setInitProgressCallback(updateEngineInitProgressCallback);
    
    // Add iOS-specific configuration
    engine.config = {
      // Lower temperature for faster responses on mobile
      temperature: 0.7,
      top_p: 0.9,
      // iOS-optimized context length
      max_tokens: 512,
      // Enable streaming for better UX
      stream: true
    };
  }
  
  return engine;
}

const engine = createEngineInstance();

// iOS memory management
function manageMemory() {
  if (isIOS || isIPadOS) {
    // Force garbage collection hints for iOS
    if (window.gc) {
      window.gc();
    }
    
    // Clear message history periodically to prevent memory buildup
    if (messages.length > 10) {
      messages.splice(1, messages.length - 3); // Keep system + last 2 messages
    }
  }
}

async function initializeWebLLMEngine() {
  const statusElement = document.getElementById("download-status");
  if (statusElement) {
    statusElement.classList.remove("hidden");
  }
  
  selectedModel = document.getElementById("model-selection").value;
  
  const config = {
    temperature: isIOS ? 0.7 : 1.0,
    top_p: isIOS ? 0.9 : 1,
  };
  
  // iOS-specific model loading optimizations
  if (isIOS || isIPadOS) {
    // Reduce context length for iOS memory constraints
    config.max_tokens = 512;
    config.temperature = 0.7;
    config.top_p = 0.9;
    
    // Enable memory tracking for iOS
    if ('memory' in performance) {
      console.log(`Memory usage: ${Math.round(performance.memory.usedJSHeapSize / 1024 / 1024)}MB`);
    }
  }
  
  // If using local model, configure the URL
  if (selectedModel === localModel.model_id) {
    config.model_url = localModel.url;
  }
  
  try {
    await engine.reload(selectedModel, config);
    manageMemory(); // Clean up memory after initialization
  } catch (error) {
    console.error("iOS Model loading error:", error);
    // iOS-specific error handling
    if (isIOS && error.message.includes("memory")) {
      alert("Memory usage high. Please close other tabs and try again.");
    }
  }
}

async function streamingGenerating(messages, onUpdate, onFinish, onError) {
  try {
    let curMessage = "";
    let usage;
    const completion = await engine.chat.completions.create({
      stream: true,
      messages,
      stream_options: { include_usage: true },
    });
    for await (const chunk of completion) {
      const curDelta = chunk.choices[0]?.delta.content;
      if (curDelta) {
        curMessage += curDelta;
      }
      if (chunk.usage) {
        usage = chunk.usage;
      }
      onUpdate(curMessage);
      
      // iOS memory management during streaming
      if (isIOS && usage && usage.total_tokens > 1000) {
        manageMemory();
      }
    }
    const finalMessage = await engine.getMessage();
    
    // iOS final cleanup
    if (isIOS) {
      manageMemory();
    }
    
    onFinish(finalMessage, usage);
  } catch (err) {
    console.error("iOS Generation error:", err);
    // iOS-specific error handling
    if (isIOS && err.message.includes("quota")) {
      alert("iOS Safari memory limit reached. Please refresh the page.");
    }
    onError(err);
  }
}

/*************** iOS-optimized UI logic ***************/
function onMessageSend() {
  const input = document.getElementById("user-input");
  if (!input) return;
  
  const messageText = input.value.trim();
  const message = {
    content: messageText,
    role: "user",
  };
  
  if (messageText.length === 0) {
    return;
  }
  
  const sendButton = document.getElementById("send");
  if (sendButton) {
    sendButton.disabled = true;
  }

  messages.push(message);
  appendMessage(message);

  input.value = "";
  input.setAttribute("placeholder", "Generating...");

  // iOS haptic feedback (if supported)
  if (isIOS && 'vibrate' in navigator) {
    navigator.vibrate(50);
  }

  const aiMessage = {
    content: "typing...",
    role: "assistant",
  };
  appendMessage(aiMessage);

  const onFinishGenerating = (finalMessage, usage) => {
    updateLastMessage(finalMessage);
    if (sendButton) {
      sendButton.disabled = false;
    }
    
    // iOS battery optimization message
    let usageText = "";
    if (usage) {
      usageText = `tokens: ${usage.total_tokens}, ` +
        `prefill: ${usage.extra.prefill_tokens_per_s.toFixed(2)} tok/s, ` +
        `decoding: ${usage.extra.decode_tokens_per_s.toFixed(2)} tok/s`;
    }
    
    const chatStats = document.getElementById("chat-stats");
    if (chatStats) {
      chatStats.classList.remove("hidden");
      chatStats.textContent = usageText;
    }
  };

  streamingGenerating(
    messages,
    updateLastMessage,
    onFinishGenerating,
    console.error,
  );
}

function appendMessage(message) {
  const chatBox = document.getElementById("chat-box");
  if (!chatBox) return;
  
  const container = document.createElement("div");
  container.classList.add("message-container");
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.textContent = message.content;

  if (message.role === "user") {
    container.classList.add("user");
  } else {
    container.classList.add("assistant");
  }

  container.appendChild(newMessage);
  chatBox.appendChild(container);
  
  // iOS-optimized scrolling
  if (isIOS) {
    // Smooth scrolling for iOS
    chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" });
  } else {
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function updateLastMessage(content) {
  const messageDoms = document
    .getElementById("chat-box")
    .querySelectorAll(".message");
  const lastMessageDom = messageDoms[messageDoms.length - 1];
  if (lastMessageDom) {
    lastMessageDom.textContent = content;
  }
}

/*************** iOS UI binding ***************/
// Add local Phi-4-mini model to dropdown (make it first)
const localOption = document.createElement("option");
localOption.value = localModel.model_id;
localOption.textContent = `${localModel.model_id} (iOS Optimized)`;
const modelSelection = document.getElementById("model-selection");
if (modelSelection) {
  modelSelection.appendChild(localOption);
}

// Add prebuilt models
availableModels.forEach((modelId) => {
  const option = document.createElement("option");
  option.value = modelId;
  option.textContent = modelId;
  if (modelSelection) {
    modelSelection.appendChild(option);
  }
});

// iOS button event listeners
const downloadButton = document.getElementById("download");
if (downloadButton) {
  downloadButton.addEventListener("click", function () {
    // iOS-specific download feedback
    if (isIOS) {
      this.textContent = "Downloading...";
      this.disabled = true;
    }
    
    initializeWebLLMEngine().then(() => {
      const sendButton = document.getElementById("send");
      if (sendButton) {
        sendButton.disabled = false;
      }
      
      // iOS download completion feedback
      if (isIOS && downloadButton) {
        downloadButton.textContent = "Download Complete!";
        setTimeout(() => {
          downloadButton.textContent = "Download";
          downloadButton.disabled = false;
        }, 2000);
      }
    });
  });
}

const sendButton = document.getElementById("send");
if (sendButton) {
  sendButton.addEventListener("click", function () {
    onMessageSend();
  });
}

// iOS-specific input optimizations
const userInput = document.getElementById("user-input");
if (userInput && isIOS) {
  // iOS keyboard optimizations
  userInput.setAttribute("autocapitalize", "off");
  userInput.setAttribute("autocorrect", "off");
  userInput.setAttribute("spellcheck", "false");
  
  // Handle iOS keyboard return key
  userInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onMessageSend();
    }
  });
  
  // iOS viewport handling
  userInput.addEventListener("focus", function() {
    setTimeout(() => {
      this.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  });
}

// iOS prevent zoom on input focus
if (isIOS) {
  const metaViewport = document.querySelector('meta[name=viewport]');
  if (metaViewport) {
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
  }
}

// iOS memory warning
if (isIOS && 'memory' in performance) {
  setInterval(() => {
    const memoryInfo = performance.memory;
    const usedMB = Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024);
    
    // Warning at 80% of available heap
    if (usedMB > memoryInfo.jsHeapSizeLimit * 0.8) {
      console.warn("iOS Memory usage high:", usedMB, "MB");
      manageMemory();
    }
  }, 30000); // Check every 30 seconds
}

console.log("🤖 iOS WebLLM initialized with mobile optimizations");
