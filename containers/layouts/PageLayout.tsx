import React from 'react';
import Head from 'next/head';
import { PageContent, PageWithHeader } from 'bumbag';
import Nav from '../../components/nav';
import SITE_CONFIG from '../../config';

interface PageLayoutProps {
  title: string;
  pageMeta: PageMeta;
  banner?: JSX.Element | JSX.Element[];
  isExperimental?: boolean;
  ignoreHorizontalPadding?: boolean;
  inChildrenInContainer?: boolean;
}

interface PageMeta {
  endpoint?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
}

interface PageInnerProps {
  title?: string;
  pageMeta: PageMeta;
  banner?: JSX.Element | JSX.Element[];
  inChildrenInContainer?: boolean;
}

const PageChildren: React.FC<PageInnerProps> = ({
  title,
  banner,
  children,
  pageMeta,
  inChildrenInContainer = true,
}) => {
  const { endpoint, description, keywords, imageUrl } = pageMeta;
  const siteDescription = description || SITE_CONFIG.site.description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={title} />
        <meta name="description" content={siteDescription} />
        {keywords && <meta name="keywords" content={keywords.join(', ')} />}
        {endpoint && <meta name="og:url" content={`${SITE_CONFIG.urls.BASE_URL}${endpoint}`} />}
        <meta name="og:description" content={siteDescription} />
        {imageUrl && <meta name="og:image" content={imageUrl} />}
      </Head>
      {banner && banner}
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <PageContent flex={1}>{inChildrenInContainer && children}</PageContent>
        {!inChildrenInContainer && children}
      </div>
    </>
  );
};

const PageLayout: React.FC<PageLayoutProps> = ({ title, banner, children, pageMeta, inChildrenInContainer = true }) => {
  const titleString = `${title} - Eric Jiang`;
  return (
    <PageWithHeader header={<Nav />} display="flex" flexDirection="column" defaultIsVisible={true}>
      <PageChildren
        title={titleString}
        banner={banner}
        pageMeta={pageMeta}
        inChildrenInContainer={inChildrenInContainer}
      >
        {children}
      </PageChildren>
    </PageWithHeader>
  );
};

export default PageLayout;
