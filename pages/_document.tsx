import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script 
                        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA1BjuQVFjCuSiLqWOfaviz6cJAnfr3WNs
                          `} 
                        async 
                        defer 
                    />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
