from pathlib import Path

import pillow_heif
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
IMAGE_DIR = ROOT / "public" / "images"
NAMES = ("gem-hero", "gem-pool", "gem-beach", "gem-family", "gem-island")


for name in NAMES:
    output = IMAGE_DIR / f"{name}.jpg"
    source = IMAGE_DIR / f"{name}.source.heic"

    if not source.exists():
        output.replace(source)

    heif = pillow_heif.read_heif(source)
    image = Image.frombytes(heif.mode, heif.size, heif.data, "raw")
    image = ImageOps.exif_transpose(image).convert("RGB")
    image.thumbnail((2200, 2200), Image.Resampling.LANCZOS)
    image.save(output, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"{name}: {image.width}x{image.height} -> {output.name}")
