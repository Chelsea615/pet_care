import "./globals.css";

export const metadata = {
  title: "泡泡爪宠物洗护",
  description: "为猫咪和狗狗提供温柔、安心、专业的宠物洗护服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
