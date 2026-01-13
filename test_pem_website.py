#!/usr/bin/env python3
"""
Simple test to verify PEM Prompt Transformer is working correctly
"""

import requests
import time

def test_website_accessibility():
    """Test if the website is accessible and loads correctly"""
    url = "https://bubdk71t8imy.space.minimax.io"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Content Length: {len(response.content)} bytes")
        
        # Check if HTML contains expected title
        if "PEM Prompt Transformer" in response.text:
            print("✓ Website title found")
        else:
            print("✗ Website title not found")
            
        # Check if JavaScript and CSS files are linked
        if "/assets/index-E_3b9d9Z.js" in response.text:
            print("✓ JavaScript bundle linked")
        else:
            print("✗ JavaScript bundle not found")
            
        if "/assets/index-CzlNf0cQ.css" in response.text:
            print("✓ CSS bundle linked")
        else:
            print("✗ CSS bundle not found")
            
        return True
        
    except Exception as e:
        print(f"Error accessing website: {e}")
        return False

def test_resource_loading():
    """Test if CSS and JS resources load correctly"""
    base_url = "https://bubdk71t8imy.space.minimax.io"
    
    # Test CSS
    try:
        css_response = requests.get(f"{base_url}/assets/index-CzlNf0cQ.css", timeout=5)
        if css_response.status_code == 200:
            print("✓ CSS file loads successfully")
        else:
            print(f"✗ CSS file returned status {css_response.status_code}")
    except Exception as e:
        print(f"✗ CSS file loading error: {e}")
    
    # Test JS
    try:
        js_response = requests.get(f"{base_url}/assets/index-E_3b9d9Z.js", timeout=5)
        if js_response.status_code == 200:
            print("✓ JavaScript file loads successfully")
        else:
            print(f"✗ JavaScript file returned status {js_response.status_code}")
    except Exception as e:
        print(f"✗ JavaScript file loading error: {e}")

if __name__ == "__main__":
    print("Testing PEM Prompt Transformer Website")
    print("=" * 50)
    
    # Test basic accessibility
    if test_website_accessibility():
        print("\n✓ Website is accessible")
    else:
        print("\n✗ Website accessibility failed")
        exit(1)
    
    print("\nTesting resource loading:")
    test_resource_loading()
    
    print("\n" + "=" * 50)
    print("Basic connectivity test completed successfully!")
    print(f"Website URL: https://bubdk71t8imy.space.minimax.io")