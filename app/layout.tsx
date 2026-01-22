import "./globals.css";
import { ThemeProvider } from "next-themes";
import PageTransition from "@/components/PageTransition";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AnimatedBackground />
          <ThemeToggle />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
