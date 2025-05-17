import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '../../data/blog-posts';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="prose lg:prose-xl">
        {post.coverImage && (
          <div className="mb-8 relative aspect-video">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}
        <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
        <div className="text-gray-500 text-sm mb-8">{post.date}</div>
        {post.content.split('\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="text-gray-600 mb-4">
              {paragraph.trim()}
            </p>
          )
        ))}
        {post.images && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {post.images.map((image, index) => (
              <div key={index} className="relative aspect-video">
                <Image
                  src={image}
                  alt={`Image ${index + 1} for ${post.title}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}
      </article>
      <div className="mt-8">
        <Link
          href="/blog"
          className="text-indigo-600 hover:text-indigo-500"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
} 