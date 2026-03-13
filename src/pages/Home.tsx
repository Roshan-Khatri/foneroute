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

        console.log("Sanity homepage data:", data);

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

  if (loading) {
    return <HomeSkeleton />;
  }

  return <SectionRenderer sections={sections || []} />;
};

export default Home;