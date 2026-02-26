import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '@/sanity/client';
import { postBySlugQuery } from '@/sanity/queries';
import { PortableText } from '@/pages/PortableText';

const BlogPost = () => {
  const [post, setPost] = useState<any>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      const data = await client.fetch(postBySlugQuery, { slug });
      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        {post.author && <p className="text-gray-700 mb-8">By {post.author} on {new Date(post.publishedAt).toLocaleDateString()}</p>}
        <img src={post.imageUrl} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8 card-hover-animation" />
        <div className="prose lg:prose-xl max-w-none">
          <PortableText value={post.content} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
