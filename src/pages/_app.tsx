import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import Head from "next/head";
import Layout from "../layout/layout";
import { motion, AnimatePresence } from "framer-motion";

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

                <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                >

                        <Component {...pageProps}  />

                </AnimatePresence>

            </Layout>
        </ThemeProvider>

      </>
  )
}
export default MyApp
