export interface BlogPostFrontmatter {
  title: string;
  author: string;
  date: string;
  summary?: string;
  tags?: string[];
}

export interface StaticBlogPost {
  frontmatter: BlogPostFrontmatter;
  markdownBody: string;
  slug: string;
}