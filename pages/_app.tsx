import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from './base/layout'
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Api-test</title>
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    )
}
