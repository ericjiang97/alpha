import Prismic from 'prismic-javascript';

import { Paragraph, Stack } from 'bumbag';
import LinkButton from '../../../components/buttons/LinkButton';
import HeroBase from '../../../components/core/HeroBase';

import PageLayout from '../../../containers/layouts/PageLayout';
import Custom404 from '../../404';

import BlogCard from '../../../components/blog/BlogCard';
import { client } from '../../../config/prismic';
import { PrismicBlogCategory, PrismicBlogPost } from '../../../types/PrismicBlogPost';
import { getBlogPostContent } from '../../../utils/prismic';
import Heading from '../../../components/core/Heading';

export default function BlogHome(props: any) {
  if (props.error) {
    return <Custom404 />;
  }
  const title = `Blog - ${props.category.data.category_name}`;
  const subtitle = `Number of Posts: ${props.posts.results_size} `;
  return (
    <PageLayout
      title={'Blog'}
      pageMeta={{
        description: subtitle,
        endpoint: '/blog',
      }}
      banner={
        <div className="text-base mx-auto max-w-screen-lg py-8">
          <span className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase text-lg">{subtitle}</span>
          <Heading use="h2" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </Heading>
          <div className="mt-4">
            <LinkButton href="/blog/feed.xml" iconBefore="solid-rss">
              RSS Feed
            </LinkButton>
            <LinkButton href="/blog">Back to Blog</LinkButton>
          </div>
        </div>
      }
    >
      <div className="max-w-screen-lg mx-auto">
        <Stack>
          {props.posts.results.map((post: { uid: string; data: any }) => {
            const { uid, data } = post;
            const blogData = data as PrismicBlogPost<PrismicBlogCategory>;
            return <BlogCard blogPostContent={blogData} uid={uid} />;
          })}
        </Stack>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }: { params: { uid: string } }) {
  const { uid } = params;

  const category = await client.getByUID('category', uid, {});
  if (!category) {
    return {
      props: {
        error: 'Category Not Found',
      },
    };
  }
  const posts = await getBlogPostContent([Prismic.Predicates.at('my.blog-post.category', category.id)]);
  return {
    props: {
      category,
      posts,
    },
  };
}
