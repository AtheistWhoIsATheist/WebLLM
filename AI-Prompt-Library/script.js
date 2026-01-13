// AI Prompt Library - Enhanced JavaScript functionality

class PromptLibrary {
    constructor() {
        this.prompts = {};
        this.categories = {};
        this.loadData();
        this.initializeEventListeners();
    }

    loadData() {
        // Embedded prompt data to work without external JSON file
        this.categories = {
            "content_writing": {
                name: "Content Writing",
                description: "Create engaging content for blogs, social media, and newsletters",
                color: "#3498db"
            },
            "business_marketing": {
                name: "Business & Marketing", 
                description: "Professional content for business and marketing needs",
                color: "#e74c3c"
            },
            "creative_writing": {
                name: "Creative Writing",
                description: "Fiction, poetry, and creative content generation",
                color: "#f39c12"
            },
            "technical_development": {
                name: "Technical & Development",
                description: "Code, documentation, and technical content",
                color: "#9b59b6"
            },
            "research_analysis": {
                name: "Research & Analysis",
                description: "Data analysis, market research, and competitive intelligence",
                color: "#2ecc71"
            }
        };

        this.prompts = {
            "content_writing": [
                {
                    id: "blog_post",
                    name: "Blog Post Creator",
                    description: "Generate comprehensive blog posts on any topic",
                    template: "Write a comprehensive blog post about {topic}. Include an engaging introduction, 3-5 main points with subheadings, practical examples, and a compelling conclusion. Make it informative yet engaging for general readers.",
                    variables: ["topic"]
                },
                {
                    id: "social_media",
                    name: "Social Media Post",
                    description: "Create viral social media content",
                    template: "Create a compelling social media post about {topic}. Include relevant hashtags, an attention-grabbing hook, and a clear call-to-action. Keep it under 300 characters and make it shareable.",
                    variables: ["topic"]
                },
                {
                    id: "newsletter",
                    name: "Email Newsletter",
                    description: "Professional newsletter content",
                    template: "Write a professional email newsletter about {topic}. Include a friendly greeting, 3-4 main sections with valuable insights, and a warm closing. Make it informative but not overwhelming.",
                    variables: ["topic"]
                }
            ],
            "business_marketing": [
                {
                    id: "product_description", 
                    name: "Product Description",
                    description: "Compelling product descriptions that convert",
                    template: "Write a compelling product description for {product}. Focus on benefits, include technical specifications, address potential objections, and create urgency. Target audience: {target_audience}.",
                    variables: ["product", "target_audience"]
                },
                {
                    id: "marketing_strategy",
                    name: "Marketing Strategy",
                    description: "Develop comprehensive marketing strategies",
                    template: "Create a comprehensive marketing strategy for {product_service}. Include target audience analysis, positioning, channel recommendations, budget allocation, and success metrics.",
                    variables: ["product_service"]
                },
                {
                    id: "sales_email",
                    name: "Sales Email",
                    description: "High-converting sales emails",
                    template: "Write a persuasive sales email for {product}. Include a compelling subject line, address the prospect's pain point, present the solution, include social proof, and end with a clear call-to-action.",
                    variables: ["product"]
                }
            ],
            "creative_writing": [
                {
                    id: "story_generator",
                    name: "Story Generator", 
                    description: "Create engaging fictional narratives",
                    template: "Write an engaging short story based on these elements: {genre}, {setting}, {main_character}, and {conflict}. Include a compelling beginning, character development, rising action, climax, and satisfying resolution.",
                    variables: ["genre", "setting", "main_character", "conflict"]
                },
                {
                    id: "character_development",
                    name: "Character Development",
                    description: "Develop rich, complex characters",
                    template: "Create a detailed character profile for {character_name}. Include their background, personality traits, motivations, fears, goals, dialogue style, and how they might evolve throughout a story.",
                    variables: ["character_name"]
                },
                {
                    id: "poetry_creator",
                    name: "Poetry Creator",
                    description: "Various poetic forms and styles",
                    template: "Write a {poetry_form} poem about {topic}. Use {tone_mood} tone, incorporate imagery related to {theme}, and make it resonate with the intended emotional response.",
                    variables: ["poetry_form", "topic", "tone_mood", "theme"]
                }
            ],
            "technical_development": [
                {
                    id: "code_reviewer",
                    name: "Code Reviewer",
                    description: "Improve code quality and structure", 
                    template: "Review the following {language} code and provide specific improvement suggestions: {code}. Focus on: readability, performance, security, best practices, and potential bugs. Provide before/after examples.",
                    variables: ["language", "code"]
                },
                {
                    id: "documentation_writer",
                    name: "Documentation Writer",
                    description: "Clear technical documentation",
                    template: "Write clear, comprehensive documentation for {software_feature}. Include: overview, installation instructions, usage examples, API reference, and troubleshooting guide. Use simple language for non-technical users.",
                    variables: ["software_feature"]
                },
                {
                    id: "bug_debugger",
                    name: "Bug Debugger",
                    description: "Identify and solve programming issues",
                    template: "Help debug this code: {code_problem}. Identify the root cause, explain why it's happening, and provide a complete solution with explanation. Also suggest prevention strategies.",
                    variables: ["code_problem"]
                }
            ],
            "research_analysis": [
                {
                    id: "market_research",
                    name: "Market Research",
                    description: "Comprehensive market analysis and insights",
                    template: "Conduct comprehensive market research on {industry_product}. Include: market size, growth trends, key players, consumer behavior, opportunities, threats, and strategic recommendations.",
                    variables: ["industry_product"]
                },
                {
                    id: "data_analysis",
                    name: "Data Analysis",
                    description: "Interpret and analyze datasets",
                    template: "Analyze the following data: {data}. Identify key patterns, trends, and insights. Provide visualizations suggestions, statistical analysis, and actionable recommendations based on the findings.",
                    variables: ["data"]
                },
                {
                    id: "competitor_analysis",
                    name: "Competitor Analysis",
                    description: "Detailed competitive intelligence",
                    template: "Perform a comprehensive competitor analysis for {competitor}. Include: strengths, weaknesses, market positioning, pricing strategy, unique value propositions, and areas where we can differentiate.",
                    variables: ["competitor"]
                }
            ]
        };
    }

    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.loadCategories();
        });
    }

    loadCategories() {
        console.log('Loading categories...');
        console.log('Categories:', this.categories);
        console.log('Prompts:', this.prompts);
        
        const categoriesDiv = document.getElementById('categories');
        if (!categoriesDiv) {
            console.error('Categories div not found!');
            return;
        }

        categoriesDiv.innerHTML = '';
        
        Object.keys(this.prompts).forEach(categoryKey => {
            const category = this.categories[categoryKey];
            if (!category) {
                console.warn(`No category found for key: ${categoryKey}`);
                return;
            }

            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.style.borderLeftColor = category.color;
            
            const promptCount = this.prompts[categoryKey].length;
            
            categoryDiv.innerHTML = `
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <p><strong>${promptCount} prompt templates</strong></p>
                <button onclick="window.promptLibrary.togglePrompts('${categoryKey}')">View Prompts</button>
            `;
            
            categoriesDiv.appendChild(categoryDiv);
        });
        
        console.log('Categories loaded successfully');
    }

    togglePrompts(categoryKey) {
        console.log('togglePrompts called with:', categoryKey);
        console.log('Available categories:', Object.keys(this.categories));
        
        const existingPrompts = document.getElementById(`prompts-${categoryKey}`);
        if (existingPrompts) {
            existingPrompts.style.display = existingPrompts.style.display === 'none' ? 'block' : 'none';
            return;
        }

        const categoryDiv = Array.from(document.getElementsByClassName('category'))
            .find(div => div.textContent.includes(this.categories[categoryKey].name));
        
        if (!categoryDiv) {
            console.error('Category div not found for:', categoryKey);
            return;
        }

        const promptsDiv = document.createElement('div');
        promptsDiv.id = `prompts-${categoryKey}`;
        promptsDiv.className = 'prompts';
        promptsDiv.style.display = 'block';
        
        this.prompts[categoryKey].forEach((prompt, index) => {
            const promptDiv = document.createElement('div');
            promptDiv.className = 'prompt';
            promptDiv.innerHTML = `
                <h4>${prompt.name}</h4>
                <p>${prompt.description}</p>
                <div class="prompt-content">${prompt.template}</div>
                <div style="margin-top: 10px;">
                    <button class="copy-btn" onclick="window.promptLibrary.copyPrompt('${categoryKey}', ${index})">Copy Template</button>
                    <button class="customize-btn" onclick="window.promptLibrary.customizePrompt('${categoryKey}', ${index})">Customize</button>
                </div>
            `;
            promptsDiv.appendChild(promptDiv);
        });
        
        categoryDiv.appendChild(promptsDiv);
        console.log('Prompts expanded for category:', categoryKey);
    }

    copyPrompt(categoryKey, index) {
        const prompt = this.prompts[categoryKey][index];
        const textToCopy = prompt.template;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            this.showNotification('Template copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy to clipboard', 'error');
        });
    }

    customizePrompt(categoryKey, index) {
        const prompt = this.prompts[categoryKey][index];
        
        if (prompt.variables && prompt.variables.length > 0) {
            this.showVariableInput(prompt, categoryKey, index);
        } else {
            this.showNotification('This template has no customizable variables', 'info');
        }
    }

    showVariableInput(prompt, categoryKey, index) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        let variableInputs = '';
        prompt.variables.forEach(variable => {
            variableInputs += `
                <div style="margin-bottom: 15px;">
                    <label style="display: block; margin-bottom: 5px; font-weight: bold; text-transform: capitalize;">${variable.replace('_', ' ')}:</label>
                    <input type="text" id="var-${variable}" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" placeholder="Enter ${variable.replace('_', ' ')}">
                </div>
            `;
        });
        
        modalContent.innerHTML = `
            <h3>Customize "${prompt.name}"</h3>
            <p>Fill in the variables to customize your prompt:</p>
            ${variableInputs}
            <div style="text-align: right; margin-top: 20px;">
                <button id="cancel-btn" style="margin-right: 10px; padding: 8px 15px; border: none; background: #95a5a6; color: white; border-radius: 4px; cursor: pointer;">Cancel</button>
                <button id="generate-btn" style="padding: 8px 15px; border: none; background: #3498db; color: white; border-radius: 4px; cursor: pointer;">Generate</button>
            </div>
        `;
        
        // Store category and index for later use
        modalContent.dataset.categoryKey = categoryKey;
        modalContent.dataset.promptIndex = index;
        
        // Add event listeners
        document.getElementById('cancel-btn').onclick = () => modal.remove();
        document.getElementById('generate-btn').onclick = () => {
            this.generateCustomPrompt(categoryKey, index);
        };
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }

    generateCustomPrompt(categoryKey, index) {
        const prompt = this.prompts[categoryKey][index];
        let customizedPrompt = prompt.template;
        
        prompt.variables.forEach(variable => {
            const value = document.getElementById(`var-${variable}`).value || `[${variable}]`;
            customizedPrompt = customizedPrompt.replace(new RegExp(`{${variable}}`, 'g'), value);
        });
        
        // Copy the customized prompt
        navigator.clipboard.writeText(customizedPrompt).then(() => {
            this.showNotification('Customized prompt copied to clipboard!', 'success');
        });
        
        // Close modal
        document.querySelector('.modal').remove();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        switch (type) {
            case 'success':
                notification.style.background = '#27ae60';
                break;
            case 'error':
                notification.style.background = '#e74c3c';
                break;
            default:
                notification.style.background = '#3498db';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize the prompt library
console.log('Initializing prompt library...');
const promptLibrary = new PromptLibrary();
console.log('Prompt library initialized:', promptLibrary);

// Make functions globally accessible
window.promptLibrary = promptLibrary;