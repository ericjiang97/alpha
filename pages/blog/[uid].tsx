import moment from 'moment';
import Prismic from 'prismic-javascript';
import React from 'react';

import { Columns, Container, Divider, Heading, Icon, Paragraph, useBreakpoint } from 'bumbag';
import { RichText } from 'prismic-reactjs';

import ShareModal from '../../components/modals/ShareModal';

import PageLayout from '../../containers/layouts/PageLayout';
import Custom404 from '../404';

// import {
//   EmailIcon,
//   EmailShareButton,
//   FacebookIcon,
//   FacebookShareButton,
//   LinkedinIcon,
//   LinkedinShareButton,
//   TwitterIcon,
//   TwitterShareButton,
// } from 'react-share';
import BlogCard from '../../components/blog/BlogCard';
import PrismicRichTextWrapper from '../../components/PrismicRichTextWrapper';
import { client } from '../../config/prismic';
import { PrismicBlogCategory, PrismicBlogPost } from '../../types/PrismicBlogPost';
import { getBlogPostContent } from '../../utils/prismic';

export default function Post({
  uid,
  data,
  error,
  similarPosts,
}: {
  uid: string;
  data: PrismicBlogPost<PrismicBlogCategory>;
  error: string;
  similarPosts: { results: { uid: string; data: PrismicBlogPost<PrismicBlogCategory> }[] };
}) {
  const isTabletOrLarger = useBreakpoint('min-tablet');

  if (error) {
    return <Custom404 />;
  }
  const { title, preview, published_time, summary } = data;

  // const categoryLinkProps = Link.useProps({ href: `/blog/categories/${category.uid}` });

  const endpoint = `/blog/${uid}`;
  // const postUrl = `https://ericjiang.dev${endpoint}`;

  return (
    <PageLayout
      title={`Blog - ${RichText.asText(title)}`}
      ignoreHorizontalPadding={true}
      banner={
        <>
          {preview && (
            <Container
              backgroundColor="primary"
              color="white"
              width="100vw"
              maxWidth="100vw"
              paddingX="1rem"
              paddingY="1.5rem"
              display="flex"
              alignItems="center"
            >
              <Icon icon="solid-info-circle" marginRight="1.5rem" />
              <Paragraph marginTop="0">
                This is a <strong>preview</strong> article used for testing and sharing purposes, please DO NOT share
                this article until it has been published.
              </Paragraph>
            </Container>
          )}
        </>
      }
      pageMeta={{
        endpoint,
        description: RichText.asText(summary),
        imageUrl: data.banner && data.banner.url,
      }}
    >
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                {moment(published_time).format('Do MMMM YYYY')}
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {RichText.asText(title)}
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">{RichText.asText(summary)}</p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <PrismicRichTextWrapper richText={data.body} />
          </div>
        </div>
      </div>
      {!isTabletOrLarger && (
        <Container marginY="1rem" display="flex" flexWrap="wrap" justifyContent="space-between">
          <ShareModal title={RichText.asText(title)} slug={`/blog/${uid}`} />
        </Container>
      )}
      <Divider />
      <Container marginY="1.25rem" padding="1rem">
        <Heading use="h3" fontSize="400">
          Enjoyed the post? You might want to read similar posts:
        </Heading>
        <Columns marginTop="1rem">
          {similarPosts.results.map((post) => {
            return (
              <Columns.Column key={post.uid} display="flex" spread={4}>
                <BlogCard blogPostContent={post.data} uid={post.uid} showCoverImage={false} flex={1} />
              </Columns.Column>
            );
          })}
        </Columns>
      </Container>
    </PageLayout>
  );
}

export async function getStaticProps({ params }: { params: { uid: string } }) {
  const { uid } = params;
  console.log(`/blog/${uid}`);
  const blogPost = await client.getByUID('blog-post', uid, { fetchLinks: ['category.uid', 'category.category_name'] });
  if (!blogPost) {
    return {
      props: {
        error: 'Not Found',
      },
    };
  }
  const data = blogPost.data as PrismicBlogPost<PrismicBlogCategory>;

  const similarPosts = await getBlogPostContent(
    [Prismic.Predicates.at('my.blog-post.category', data.category.id), Prismic.Predicates.not('my.blog-post.uid', uid)],
    false,
    3,
  );
  return {
    props: { uid, data, similarPosts },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const blogPosts = await getBlogPostContent();
  const paths = blogPosts.results.map((post) => {
    return { params: { uid: post.uid } };
  });
  return {
    paths,
    fallback: 'blocking',
  };
}
