from PIL import Image

src = r"G:\ONE MEMORIA\Heritage\En cour\Temple_Moriah\src\assets\images\logo.png"
out_assets = src
out_public = r"G:\ONE MEMORIA\Heritage\En cour\Temple_Moriah\public\logo.png"

im = Image.open(src).convert("RGBA")
pixels = im.load()
w, h = im.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r < 28 and g < 28 and b < 28:
            pixels[x, y] = (r, g, b, 0)

im.save(out_assets, "PNG")
im.save(out_public, "PNG")
print(f"transparent {w}x{h}")
