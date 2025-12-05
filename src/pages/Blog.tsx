
import { useState, useEffect } from 'react';
import sanityClient from '../sanity/client';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] {
        _id,
        title,
        'slug': slug.current,
        'mainImage': mainImage.asset->url,
        'author': author->name,
        publishedAt
      }`;
      try {
        const result = await sanityClient.fetch(query);
        setPosts(result);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Bring employee and customer experiences together</h1>
        <nav className="flex justify-center space-x-6">
          <a href="#" className="text-lg">Contact Center</a>
          <a href="#" className="text-lg">Unified Communications</a>
          <a href="#" className="text-lg">Integrations</a>
          <a href="#" className="text-lg">Services</a>
          <a href="#" className="text-lg">Solutions</a>
        </nav>
      </header>

      {/* Main Platform Section */}
      <section className="text-center py-12">
        <div className="border rounded-lg p-8 max-w-4xl mx-auto card-hover-animation">
          <h2 className="text-4xl font-bold mb-4">The reliable business communications platform</h2>
          <p className="text-lg mb-6">A single platform for contact center, voice, video, and chat.</p>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold">Learn More</button>
        </div>
      </section>

      {/* AI Virtual Assistant */}
      <section className="py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Meet AVA, your AI Virtual Assistant</h3>
          <p className="text-lg mb-8">Power your customer experiences with the latest generative AI technology.</p>
          <div className="text-left space-y-4">
            <p><strong>Self-service experiences:</strong> Instantly resolve common customer issues.</p>
            <p><strong>Agent assistance:</strong> Empower agents with real-time coaching and insights.</p>
            <p><strong>Actionable analytics:</strong> Uncover trends and opportunities from customer interactions.</p>
          </div>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold mt-8">Explore AI</button>
        </div>
      </section>

      {/* Global Leader */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">The global leader in communications</h2>
        <h2 className="text-4xl font-bold mb-4">The global leader in AI communications</h2>
        <div className="flex justify-center space-x-8 text-2xl font-bold">
          <p>5M+ Users</p>
          <p>100+ Countries</p>
          <p>99.999% Uptime</p>
        </div>
      </section>
      
      {/* Loved by businesses */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Loved by over 500,000 businesses of all sizes</h2>
        <div className="flex justify-center items-center space-x-8 mb-8">
            {/* Placeholder for logos */}
            <div className="w-24 h-12 bg-gray-300"></div>
            <div className="w-24 h-12 bg-gray-300"></div>
            <div className="w-24 h-12 bg-gray-300"></div>
            <div className="w-24 h-12 bg-gray-300"></div>
        </div>
        <div className="max-w-3xl mx-auto">
            <p className="text-lg">"The NBA's Golden State Warriors use Dialpad to keep their team and business connected – from anywhere."</p>
            <p className="font-bold mt-4">1946 rings</p>
            <p className="font-bold">500+ employees</p>
        </div>
      </section>

      {/* Product Innovations */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Explore product innovations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Contact Center Reimagined</h3>
          </div>
          <div className="border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Introducing AI for Everyone</h3>
          </div>
          <div className="border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Connect from Anywhere</h3>
          </div>
        </div>
      </section>
      
      
      {/* Solutions for every industry */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-8">Solutions for every industry</h2>
        <div className="flex justify-center space-x-6 mb-8">
          <button className="text-lg font-semibold">Healthcare</button>
          <button className="text-lg font-semibold">Technology</button>
          <button className="text-lg font-semibold">Real Estate</button>
          <button className="text-lg font-semibold">Retail</button>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-1/2">
                <div className="w-full h-80 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="w-1/2 pl-8">
                <h3 className="text-3xl font-bold mb-4">Create the smart, secure experiences for patients, and staff</h3>
                <p>82% increase in patient satisfaction</p>
            </div>
        </div>
      </section>

      {/* Leader in AI Communications */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-8">The leader in AI communications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Unify your communications</h3>
          </div>
          <div className="border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Lower costs with a single platform</h3>
          </div>
          <div className={border rounded-lg p-6 card-hover-animation">
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            <h3 className="text-2xl font-bold">Support your hybrid work strategy</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
