import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getSanityClient } from "@/sanity/client";
import { BLOG_PAGE_QUERY } from "@/sanity/queries";

const Blog = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(BLOG_PAGE_QUERY).then((res) => {
      console.log("BLOG DATA 👉", res);
      setData(res);
    });
  }, []);

  if (!data) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ✅ HERO */}
        <motion.section
          className="text-center py-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.heroSection?.heading}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.heroSection?.subtitle}
          </p>
        </motion.section>

        {/* ✅ TECH SPOTLIGHT */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {data.techSpotlightSection?.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.techSpotlightSection?.posts?.map((post: any, i: number) => (
              <div key={i} className="p-6 rounded-lg shadow bg-card card-hover-animation">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ CASE STUDIES */}
        <section className="py-12 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {data.caseStudiesSection?.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {data.caseStudiesSection?.studies?.map((item: any, i: number) => (
              <div key={i} className="p-6 rounded-lg shadow bg-card card-hover-animation">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ TESTIMONIALS */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {data.testimonialsSection?.heading}
          </h2>

          <div className="space-y-8 max-w-3xl mx-auto">
            {data.testimonialsSection?.testimonials?.map((t: any, i: number) => (
              <blockquote key={i} className="p-6 border-l-4 border-primary bg-card card-hover-animation">
                <p className="italic text-muted-foreground">"{t.quote}"</p>
                <cite className="block mt-3 font-bold not-italic">
                  - {t.name}, {t.role}
                </cite>
              </blockquote>
            ))}
          </div>
        </section>

        {/* ✅ RECENT POSTS */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {data.recentPostsSection?.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {data.recentPostsSection?.posts?.map((post: any, i: number) => (
              <div key={i} className="p-6 rounded-lg shadow bg-card card-hover-animation">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.description}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Blog;