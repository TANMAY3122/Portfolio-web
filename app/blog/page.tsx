import React from "react";

import type { Metadata } from "next";
import BlogPosts from "@/components/layout/blog-card";
import { getBlogPosts } from "@/components/util";

export const metadata: Metadata = {
  title: "Blogs - Tanmay Kashyap - Developer, Designer",
  description: "Read my blogs on web development, design, and other topics.",
};

const page = () => {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <BlogPosts allBlogs={allBlogs} />
    </section>
  );
};

export default page;
