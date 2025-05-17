import Link from 'next/link';
import { blogPosts } from '../data/blog-posts';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-black">Blog Posts</h1>
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold hover:text-indigo-600 text-black">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <div className="text-gray-500 text-sm">{post.date}</div>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="pt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 