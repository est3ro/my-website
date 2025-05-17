import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-black">Post Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find the requested blog post.</p>
      <Link
        href="/blog"
        className="text-indigo-600 hover:text-indigo-500"
      >
        ← Back to all posts
      </Link>
    </div>
  );
} 