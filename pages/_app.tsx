import { useMemo } from 'react';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';

import DefaultLayout from 'layouts/DefaultLayout';
import { UserContextProvider } from 'contexts/UserContext';
import supabase from 'libs/supabase';

import 'styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps<any>) {
    const Layout = useMemo(() => Component.Layout || DefaultLayout, [Component]);
    return (
        <SWRConfig value={{ provider: () => new Map(), shouldRetryOnError: false }}>
            <UserContextProvider supabaseClient={supabase}>
                <Layout>
                    <Head>
                        <title>{Component.Title || 'Đăng ký môn học'}</title>
                    </Head>
                    <Component {...pageProps} />
                    <ToastContainer hideProgressBar />
                </Layout>
            </UserContextProvider>
        </SWRConfig>
    );
}

export default MyApp;

declare module 'react' {
    interface FunctionComponent<P = {}> {
        Layout?: ComponentType;
        Title?: string;
    }
    interface ComponentClass<P = {}> {
        Layout?: ComponentType;
        Title?: string;
    }
}
