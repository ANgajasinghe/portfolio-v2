import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="dark">
                <Head>
                    {/* PWA primary color */}
                    <meta name="theme-color"  />
                    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"/>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/dmhendricks/bootstrap-grid-css@4.1.3/dist/css/bootstrap-grid.min.css" />
                </Head>
                <body className="dark:bg-gray-900 prose dark:prose-dark">
                <div id="overlays" />
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}