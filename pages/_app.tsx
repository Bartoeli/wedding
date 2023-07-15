import type { AppProps } from "next/app";
import "../styles/sass/main.scss";
import { appWithTranslation } from "next-i18next";
import { Client, HydrationProvider, Server } from "react-hydration-provider";
import { roboto } from "@/styles/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HydrationProvider>
      <main className={roboto.className}>
        <Server>
          <div>loader</div>
        </Server>
        <Client>
          <Component {...pageProps} />
        </Client>
      </main>
    </HydrationProvider>
  );
}

export default appWithTranslation(MyApp);
