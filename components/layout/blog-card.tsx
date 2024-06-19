import { getBlogPosts } from "@/components/util";
import Link from "next/link";

export default function BlogPosts({ allBlogs }: { allBlogs: any[] }) {
  return (
    <article className="flex flex-col gap-3">
      {allBlogs
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
        )
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex flex-col cursor-pointer hover:underline"
          >
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight md:text-base text-sm">
              {post.metadata.title}
            </p>
          </Link>
        ))}
    </article>
  );
}
