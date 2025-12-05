
import { useState, useEffect } from 'react';
import sanityClient from '../sanity/client';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == $slug] {
        _id,
        title,
        'slug': slug.current,
        'mainImage': mainImage.asset->url,
        'author': author->name,
        publishedAt,
        body
      }`;
      const result = await sanityClient.fetch(query, { slug });
      setPost(result[0]);
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
        <p className="text-gray-700 mb-8">By {post.author} on {new Date(post.publishedAt).toLocaleDateString()}</p>
        <img src={post.mainImage} alt={post.title} className="w-full h-96 object-cover rounded-lg mb-8 card-hover-animation" />
        <div className="prose lg:prose-xl max-w-none">
          <BlockContent blocks={post.body} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
