"""Génère les icônes et écrans de démarrage PWA à partir du logo du Temple."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src" / "assets" / "images" / "logo.png"
PUBLIC = ROOT / "public"
ICONS = PUBLIC / "icons"
SPLASH = PUBLIC / "splash"
BG = (232, 238, 246, 255)


def load_logo() -> Image.Image:
    im = Image.open(SRC).convert("RGBA")
    im.thumbnail((800, 800), Image.Resampling.LANCZOS)
    return im


def fit_logo(logo: Image.Image, canvas: int, pad_ratio: float) -> Image.Image:
    out = Image.new("RGBA", (canvas, canvas), BG)
    inner = max(1, int(canvas * (1 - pad_ratio * 2)))
    copy = logo.copy()
    copy.thumbnail((inner, inner), Image.Resampling.LANCZOS)
    x = (canvas - copy.width) // 2
    y = (canvas - copy.height) // 2
    out.paste(copy, (x, y), copy)
    return out.convert("RGB")


def splash(logo: Image.Image, w: int, h: int) -> Image.Image:
    out = Image.new("RGBA", (w, h), BG)
    side = int(min(w, h) * 0.38)
    copy = logo.copy()
    copy.thumbnail((side, side), Image.Resampling.LANCZOS)
    x = (w - copy.width) // 2
    y = (h - copy.height) // 2
    out.paste(copy, (x, y), copy)
    return out.convert("RGB")


def main() -> None:
    ICONS.mkdir(parents=True, exist_ok=True)
    SPLASH.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    logo = load_logo()
    logo.save(PUBLIC / "logo.png", "PNG")

    fit_logo(logo, 192, 0.16).save(ICONS / "pwa-192.png", "PNG", optimize=True)
    fit_logo(logo, 512, 0.16).save(ICONS / "pwa-512.png", "PNG", optimize=True)
    fit_logo(logo, 512, 0.22).save(ICONS / "pwa-512-maskable.png", "PNG", optimize=True)
    fit_logo(logo, 180, 0.12).save(ICONS / "apple-touch-icon.png", "PNG", optimize=True)
    fit_logo(logo, 32, 0.1).save(ICONS / "favicon-32.png", "PNG", optimize=True)
    fit_logo(logo, 48, 0.1).save(ICONS / "favicon-48.png", "PNG", optimize=True)

    for w, h in (
        (1170, 2532),
        (1290, 2796),
        (1125, 2436),
        (828, 1792),
        (750, 1334),
        (2048, 2732),
    ):
        splash(logo, w, h).save(SPLASH / f"apple-splash-{w}x{h}.png", "PNG", optimize=True)

    print("PWA icons generated")


if __name__ == "__main__":
    main()
