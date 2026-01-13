import time
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Setup Chrome options
chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--window-size=1920,1080')
chrome_options.add_argument('--disable-web-security')
chrome_options.add_argument('--allow-running-insecure-content')

try:
    print('=== TESTING PROMPT ENHANCER FIXES ===\n')
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://oerrot9se2wt.space.minimax.io')
    
    # Wait for page to load
    time.sleep(3)
    
    # Test 1: Layout Verification - Check if buttons are below output section
    print('1. Testing Layout:')
    try:
        # Find the input section, output section, and action buttons
        input_section = driver.find_element(By.CLASS_NAME, 'input-section')
        output_section = driver.find_element(By.CLASS_NAME, 'output-section')
        action_buttons = driver.find_element(By.CLASS_NAME, 'action-buttons-row')
        
        # Get element positions
        input_rect = input_section.location
        output_rect = output_section.location
        buttons_rect = action_buttons.location
        
        print(f'   Input section Y: {input_rect["y"]}')
        print(f'   Output section Y: {output_rect["y"]}')
        print(f'   Action buttons Y: {buttons_rect["y"]}')
        
        if buttons_rect['y'] > output_rect['y']:
            print('   ✓ PASS: Action buttons are positioned below output section')
        else:
            print('   ✗ FAIL: Action buttons are NOT below output section')
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
    
    print()
    
    # Test 2: Functionality Testing
    print('2. Testing Enhancement Functionality:')
    try:
        # Find input field and enhance button
        input_field = driver.find_element(By.ID, 'userInput')
        enhance_button = driver.find_element(By.ID, 'enhanceBtn')
        output_field = driver.find_element(By.ID, 'output')
        further_enhance_button = driver.find_element(By.ID, 'furtherEnhanceBtn')
        
        # Enter test prompt
        test_prompt = 'Write about AI'
        input_field.clear()
        input_field.send_keys(test_prompt)
        time.sleep(1)
        
        # Click enhance button
        enhance_button.click()
        print('   Clicked "Prompt Enhance" button')
        
        # Wait for enhancement to complete
        WebDriverWait(driver, 10).until(
            lambda driver: output_field.get_attribute('value') != ''
        )
        time.sleep(2)
        
        first_enhancement = output_field.get_attribute('value')
        print(f'   First enhancement length: {len(first_enhancement)} characters')
        
        # Now click further enhance
        further_enhance_button.click()
        print('   Clicked "Further Enhanced" button')
        
        # Wait for further enhancement
        time.sleep(4)
        second_enhancement = output_field.get_attribute('value')
        print(f'   Further enhancement length: {len(second_enhancement)} characters')
        
        # Compare results
        if second_enhancement != first_enhancement and len(second_enhancement) > len(first_enhancement):
            print('   ✓ PASS: Further enhancement produces different (longer) output')
            
            # Check for additional enhancement markers
            markers_found = []
            if 'ADVANCED ROLE DEFINITION' in second_enhancement:
                markers_found.append('advanced role definition')
            if 'EXPANDED TASK FRAMEWORK' in second_enhancement:
                markers_found.append('expanded task framework')
            if 'ENHANCED CONSTRAINTS' in second_enhancement:
                markers_found.append('enhanced constraints')
            if 'META-COGNITIVE AMPLIFICATION' in second_enhancement:
                markers_found.append('meta-cognitive amplification')
                
            if markers_found:
                print(f'   ✓ PASS: Found {len(markers_found)} additional enhancement layer(s): {", ".join(markers_found)}')
            else:
                print('   ⚠ WARNING: No specific additional enhancement markers found')
        else:
            print('   ✗ FAIL: Further enhancement produces same or shorter output')
            print(f'   First: {len(first_enhancement)} chars')
            print(f'   Second: {len(second_enhancement)} chars')
    
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
        import traceback
        traceback.print_exc()
    
    print()
    
    # Test 3: Additional functionality
    print('3. Testing Other Buttons:')
    try:
        # Test copy button
        copy_button = driver.find_element(By.ID, 'copyBtn')
        if not copy_button.get_attribute('disabled'):
            print('   ✓ Copy button is enabled when output exists')
        else:
            print('   ✗ Copy button is disabled when output exists')
            
        # Test save button
        save_button = driver.find_element(By.ID, 'saveBtn')
        if not save_button.get_attribute('disabled'):
            print('   ✓ Save button is enabled when output exists')
        else:
            print('   ✗ Save button is disabled when output exists')
            
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
    
    print('\n=== TEST COMPLETE ===')
    
except Exception as e:
    print(f'Error during testing: {e}')
    import traceback
    traceback.print_exc()
finally:
    if 'driver' in locals():
        driver.quit()
