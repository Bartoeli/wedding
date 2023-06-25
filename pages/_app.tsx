import type { AppProps } from "next/app";
import "../styles/sass/main.scss";
import { appWithTranslation } from "next-i18next";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default appWithTranslation(MyApp);
