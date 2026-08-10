import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const ASSET_BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL =
  process.env.GITHUB_ACTIONS === "true"
    ? "https://i8d8e8a8.github.io/jj-preservation-circumcision-page-preview/"
    : "https://jj-preservation-circumcision.i8d8e8a8.chatgpt.site/";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "JJ비뇨기과 포경수술 | 표재근막 보존 맞춤 디자인",
  description:
    "강태진 원장의 표재근막 보존 중심 맞춤형 성인 포경수술. 개인별 해부학적 특징에 맞춘 정밀 디자인과 회복 관리.",
  applicationName: "JJ비뇨기과 포경수술 안내 페이지",
  icons: {
    icon: `${ASSET_BASE}/brand/jj-square.png`,
    apple: `${ASSET_BASE}/brand/jj-square.png`,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "얼마나 제거하느냐보다 무엇을 남기느냐가 중요합니다",
    description: "JJ비뇨기과 표재근막 보존 포경수술",
    images: [
      {
        url: `${ASSET_BASE}/og.png`,
        width: 1733,
        height: 909,
        alt: "JJ비뇨기과 표재근막 보존 포경수술",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JJ비뇨기과 표재근막 보존 포경수술",
    description: "얼마나 제거하느냐보다 무엇을 남기느냐가 중요합니다",
    images: [`${ASSET_BASE}/og.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body>{children}</body>
    </html>
  );
}
