import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/src/components/themeRegistry/ThemeRegistry";
import HeaderBar from "@/src/components/layout/HeaderBar";
import { ReduxProvider } from "@/src/store/store";
import "@/src/style/main.css";
import { cookies } from "next/headers";
import { STORAGE_THEME_COLOR_KEY } from "@/src/models/config.model";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App11",
  description: "Generated by create next app",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const color = cookieStore.get(STORAGE_THEME_COLOR_KEY).value;

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeRegistry color={color}>
            <HeaderBar />
            {children}
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);
export default RootLayout;
