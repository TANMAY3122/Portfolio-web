import { getBlogPosts } from "../components/util";

export default function Sitemap() {
  const baseUrl = "https://nikks.tech";
  const allBlogs = getBlogPosts();

  const blogUrls = allBlogs.map((blog) => {
    return {
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.metadata.publishedAt,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
