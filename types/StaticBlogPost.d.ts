export interface BlogPostFrontmatter {
  title: string;
  author: string;
  date: string;
  summary: string;
  tags?: string[];
  category: string;
  coverImageUrl?: string;
}

export interface StaticBlogPost {
  frontmatter: BlogPostFrontmatter;
  markdownBody: string;
  slug: string;
}
