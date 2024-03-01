"use client"
import ThemeRegistry from '@/components/theme-registry/theme.registry';
import Header from '@/components/Header/app.header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
