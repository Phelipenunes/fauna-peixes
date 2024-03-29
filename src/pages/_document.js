import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon-peixe.png"
          type="image/png"
          sizes="256x256"
        />
        <meta name="author" content="Phelipe nunes dos santos" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
