import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      });
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {CssBaseline.flush()}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/favicon.png" color="#6f42c1" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
