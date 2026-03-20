import { useEffect, useState } from "react";
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Heart, Star, Zap, Award, BarChart } from "lucide-react";
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { SEO } from '@/components/layout/SEO';
import { getSanityClient } from "@/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries";

const iconMap: any = {
  "Customer-First": Heart,
  "Excellence": Star,
  "Integrity": Users,
  "Innovation": Zap,
  "Quality": Award,
  "Customer Satisfaction": BarChart,
};

const About = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(ABOUT_PAGE_QUERY).then((res) => {
      console.log("ABOUT DATA 👉", res);
      setData(res);
    });
  }, []);

  if (!data) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="pt-8">

      {/* ================= SEO ================= */}
      <SEO 
        title={data.seo?.metaTitle}
        description={data.seo?.metaDescription}
        keywords={data.seo?.keywords}
      />

      {/* ================= HEADER ================= */}
      <PageHeader
        title={data.heroSection?.heading}
        description={data.heroSection?.subtitle}
      />

      {/* ================= MISSION ================= */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {data.missionVisionSection?.heading}
              </h2>

              <p className="text-muted-foreground mb-6">
                {data.missionVisionSection?.description}
              </p>

              <ul className="space-y-4">
                {data.missionVisionSection?.points?.map((point: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {data.missionVisionSection?.image && (
              <img
                src={data.missionVisionSection.image}
                className="rounded-lg shadow-lg"
              />
            )}

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {data.coreValuesSection?.heading}
          </h2>

          <p className="text-muted-foreground mb-10">
            {data.coreValuesSection?.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.coreValuesSection?.values?.map((item: any, i: number) => {
              const Icon = iconMap[item.title] || Star;

              return (
                <motion.div key={i}>
                  <Card className="bg-transparent border-0 shadow-none text-center">
                    <CardHeader>
                      <Icon className="h-10 w-10 mx-auto text-primary mb-4" />
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-12 md:py-16">
        <div className="container-custom text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {data.commitmentSection?.heading}
          </h2>

          <p className="text-muted-foreground mb-10">
            {data.commitmentSection?.description}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.commitmentSection?.items?.map((item: any, i: number) => {
              const Icon = iconMap[item.title] || Zap;

              return (
                <motion.div key={i}>
                  <Card className="bg-transparent border-0 shadow-none text-center">
                    <CardHeader>
                      <Icon className="h-10 w-10 mx-auto text-primary mb-4" />
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom text-center">

          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {data.teamSection?.heading}
          </h2>

          <p className="text-muted-foreground mb-10">
            {data.teamSection?.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {data.teamSection?.members?.map((member: any, i: number) => (
              <motion.div key={i}>
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback>
                    {member.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;