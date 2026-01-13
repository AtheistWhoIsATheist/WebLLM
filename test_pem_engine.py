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

try:
    print('=== TESTING PEM TRANSFORMATION ENGINE ===\n')
    
    driver = webdriver.Chrome(options=chrome_options)
    driver.get('https://oae4fwhudcnb.space.minimax.io')
    
    # Wait for page to load
    time.sleep(3)
    
    # Test 1: Layout and UI Verification
    print('1. Testing Layout and UI:')
    try:
        # Check if page loaded properly
        title = driver.title
        print(f'   Page Title: {title}')
        
        # Check main sections exist
        input_section = driver.find_element(By.CLASS_NAME, 'input-section')
        output_section = driver.find_element(By.CLASS_NAME, 'output-section')
        transform_button = driver.find_element(By.ID, 'enhanceBtn')
        
        print('   ✓ Input section found')
        print('   ✓ Output section found')
        print('   ✓ Transform button found')
        
        # Check for 8-layer progress structure
        progress_items = driver.find_elements(By.CLASS_NAME, 'progress-item')
        print(f'   ✓ Found {len(progress_items)} progress layers')
        
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
    
    print()
    
    # Test 2: Transformation Functionality
    print('2. Testing Transformation Engine:')
    try:
        # Find input field and transform button
        input_field = driver.find_element(By.ID, 'userInput')
        output_field = document.get_element_by_id('output') if False else driver.find_element(By.ID, 'output')
        transform_button = driver.find_element(By.ID, 'enhanceBtn')
        
        # Enter test prompt
        test_prompt = 'Write about AI'
        input_field.clear()
        input_field.send_keys(test_prompt)
        time.sleep(1)
        
        print(f'   Input prompt: "{test_prompt}"')
        
        # Click transform button
        transform_button.click()
        print('   Clicked "Transform Prompt" button')
        
        # Wait for transformation to complete
        WebDriverWait(driver, 15).until(
            lambda driver: output_field.get_attribute('value') != ''
        )
        time.sleep(2)
        
        transformed_output = output_field.get_attribute('value')
        print(f'   Transformation result length: {len(transformed_output)} characters')
        
        # Check for transformation indicators
        transformation_markers = [
            'You are',
            'TASK',
            'STRUCTURED FRAMEWORK',
            'QUALITY CONSTRAINTS',
            'META-COGNITIVE',
            'CONSCIOUSNESS',
            'UNIVERSAL PRINCIPLES',
            'HIGHEST GOOD'
        ]
        
        markers_found = []
        for marker in transformation_markers:
            if marker in transformed_output:
                markers_found.append(marker)
        
        print(f'   Found {len(markers_found)}/{len(transformation_markers)} transformation markers:')
        for marker in markers_found:
            print(f'     - {marker}')
        
        # Check enhancement count
        enhancement_count = driver.find_element(By.ID, 'enhancementCount')
        count_text = enhancement_count.text
        print(f'   Enhancement count: {count_text}')
        
        if len(transformed_output) > len(test_prompt) * 5:  # Should be at least 5x longer
            print('   ✓ PASS: Transformation produced significantly enhanced output')
        else:
            print('   ⚠ WARNING: Output may not be sufficiently enhanced')
            
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
        import traceback
        traceback.print_exc()
    
    print()
    
    # Test 3: Button States and Functionality
    print('3. Testing Button States:')
    try:
        # Test if buttons are properly enabled/disabled
        further_enhance_btn = driver.find_element(By.ID, 'furtherEnhanceBtn')
        copy_btn = driver.find_element(By.ID, 'copyBtn')
        save_btn = driver.find_element(By.ID, 'saveBtn')
        
        if not further_enhance_btn.get_attribute('disabled'):
            print('   ✓ Further Transform button is enabled')
        else:
            print('   ✗ Further Transform button is disabled when output exists')
            
        if not copy_btn.get_attribute('disabled'):
            print('   ✓ Copy button is enabled')
        else:
            print('   ✗ Copy button is disabled when output exists')
            
        if not save_btn.get_attribute('disabled'):
            print('   ✓ Save button is enabled')
        else:
            print('   ✗ Save button is disabled when output exists')
            
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
    
    print()
    
    # Test 4: Sample Output Verification
    print('4. Sample Output Analysis:')
    try:
        if transformed_output:
            print('   First 200 characters of transformed output:')
            print(f'   "{transformed_output[:200]}..."')
            
            # Check for specific enhancement features
            features_check = {
                'Expert Role Definition': 'You are a distinguished' in transformed_output,
                'Task Structure': '**TASK:**' in transformed_output,
                'Framework Elements': 'STRUCTURED FRAMEWORK' in transformed_output,
                'Quality Standards': 'QUALITY CONSTRAINTS' in transformed_output,
                'Consciousness Elements': 'CONSCIOUSNESS' in transformed_output,
                'Universal Principles': 'UNIVERSAL PRINCIPLES' in transformed_output
            }
            
            print('   Enhancement features detected:')
            for feature, present in features_check.items():
                status = '✓' if present else '✗'
                print(f'     {status} {feature}')
        else:
            print('   No output to analyze')
    
    except Exception as e:
        print(f'   ✗ ERROR: {e}')
    
    print('\n=== TEST COMPLETE ===')
    print(f'Deployed URL: https://oae4fwhudcnb.space.minimax.io')
    
except Exception as e:
    print(f'Error during testing: {e}')
    import traceback
    traceback.print_exc()
finally:
    if 'driver' in locals():
        driver.quit()