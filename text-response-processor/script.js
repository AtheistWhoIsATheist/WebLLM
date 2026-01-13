// Response Structure Template - EXACT template to append
const RESPONSE_STRUCTURE_TEMPLATE = `Response Structure:
1. Executive Summary/Overview
2. Detailed Analysis/Content
3. Key Insights and Findings
4. Practical Recommendations
5. Action Items and Next Steps
6. Summary and Conclusion

Quality Constraints:
- Be absolutely precise and specific in all statements
- Verify every claim thoroughly is well-supported and verifiable
- Maintain absolute crystal-clear clarity and logical flow
- Focus on practical, actionable, and implementable insights
- Verify all information accuracy before presentation
- Consider multiple perspectives and potential objections
- Address edge cases and limitations transparently`;

// DOM Elements
const userInput = document.getElementById('userInput');
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

// Load saved data on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateButtonStates();
});

// Generate response structure
generateBtn.addEventListener('click', () => {
    const userText = userInput.value.trim();
    
    if (!userText) {
        showAlert('Please enter some text first.', 'warning');
        return;
    }
    
    // Concatenate user text with template (NO modification to user text)
    const combinedText = userText + '\n\n' + RESPONSE_STRUCTURE_TEMPLATE;
    
    // Display the combined result
    output.value = combinedText;
    
    // Save to localStorage
    saveData(userText, combinedText);
    
    // Update button states
    updateButtonStates();
    
    // Show success message
    showAlert('Response structure generated successfully!', 'success');
});

// Copy to clipboard
copyBtn.addEventListener('click', async () => {
    const textToCopy = output.value;
    
    if (!textToCopy) {
        showAlert('Nothing to copy. Generate the response structure first.', 'warning');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        showAlert('Copied to clipboard!', 'success');
    } catch (err) {
        // Fallback for older browsers
        output.select();
        document.execCommand('copy');
        showAlert('Copied to clipboard!', 'success');
    }
});

// Update button states based on input
userInput.addEventListener('input', () => {
    updateButtonStates();
});

// Function to update button states
function updateButtonStates() {
    const hasInput = userInput.value.trim().length > 0;
    const hasOutput = output.value.trim().length > 0;
    
    generateBtn.disabled = !hasInput;
    copyBtn.disabled = !hasOutput;
}

// Save data to localStorage
function saveData(userText, combinedText) {
    const data = {
        userText: userText,
        combinedText: combinedText,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('textProcessorData', JSON.stringify(data));
}

// Load data from localStorage
function loadSavedData() {
    try {
        const saved = localStorage.getItem('textProcessorData');
        if (saved) {
            const data = JSON.parse(saved);
            userInput.value = data.userText || '';
            output.value = data.combinedText || '';
        }
    } catch (err) {
        console.log('No saved data found or error loading data');
    }
}

// Show alert messages
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Style the alert
    Object.assign(alert.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 20px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600',
        fontSize: '0.9rem',
        zIndex: '1000',
        maxWidth: '300px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        opacity: '0',
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease'
    });
    
    // Set background color based on type
    if (type === 'success') {
        alert.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else if (type === 'warning') {
        alert.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    }
    
    // Add to document
    document.body.appendChild(alert);
    
    // Animate in
    setTimeout(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to generate
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !generateBtn.disabled) {
        e.preventDefault();
        generateBtn.click();
    }
    
    // Ctrl/Cmd + C to copy when output is focused
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && document.activeElement === output && !copyBtn.disabled) {
        e.preventDefault();
        copyBtn.click();
    }
});