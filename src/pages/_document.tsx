import Document, {Html, Head, Main, NextScript} from 'next/document';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  render() : ReactElement {
      return (
        <Html>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
  }
}