import { ApiRequest, Post } from "../types/wordpress_api";
import SITE_CONFIG from "../config";

class WordPressApiService {
  static async getAllPosts(): Promise<ApiRequest<Post[]>> {
    const response = await fetch(
      `${SITE_CONFIG.urls.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=100`
    );
    const blogPosts: Post[] = await response.json();
    if (blogPosts.length === 0) {
      return { error: { statusCode: 404 }, data: null };
    }
    return { data: blogPosts, error: null };
  }
}

export default WordPressApiService;
