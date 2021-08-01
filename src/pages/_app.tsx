import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import Head from "next/head";
import Layout from "../layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
          <Head>
              <title>Akalanka Nayanajith</title>
              <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width"
              />
          </Head>
        <ThemeProvider attribute="class">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
      </>
  )
}
export default MyApp
