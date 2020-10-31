import { RichTextBlock } from 'prismic-reactjs';

export interface PrismicBlogPost<T> {
  title: RichTextBlock[];
  author: RichTextBlock[];
  preview: boolean;
  published_time: string;
  summary: RichTextBlock[];
  body: any;
  banner?: {
    dimensions: { width: number; height: number };
    alt: null;
    copyright: null;
    url: string;
  };
  category: PrismicBlogPostCategory<T>;
}

export interface PrismicBlogPostCategory<T> {
  id: string;
  type: 'category';
  tags: string[];
  slug: string;
  lang: string;
  uid: string;
  link_type: 'Document';
  isBroken: false;
  data: T;
}

export interface PrismicBlogCategory {
  id: string;
  category_name: string;
}