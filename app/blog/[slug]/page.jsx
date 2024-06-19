import { getBlogPosts } from "@/components/util";
import { CustomMDX } from "@/components/mdx";
import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { RoundedImage } from "@/components/next-image";
import { TableOfContents } from "@/components/table-of-content";

const posts = getBlogPosts();

export async function generateStaticParams() {
  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export async function generateMetadata({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post not found - Tanmay Kashyap",
      description: "The requested blog post was not found.",
    };
  }

  return {
    openGraph: {
      title: `${post.metadata.title} - Tanmay Kashyap`,
      description:
        post.metadata.summary ||
        "Read this blog post about web development, design, and more.",
      url: `https://www.nikks.tech/blog/${params.slug}`,
      type: "article",
      images: [
        {
          url: `https://www.nikks.tech/blog/${post.metadata.banner}`,
          width: 1200,
          height: 627,
          alt: "Tanmay Kashyap - Web Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@nikhilnigamnik",
      title: `${post.metadata.title} - Tanmay Kashyap`,
      description:
        post.metadata.summary ||
        "Read this blog post about web development, design, and more.",
      images: [
        {
          url: `https://www.nikks.tech/blog/${post.metadata.banner}`,
          width: 1200,
          height: 630,
          alt: "Profile picture of Tanmay Kashyap",
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="cursor-pointer flex items-center gap-3 mb-4"
        >
          <DoubleArrowLeftIcon />
          <span className="text-sm">Back</span>
        </Link>
        <div className="flex gap-6 text-sm ">
          <div className="flex items-center gap-3">
            <CalendarIcon />
            <span>{post.metadata.publishedAt}</span>
          </div>
          <div className="flex items-center gap-3">
            <ClockIcon />
            <span>{post.metadata.readTime}</span>
          </div>
        </div>
        <h1 className="text-xl font-bold">{post.metadata.title}</h1>
        {post?.banner && <RoundedImage src={post.banner} alt="post-banner" />}
        <TableOfContents headings={post.headings} />
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </>
  );
}
