
import { useState, useEffect } from 'react';
import sanityClient from '../sanity/client';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { urlFor } from '@/sanity/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { _ref: string } };
  author: { name:string };
  publishedAt: string;
  excerpt: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          }
        },
        author->{
          name
        },
        publishedAt,
        "excerpt": array::join(string::split(pt::text(body), "")[0..200], "") + "..."
      }`;
      try {
        setLoading(true);
        const result = await sanityClient.fetch(query);
        setPosts(result);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 5);

  // Artificially increase the number of articles for display purposes
  const allArticles = posts.length > 1 ? Array.from({ length: 4 }, () => posts.slice(1)).flat() : [];

  return (
    <>
      <main>
        <PageHeader
          title="From the Blog"
          description="Insights, trends, and stories from the world of communication."
        />
<section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Welcome to Our Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here you'll find the latest industry news, expert insights, and practical tips to help you get the most out of our communication solutions. Whether you're a seasoned pro or just getting started, our blog is your go-to resource for all things communication.
            </p>
          </div>
        </section>
        {featuredPost && (
          <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  {featuredPost.mainImage && (
                    <Link to={`/blog/${featuredPost.slug.current}`}>
                      <img 
                        src={urlFor(featuredPost.mainImage).width(800).height(600).url()} 
                        alt={featuredPost.title} 
                        className="rounded-lg shadow-lg"
                      />
                    </Link>
                  )}
                </div>
                <div className="lg:order-1">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    <Link to={`/blog/${featuredPost.slug.current}`}>{featuredPost.title}</Link>
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{featuredPost.excerpt}</p>
                  <div className="mt-6">
                    <Link 
                      to={`/blog/${featuredPost.slug.current}`} 
                      className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
                    >
                      Read full story <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 sm:py-20">
          <div className="container-custom grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-2">
                All Articles
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Explore our full range of articles covering a wide variety of topics in the communication landscape.
              </p>
              {loading && <p className="text-center">Loading posts...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {allArticles.map((post, index) => (
                    <Link to={`/blog/${post.slug.current}`} key={`${post._id}-${index}`} className="flex flex-col border rounded-lg overflow-hidden card-hover-animation">
                      {post.mainImage && (
                        <img 
                          src={urlFor(post.mainImage).width(500).height(300).url()} 
                          alt={post.title} 
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          By {post.author.name} on {new Date(post.publishedAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{post.excerpt}</p>
                        <div className="mt-4">
                          <span className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
                            Read More <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {allArticles.length === 0 && !loading && !error && (
                <p className="text-center text-muted-foreground">No more articles found.</p>
              )}
            </div>

            <aside className="space-y-8">
              {/* Search Bar */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Search</h3>
                <div className="flex gap-2">
                  <Input type="text" placeholder="Search articles..." />
                  <Button>Search</Button>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li><Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Technology</Link></li>
                  <li><Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Business</Link></li>
                  <li><Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Customer Service</Link></li>
                  <li><Link to="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Product Updates</Link></li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map(post => (
                    <li key={post._id}>
                      <Link to={`/blog/${post.slug.current}`} className="font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500">
                        {post.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
