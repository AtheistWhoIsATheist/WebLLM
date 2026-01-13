#!/usr/bin/env python3
"""
Test script for the Friendly PEM Enhancer website
Tests key user-friendly features for non-coders
"""

import requests
import json
from bs4 import BeautifulSoup
import re

def test_website_accessibility():
    """Test if the website is accessible"""
    print("🔍 Testing website accessibility...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io', timeout=10)
        if response.status_code == 200:
            print("✅ Website is accessible")
            return True
        else:
            print(f"❌ Website returned status code: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ Website access failed: {e}")
        return False

def test_friendly_language():
    """Test that no technical jargon is present"""
    print("\n🔍 Testing for friendly, non-technical language...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io')
        content = response.text.lower()
        
        # Check for technical jargon that should NOT be present
        technical_terms = [
            'transformation layer',
            'pem methodology', 
            'architecture design',
            'consciousness engineering',
            'reality creation',
            'cosmic implementation'
        ]
        
        found_technical = []
        for term in technical_terms:
            if term.lower() in content:
                found_technical.append(term)
        
        if found_technical:
            print(f"❌ Found technical jargon: {found_technical}")
            return False
        
        # Check for friendly language that SHOULD be present
        friendly_terms = [
            'prompt magic',
            'enhance my prompt',
            'adding expert knowledge',
            'making it more precise',
            'magic prompt'
        ]
        
        found_friendly = []
        for term in friendly_terms:
            if term.lower() in content:
                found_friendly.append(term)
        
        print(f"✅ Found friendly language terms: {found_friendly}")
        print("✅ No technical jargon detected")
        return True
        
    except Exception as e:
        print(f"❌ Language test failed: {e}")
        return False

def test_ui_elements():
    """Test that the UI has the required simple elements"""
    print("\n🔍 Testing UI elements...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io')
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Check for required elements
        required_elements = {
            'text input': soup.find('textarea', {'id': 'userInput'}),
            'enhance button': soup.find('button', {'id': 'enhanceBtn'}),
            'results section': soup.find('div', {'id': 'resultsSection'}),
            'progress section': soup.find('div', {'id': 'progressSection'})
        }
        
        missing_elements = []
        for name, element in required_elements.items():
            if not element:
                missing_elements.append(name)
        
        if missing_elements:
            print(f"❌ Missing UI elements: {missing_elements}")
            return False
        
        print("✅ All required UI elements found")
        
        # Check button text is friendly
        enhance_btn = soup.find('button', {'id': 'enhanceBtn'})
        if enhance_btn and 'enhance my prompt' in enhance_btn.get_text().lower():
            print("✅ Button text is user-friendly")
        else:
            print("❌ Button text may not be user-friendly")
            return False
            
        return True
        
    except Exception as e:
        print(f"❌ UI test failed: {e}")
        return False

def test_example_suggestions():
    """Test that example suggestions are present"""
    print("\n🔍 Testing example suggestions...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io')
        content = response.text
        
        # Check for example suggestions
        example_patterns = [
            r'Write about artificial intelligence',
            r'Create a marketing strategy',
            r'Explain how to start',
            r'Design a workout routine',
            r'Write a product review'
        ]
        
        found_examples = []
        for pattern in example_patterns:
            if re.search(pattern, content, re.IGNORECASE):
                found_examples.append(pattern)
        
        if len(found_examples) >= 3:
            print(f"✅ Found {len(found_examples)} example suggestions")
            return True
        else:
            print(f"❌ Only found {len(found_examples)} example suggestions")
            return False
            
    except Exception as e:
        print(f"❌ Example suggestions test failed: {e}")
        return False

def test_progress_messages():
    """Test that progress messages are user-friendly"""
    print("\n🔍 Testing progress messages...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io')
        content = response.text
        
        # Check for friendly progress messages
        friendly_progress = [
            'adding expert knowledge',
            'structuring your request',
            'making it more precise',
            'adding quality standards',
            'applying special touches'
        ]
        
        found_messages = []
        for msg in friendly_progress:
            if msg.lower() in content.lower():
                found_messages.append(msg)
        
        if len(found_messages) >= 4:
            print(f"✅ Found friendly progress messages: {found_messages}")
            return True
        else:
            print(f"❌ Progress messages may not be user-friendly")
            return False
            
    except Exception as e:
        print(f"❌ Progress messages test failed: {e}")
        return False

def test_action_buttons():
    """Test that simple action buttons are present"""
    print("\n🔍 Testing action buttons...")
    
    try:
        response = requests.get('https://6utlu8u6cwro.space.minimax.io')
        content = response.text
        
        # Check for simple action buttons
        simple_buttons = [
            'copy result',
            'try again', 
            'save for later'
        ]
        
        found_buttons = []
        for btn in simple_buttons:
            if btn.lower() in content.lower():
                found_buttons.append(btn)
        
        if len(found_buttons) >= 2:
            print(f"✅ Found simple action buttons: {found_buttons}")
            return True
        else:
            print(f"❌ Action buttons may not be simple enough")
            return False
            
    except Exception as e:
        print(f"❌ Action buttons test failed: {e}")
        return False

def main():
    """Run all tests"""
    print("🚀 Testing Friendly PEM Enhancer Website")
    print("=" * 50)
    
    tests = [
        test_website_accessibility,
        test_friendly_language,
        test_ui_elements,
        test_example_suggestions,
        test_progress_messages,
        test_action_buttons
    ]
    
    passed = 0
    total = len(tests)
    
    for test_func in tests:
        if test_func():
            passed += 1
    
    print("\n" + "=" * 50)
    print(f"🎯 Test Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Website meets user-friendly requirements.")
    else:
        print("⚠️  Some tests failed. Review the output above.")
    
    return passed == total

if __name__ == "__main__":
    main()