import { useState, useEffect } from "react";
import { getSanityClient } from "@/lib/sanity/client";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import SectionRenderer from "@/components/sections/SectionRenderer";
import HomeSkeleton from "./HomeSkeleton";

const Home = () => {
  const [sections, setSections] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomePageContent = async () => {
      try {
        const client = getSanityClient();
        const data = await client.fetch(HOME_PAGE_QUERY);

        // ✅ Safe handling
        if (data?.sections && Array.isArray(data.sections)) {
          setSections(data.sections);
        } else {
          console.warn("No sections found in Sanity response");
          setSections([]);
        }
      } catch (error) {
        console.error("Failed to fetch homepage content:", error);
        setSections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePageContent();
  }, []);

  // ✅ Loading state
  if (loading) {
    return <HomeSkeleton />;
  }

  // ✅ Empty state (important)
  if (!sections.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No content available
      </div>
    );
  }

  // ✅ MAIN FIX: Force correct background
  return (
    <main className="bg-white dark:bg-zinc-900">
      <SectionRenderer sections={sections} />
    </main>
  );
};

export default Home;