from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
OUT = PUBLIC / "modoodoc"
OUT.mkdir(parents=True, exist_ok=True)

W = H = 1080
NAVY = "#102f47"
BLUE = "#187fb4"
SKY = "#e8f6fc"
PALE = "#f5fbfe"
MINT = "#54c1bd"
INK = "#183142"
MUTED = "#667b88"
LINE = "#dbeaf1"
WHITE = "#ffffff"
FONT = Path(r"C:\Windows\Fonts\NotoSansKR-VF.ttf")


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONT), size=size, layout_engine=ImageFont.Layout.RAQM)


def gradient(size: tuple[int, int], top: str, bottom: str) -> Image.Image:
    a = tuple(int(top[i : i + 2], 16) for i in (1, 3, 5))
    b = tuple(int(bottom[i : i + 2], 16) for i in (1, 3, 5))
    im = Image.new("RGB", size)
    px = im.load()
    for y in range(size[1]):
        t = y / max(size[1] - 1, 1)
        c = tuple(round(a[k] * (1 - t) + b[k] * t) for k in range(3))
        for x in range(size[0]):
            px[x, y] = c
    return im


def fit(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    scale = max(size[0] / im.width, size[1] / im.height)
    resized = im.resize((round(im.width * scale), round(im.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - size[0]) // 2
    top = (resized.height - size[1]) // 2
    return resized.crop((left, top, left + size[0], top + size[1]))


def contain(im: Image.Image, size: tuple[int, int]) -> Image.Image:
    scale = min(size[0] / im.width, size[1] / im.height)
    return im.resize((round(im.width * scale), round(im.height * scale)), Image.Resampling.LANCZOS)


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, *size), radius=radius, fill=255)
    return mask


def rounded_image(im: Image.Image, size: tuple[int, int], radius: int) -> Image.Image:
    return Image.composite(fit(im.convert("RGB"), size), Image.new("RGB", size, WHITE), rounded_mask(size, radius))


def wrap(draw: ImageDraw.ImageDraw, text: str, f: ImageFont.FreeTypeFont, max_width: int) -> list[str]:
    lines: list[str] = []
    for paragraph in text.split("\n"):
        line = ""
        for ch in paragraph:
            trial = line + ch
            if draw.textlength(trial, font=f) <= max_width or not line:
                line = trial
            else:
                lines.append(line.rstrip())
                line = ch.lstrip()
        lines.append(line)
    return lines


def multiline(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, f: ImageFont.FreeTypeFont,
              fill: str, max_width: int, spacing: int = 12, anchor: str | None = None) -> int:
    lines = wrap(draw, text, f, max_width)
    line_h = f.size + spacing
    x, y = xy
    for line in lines:
        draw.text((x, y), line, font=f, fill=fill, anchor=anchor)
        y += line_h
    return y


def pill(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, bg: str = SKY, fg: str = BLUE) -> None:
    f = font(25, True)
    tw = int(draw.textlength(text, font=f))
    x, y = xy
    draw.rounded_rectangle((x, y, x + tw + 34, y + 48), radius=24, fill=bg)
    draw.text((x + 17, y + 8), text, font=f, fill=fg)


def brand(draw: ImageDraw.ImageDraw, page: str, inverse: bool = False) -> None:
    fg = WHITE if inverse else NAVY
    draw.text((68, 54), "JJ UROLOGY", font=font(24, True), fill=fg)
    draw.text((1012, 56), page, font=font(22), fill=fg, anchor="ra")


def footer(draw: ImageDraw.ImageDraw, inverse: bool = False) -> None:
    fg = "#d7eaf3" if inverse else "#8aa0ad"
    draw.line((68, 1010, 1012, 1010), fill=fg, width=2)
    draw.text((68, 1026), "JJ비뇨기과 · 1599-5952", font=font(21, True), fill=fg)
    draw.text((1012, 1026), "개인별 상태에 따라 수술 방법과 회복 과정은 달라질 수 있습니다.", font=font(17), fill=fg, anchor="ra")


def save(im: Image.Image, name: str) -> None:
    im.save(OUT / name, quality=94)


def card_base(page: str, title: str, subtitle: str = "") -> tuple[Image.Image, ImageDraw.ImageDraw, int]:
    im = gradient((W, H), "#f8fcfe", "#eef8fc")
    d = ImageDraw.Draw(im)
    brand(d, page)
    y = 132
    y = multiline(d, (68, y), title, font(56, True), NAVY, 930, 14)
    if subtitle:
        y = multiline(d, (70, y + 12), subtitle, font(25), MUTED, 920, 9)
    return im, d, y + 28


def build_cover() -> None:
    bg = Image.open(OUT / "cover-background-v1.png").convert("RGB")
    im = fit(bg, (W, H))
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for x in range(650):
        a = round(240 * (1 - x / 650) ** 1.7)
        od.line((x, 0, x, H), fill=(245, 251, 254, a))
    od.rectangle((0, 0, W, H), fill=(8, 45, 67, 18))
    im = Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(im)
    brand(d, "01 / 09")
    pill(d, (68, 180), "PRESERVATION DESIGN")
    d.text((68, 274), "얼마나 제거하느냐보다", font=font(46, True), fill=NAVY)
    d.text((68, 343), "무엇을 남기느냐가", font=font(61, True), fill="#0d6fa4")
    d.text((68, 422), "중요합니다", font=font(61, True), fill="#0d6fa4")
    d.line((70, 530, 330, 530), fill=MINT, width=8)
    d.text((68, 570), "개인 맞춤 포경수술", font=font(31, True), fill=NAVY)
    d.text((68, 622), "표재근막 보존 중심 · 섬세한 미세 봉합", font=font(24), fill=INK)
    footer(d)
    save(im, "01-cover.png")


def build_indications() -> None:
    im, d, y = card_base("02 / 09", "모두에게 필요한 수술은\n아닙니다", "증상과 불편의 정도를 확인한 뒤 의료진과 필요성을 판단합니다.")
    items = [
        ("진성포경", "포피가 자연스럽게 젖혀지지 않는 경우", "indication-phimosis-v3.webp"),
        ("반복 염증", "귀두포피염이 반복되는 경우", "indication-inflammation-v4.webp"),
        ("감돈포경", "젖혀진 포피가 붓기와 통증을 만드는 경우", "indication-paraphimosis.webp"),
        ("위생 불편", "분비물·냄새 관리가 지속적으로 어려운 경우", "indication-hygiene-v3.webp"),
    ]
    for i, (title, desc, asset) in enumerate(items):
        col, row = i % 2, i // 2
        x, yy = 68 + col * 482, y + row * 270
        d.rounded_rectangle((x, yy, x + 454, yy + 240), radius=30, fill=WHITE, outline=LINE, width=2)
        icon = Image.open(PUBLIC / "generated-icons" / asset).convert("RGBA")
        icon.thumbnail((122, 122))
        im.paste(icon, (x + 24, yy + 34), icon)
        d.text((x + 172, yy + 46), f"0{i + 1}", font=font(20, True), fill=MINT)
        d.text((x + 172, yy + 82), title, font=font(31, True), fill=NAVY)
        multiline(d, (x + 172, yy + 134), desc, font(19), MUTED, 250, 6)
    footer(d)
    save(im, "02-indications.png")


def build_designs() -> None:
    im, d, y = card_base("03 / 09", "포경수술에도\n디자인이 있습니다", "절개선 위치와 피부 여유를 개인별 구조에 맞춰 설계합니다.")
    types = [
        ("LOW · LOOSE", "낮은 절개선 · 여유 있게", "circum-type-low-loose-v5.webp", True),
        ("LOW · TIGHT", "낮은 절개선 · 타이트하게", "circum-type-low-tight-v4.webp", False),
        ("HIGH · LOOSE", "높은 절개선 · 여유 있게", "circum-type-high-loose-v4.webp", False),
        ("HIGH · TIGHT", "높은 절개선 · 타이트하게", "circum-type-high-tight-v4.webp", False),
    ]
    for i, (code, label, asset, recommended) in enumerate(types):
        col, row = i % 2, i // 2
        x, yy = 68 + col * 482, y + row * 252
        bg = "#e6f6fc" if recommended else WHITE
        outline = BLUE if recommended else LINE
        d.rounded_rectangle((x, yy, x + 454, yy + 224), radius=28, fill=bg, outline=outline, width=4 if recommended else 2)
        art = Image.open(PUBLIC / "medical" / asset).convert("RGBA")
        art.thumbnail((190, 132))
        im.paste(art, (x + 16, yy + 70), art)
        d.text((x + 208, yy + 58), code, font=font(22, True), fill=BLUE if recommended else NAVY)
        multiline(d, (x + 208, yy + 103), label, font(20), MUTED, 220, 6)
        if recommended:
            pill(d, (x + 18, yy + 14), "본원 권장", "#137eaf", WHITE)
    d.text((68, 956), "* 권장 디자인도 개인의 피부 탄력과 발기 시 길이를 확인해 조정합니다.", font=font(19), fill=MUTED)
    footer(d)
    save(im, "03-design-types.png")


def build_anesthesia() -> None:
    im, d, y = card_base("04 / 09", "통증 부담을 낮추는\n단계별 마취", "불안과 통증 민감도를 확인해 필요한 범위에서 진행합니다.")
    steps = [
        ("01", "피부 국소마취", "가는 바늘로 수술 부위를\n먼저 섬세하게 마취"),
        ("02", "심부 국소마취", "필요한 부위에 추가 마취해\n수술 중 통증 부담을 최소화"),
        ("OPTION", "의식하 진정", "불안감이 큰 경우 상담 후\n선택적으로 고려"),
    ]
    for i, (num, title, desc) in enumerate(steps):
        yy = y + i * 176
        d.rounded_rectangle((68, yy, 1012, yy + 148), radius=30, fill=WHITE, outline=LINE, width=2)
        d.ellipse((98, yy + 28, 190, yy + 120), fill=SKY)
        d.text((144, yy + 74), num, font=font(20, True), fill=BLUE, anchor="mm")
        d.text((224, yy + 30), title, font=font(30, True), fill=NAVY)
        multiline(d, (224, yy + 78), desc, font(20), MUTED, 650, 4)
        if i < 2:
            d.line((144, yy + 122, 144, yy + 180), fill=MINT, width=4)
    d.rounded_rectangle((68, 914, 1012, 980), radius=24, fill="#eaf7fb")
    d.text((540, 947), "마취 방법은 개인 상태와 의료진 판단에 따라 달라집니다.", font=font(20, True), fill=BLUE, anchor="mm")
    footer(d)
    save(im, "04-anesthesia.png")


def build_preservation() -> None:
    im, d, y = card_base("05 / 09", "피부는 정교하게,\n표재근막은 가능한 범위에서 보존", "필요한 피부·진피를 중심으로 절제하고 아래 조직층을 세심하게 구분합니다.")
    art = Image.open(PUBLIC / "medical" / "circumcision-layer-comparison-v6.png").convert("RGB")
    art = rounded_image(art, (944, 475), 30)
    im.paste(art, (68, y))
    chips = ["피부 이동성", "림프·정맥망", "미세혈관·신경"]
    for i, text in enumerate(chips):
        x = 68 + i * 320
        d.rounded_rectangle((x, y + 506, x + 302, y + 584), radius=24, fill=WHITE, outline=LINE, width=2)
        d.ellipse((x + 20, y + 532, x + 42, y + 554), fill=MINT)
        d.text((x + 58, y + 528), text, font=font(21, True), fill=NAVY)
    footer(d)
    save(im, "05-fascia-preservation.png")


def build_process() -> None:
    im, d, y = card_base("06 / 09", "약 20분 내외,\n다섯 단계로 섬세하게", "본원 안내 기준이며 실제 시간은 개인 상태와 수술 범위에 따라 달라집니다.")
    items = [
        ("01", "사전 디자인", "protocol-design.webp"),
        ("02", "마취", "method-sedation.webp"),
        ("03", "정교한 절제", "method-dissection.webp"),
        ("04", "근막 보존", "method-fascia.webp"),
        ("05", "미세 봉합", "method-suture.webp"),
    ]
    for i, (num, label, asset) in enumerate(items):
        yy = y + i * 132
        d.rounded_rectangle((68, yy, 1012, yy + 110), radius=26, fill=WHITE, outline=LINE, width=2)
        d.text((105, yy + 54), num, font=font(22, True), fill=MINT, anchor="lm")
        icon = Image.open(PUBLIC / "generated-icons" / asset).convert("RGBA")
        icon.thumbnail((78, 78))
        im.paste(icon, (174, yy + 16), icon)
        d.text((292, yy + 54), label, font=font(28, True), fill=NAVY, anchor="lm")
        if i < 4:
            d.line((540, yy + 110, 540, yy + 132), fill=MINT, width=4)
    footer(d)
    save(im, "06-procedure.png")


def build_recovery() -> None:
    im, d, y = card_base("07 / 09", "수술만큼 중요한\n회복 관리", "생활 복귀부터 상처 회복까지 단계별로 안내합니다.")
    facts = [
        ("당일", "무리 없는 범위의\n가벼운 일상"),
        ("1–2주", "붓기와 불편감이\n점차 감소"),
        ("약 4주", "경과 확인 후\n성생활 재개 권장"),
    ]
    for i, (big, small) in enumerate(facts):
        x = 68 + i * 320
        d.rounded_rectangle((x, y, x + 302, y + 228), radius=30, fill=WHITE, outline=LINE, width=2)
        d.text((x + 151, y + 64), big, font=font(38, True), fill=BLUE, anchor="mm")
        d.line((x + 96, y + 104, x + 206, y + 104), fill=MINT, width=5)
        d.multiline_text((x + 151, y + 143), small, font=font(21), fill=MUTED, anchor="mm", align="center", spacing=8)
    d.rounded_rectangle((68, y + 270, 1012, y + 540), radius=32, fill="#143c56")
    d.text((104, y + 310), "OPTIONAL RECOVERY CARE", font=font(19, True), fill="#8bd4ec")
    d.text((104, y + 360), "PDRN 재생 관리", font=font(38, True), fill=WHITE)
    multiline(d, (104, y + 424), "상처 회복 환경을 보조하는 선택적 관리로, 적용 여부와 횟수는 의료진이 안내합니다.", font(22), "#dcebf2", 790, 8)
    footer(d)
    save(im, "07-recovery.png")


def build_doctor() -> None:
    source = Image.open(PUBLIC / "doctor-philosophy-surgery-v13-bw.png").convert("RGB")
    im = fit(source, (W, H))
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, W, H), fill=(9, 35, 53, 62))
    for x in range(720):
        a = round(220 * (1 - x / 720) ** 1.8)
        od.line((x, 0, x, H), fill=(8, 37, 55, a))
    im = Image.alpha_composite(im.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(im)
    brand(d, "08 / 09", True)
    pill(d, (68, 170), "DIRECTOR'S PHILOSOPHY", "#e7f6fb", BLUE)
    d.text((68, 265), "필요한 만큼 절제하고,", font=font(45, True), fill=WHITE)
    d.text((68, 335), "남겨야 할 조직은", font=font(56, True), fill="#96ddf1")
    d.text((68, 410), "세심하게 보존합니다", font=font(56, True), fill="#96ddf1")
    d.line((68, 518, 330, 518), fill=MINT, width=8)
    d.text((68, 565), "강태진 대표원장", font=font(31, True), fill=WHITE)
    d.text((68, 618), "20년 이상 비뇨의학과 수술 경험", font=font(23), fill="#deedf4")
    d.text((68, 658), "누적 10,000건 이상 수술 경험", font=font(23), fill="#deedf4")
    footer(d, True)
    save(im, "08-doctor.png")


def build_contact() -> None:
    im = gradient((W, H), "#113d59", "#0a2539")
    d = ImageDraw.Draw(im)
    brand(d, "09 / 09", True)
    d.text((68, 160), "내 상태에 맞는 수술 디자인,", font=font(44, True), fill="#b7e8f5")
    d.text((68, 232), "상담부터 시작합니다", font=font(61, True), fill=WHITE)
    d.rounded_rectangle((68, 360, 1012, 760), radius=36, fill="#ffffff", outline="#77c7e4", width=2)
    rows = [
        ("ADDRESS", "서울시 강남구 강남대로 238\n스카이쏠라빌딩 13·14층"),
        ("SUBWAY", "양재역 4번 출구 바로 왼쪽"),
        ("CONTACT", "1599-5952"),
    ]
    for i, (label, value) in enumerate(rows):
        yy = 405 + i * 112
        d.text((110, yy), label, font=font(18, True), fill=MINT)
        d.multiline_text((305, yy - 6), value, font=font(25, True), fill=NAVY, spacing=8)
        if i < 2:
            d.line((110, yy + 86, 970, yy + 86), fill=LINE, width=2)
    d.rounded_rectangle((68, 812, 1012, 940), radius=30, fill="#ffd83d")
    d.text((540, 854), "카카오톡 1:1 비밀 상담", font=font(31, True), fill="#1b2e39", anchor="mm")
    d.text((540, 900), "전 직원 남성 의료진 · 방문 전 예약 권장", font=font(19), fill="#344b58", anchor="mm")
    footer(d, True)
    save(im, "09-contact.png")


def build_banner() -> None:
    bg = fit(Image.open(OUT / "cover-background-v1.png").convert("RGB"), (1080, 540))
    overlay = Image.new("RGBA", (1080, 540), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for x in range(760):
        a = round(245 * (1 - x / 760) ** 1.4)
        od.line((x, 0, x, 540), fill=(243, 250, 253, a))
    bg = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")
    d = ImageDraw.Draw(bg)
    d.text((54, 42), "JJ UROLOGY", font=font(20, True), fill=NAVY)
    d.text((54, 120), "무엇을 남길지까지", font=font(39, True), fill=NAVY)
    d.text((54, 177), "디자인하는 포경수술", font=font(50, True), fill=BLUE)
    d.text((54, 264), "개인 맞춤 설계 · 표재근막 보존 중심 · 미세 봉합", font=font(20), fill=INK)
    d.rounded_rectangle((54, 338, 380, 410), radius=24, fill=NAVY)
    d.text((217, 374), "상담 1599-5952", font=font(23, True), fill=WHITE, anchor="mm")
    bg.save(OUT / "modoodoc-banner-1080x540.png", quality=94)


def main() -> None:
    build_cover()
    build_indications()
    build_designs()
    build_anesthesia()
    build_preservation()
    build_process()
    build_recovery()
    build_doctor()
    build_contact()
    build_banner()


if __name__ == "__main__":
    main()
