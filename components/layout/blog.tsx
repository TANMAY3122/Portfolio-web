import React from "react";
import Title from "../ui/title";
import BlogPosts from "./blog-card";
import Link from "next/link";
import { getBlogPosts } from "@/components/util";

const Blog = () => {
  const allBlogs = getBlogPosts();
  const getLimitedBlogs = (): any[] => allBlogs.slice(0, 3);

  return (
    <section id="blog" className="mt-14 flex flex-col gap-4">
      <Title title="Blogs" />
      <BlogPosts allBlogs={getLimitedBlogs()} />
      <Link className="text-sm hover:underline" href="/blog">View All Blogs</Link>
    </section>
  );
};

export default Blog;
