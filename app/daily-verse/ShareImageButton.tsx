"use client";

async function shareVerseAsImage(verse: string, reference: string, theme: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1080;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const accentColor = "#CC2200";
  const siteUrl = "redwhitejesus.com";

  // Background
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 1080, 1080);

  // Top accent bar
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 0, 1080, 8);

  // Theme badge
  ctx.fillStyle = accentColor;
  ctx.font = "700 22px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(theme.toUpperCase(), 540, 78);

  // Verse text — pre-calculate lines for vertical centering
  const maxWidth = 880;
  const lineHeight = 62;
  ctx.font = "italic 42px Georgia, serif";
  const fullText = "\u201C" + verse + "\u201D";
  const allWords = fullText.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of allWords) {
    const testLine = line + word + " ";
    if (ctx.measureText(testLine).width > maxWidth && line !== "") {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = testLine;
    }
  }
  if (line.trim()) lines.push(line.trim());

  // Center verse block in the zone between badge and footer
  const totalTextHeight = lines.length * lineHeight;
  const zoneTop = 120;
  const zoneBottom = 890;
  const startY = Math.round((zoneTop + zoneBottom) / 2 - totalTextHeight / 2 + lineHeight * 0.75);

  ctx.fillStyle = "#1A1A1A";
  ctx.textAlign = "center";
  let y = startY;
  for (const l of lines) {
    ctx.fillText(l, 540, y);
    y += lineHeight;
  }

  // Reference
  ctx.fillStyle = accentColor;
  ctx.font = "700 28px sans-serif";
  ctx.fillText(reference, 540, y + 64);

  // Bottom divider
  ctx.fillStyle = "#E8E5E0";
  ctx.fillRect(390, 960, 300, 1);

  // Site branding
  ctx.fillStyle = "#999999";
  ctx.font = "400 20px sans-serif";
  ctx.fillText(siteUrl, 540, 1000);

  // Bottom accent bar
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, 1072, 1080, 8);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], "daily-verse.png", { type: "image/png" });
    if (navigator.share && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'Daily Verse', text: 'Hey, just was thinking of you and hope you\'re having a good day \u{1F64F}\u{2764}\uFE0F' });
      } catch {
        downloadBlob(blob);
      }
    } else {
      downloadBlob(blob);
    }
  }, "image/png");
}

function downloadBlob(blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "daily-verse.png";
  a.click();
  URL.revokeObjectURL(url);
}

export default function ShareImageButton({
  verse,
  reference,
  theme,
}: {
  verse: string;
  reference: string;
  theme: string;
}) {
  return (
    <button
      onClick={() => shareVerseAsImage(verse, reference, theme)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        backgroundColor: "#FFFFFF",
        border: "2px solid #E8E6E1",
        color: "#1A1A1A",
        padding: "12px 24px",
        borderRadius: 6,
        fontWeight: 600,
        fontSize: 14,
        cursor: "pointer",
        letterSpacing: "0.03em",
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
      </svg>
      Share as Image
    </button>
  );
}
