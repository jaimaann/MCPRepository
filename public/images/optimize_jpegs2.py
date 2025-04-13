import os
from PIL import Image

# === SETTINGS ===
INPUT_FOLDER = '/Users/jaimann/IdeaProjects/MCPRepository/public/images'
MAX_SIZE_BYTES = 1 * 128 * 1024  # 1 MB
INITIAL_QUALITY = 95
MIN_QUALITY = 30
RESIZE_FACTOR = 0.9  # reduce resolution by 10% at a time if needed

def get_image_size(file_path):
    return os.path.getsize(file_path)

def optimize_image(file_path):
    try:
        img = Image.open(file_path)
        img_format = img.format
        if img_format != 'JPEG':
            print(f"Skipping non-JPEG file: {file_path}")
            return

        output_path = file_path
        width, height = img.size
        quality = INITIAL_QUALITY

        while True:
            # Save to temporary in-memory buffer to test size
            temp_path = file_path + ".temp.jpg"
            img.save(temp_path, format='JPEG', quality=quality, optimize=True)
            size = get_image_size(temp_path)

            if size <= MAX_SIZE_BYTES or quality <= MIN_QUALITY:
                os.replace(temp_path, output_path)
                print(f"Optimized {os.path.basename(file_path)} to {size / 1024:.2f} KB at quality {quality}")
                break

            quality -= 5

            # If quality is too low, resize and retry
            if quality <= MIN_QUALITY:
                quality = INITIAL_QUALITY
                width = int(width * RESIZE_FACTOR)
                height = int(height * RESIZE_FACTOR)
                img = img.resize((width, height), Image.LANCZOS)
                print(f"Resized to {width}x{height} to try reducing size further...")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def optimize_folder(folder):
    for filename in os.listdir(folder):
        if filename.lower().endswith('.jpg') or filename.lower().endswith('.jpeg'):
            full_path = os.path.join(folder, filename)
            optimize_image(full_path)

if __name__ == '__main__':
    optimize_folder(INPUT_FOLDER)

