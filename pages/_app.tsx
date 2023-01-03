import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
	getLayout?: (page:ReactElement) => ReactNode;
};

type AppPropWithLayout = AppProps&{
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return getLayout(<Component {...pageProps} />);
}
