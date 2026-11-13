"""Resize and encode existing website assets; never redraw or overwrite originals.
Requires Pillow. Run from the project root with the project's Python environment.
"""
from pathlib import Path
import json
import re
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "frontend" / "src"
OUTPUT = SRC / "assets" / "optimized"
OUTPUT.mkdir(parents=True, exist_ok=True)

LIMITS = {"logo-round": 512, "mandala": 896, "centro": 896, "katia-recorte": 960,
          "katia-cafe-recorte": 960, "wbpf-sao-paulo-sem-fundo": 320, "zion-gym": 480}
pattern = re.compile(r'(from\s+["\'])(\.\./assets/(?!optimized/)[^"\']+)(["\'])')
converted = {}
report = []

for component in list(SRC.rglob("*.jsx")) + list(SRC.rglob("*.js")):
    text = component.read_text(encoding="utf-8")

    def replace(match):
        source = (component.parent / match[2]).resolve()
        if source.suffix.lower() not in {".png", ".webp", ".jpg", ".jpeg"}:
            return match[0]
        if source not in converted:
            target = OUTPUT / (source.stem + ".webp")
            with Image.open(source) as original:
                image = ImageOps.exif_transpose(original).convert("RGBA")
                limit = LIMITS.get(source.stem, 360)
                image.thumbnail((limit, limit), Image.Resampling.LANCZOS)
                image.save(target, "WEBP", lossless=not source.stem.startswith("katia-"), quality=88, method=6)
                with Image.open(target) as verified:
                    assert verified.size == image.size
                    if image.getextrema()[3][0] < 255:
                        assert verified.convert("RGBA").getextrema()[3][0] < 255
                report.append({"asset": source.name, "before": source.stat().st_size,
                               "after": target.stat().st_size, "width": image.width, "height": image.height})
            converted[source] = target
        return match[1] + "../assets/optimized/" + converted[source].name + match[3]

    updated = pattern.sub(replace, text)
    if updated != text:
        component.write_text(updated, encoding="utf-8")

(OUTPUT / "optimization-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"assets": len(report), "before": sum(row["before"] for row in report),
                  "after": sum(row["after"] for row in report)}))
