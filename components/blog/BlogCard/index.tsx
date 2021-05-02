import React from 'react';

import { RichText } from 'prismic-reactjs';

import BlogCardProps from './types';
import moment from 'moment';

const BlogCard: React.FC<BlogCardProps> = ({
  blogPostContent: blogContent,
  uid,
  showCoverImage = true,
  maxWordCount = undefined,
}) => {
  const { banner, title, summary, published_time, category, body } = blogContent;

  let displayedSummary = RichText.asText(summary);
  if (maxWordCount) {
    displayedSummary = displayedSummary
      ? `${displayedSummary.split(' ').splice(0, maxWordCount).join(' ')}...`
      : `${RichText.asText(body).split(' ').splice(0, maxWordCount).join(' ')}...`;
  }

  const readingTime = Math.floor(RichText.asText(body).split(' ').length / 200);

  const post = {
    author: {
      name: 'Eric Jiang',
      href: 'https://ericjiang.dev',
      imageUrl: '/images/eric_jiang.jpg',
    },
  };
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        {showCoverImage && banner && banner.url && (
          <img
            className="h-48 w-full object-cover"
            src={banner.url}
            alt={`cover image for ${RichText.asText(title)}`}
          />
        )}
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div>
            <a href={`/blog/categories/${category.uid}`} className="inline-block">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800'">
                {category.data.category_name}
              </span>
            </a>
          </div>
          <a href={`/blog/${uid}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{RichText.asText(title)}</p>
            <p className="mt-3 text-base text-gray-500">{displayedSummary}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={post.author.href}>
              <span className="sr-only">{post.author.name}</span>
              <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={post.author.href} className="hover:underline">
                {post.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={published_time}>{moment(published_time).format('DD MMM YYYY')}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{`${readingTime} min`} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
