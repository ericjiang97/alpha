import React from 'react';

import App from 'next/app';
import Head from 'next/head';
import { Provider as BumbagProvider, ToastManager } from 'bumbag';

import Footer from '../components/core/layout/Footer';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

import theme from '../config/theme';

const RootComponent: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#145DA0" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for ericjiang.dev blog"
          href="/blog/feed.xml"
        />
        <script async defer data-domain="ericjiang.dev" src="https://plausible.ericjiang.dev/js/plausible.js"></script>
      </Head>
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  ); // The fragment is just illustrational
};

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BumbagProvider theme={theme} collapseBelow="desktop" isSSR>
        <RootComponent>
          <Component {...pageProps}></Component>
        </RootComponent>
        <ToastManager />
      </BumbagProvider>
    );
  }
}

export default MyApp;
