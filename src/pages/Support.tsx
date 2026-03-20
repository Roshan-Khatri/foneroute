import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, Ticket } from "lucide-react";
import { getSanityClient } from "@/sanity/client";
import { SUPPORT_PAGE_QUERY } from "@/sanity/queries";

const iconMap: any = {
  "Email Support": Mail,
  "Phone Support": Phone,
  "Submit a Ticket": Ticket,
};

const SupportPage = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(SUPPORT_PAGE_QUERY).then((res) => {
      console.log("SUPPORT DATA 👉", res);
      console.log("CONTACT DATA 👉", res?.getInTouchSection);
      setData(res);
    });
  }, []);

  // ✅ Loading
  if (!data) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="bg-background text-foreground">

      {/* ================= HEADER ================= */}
      <section className="bg-primary/5 text-center pt-20 sm:pt-28 pb-10 sm:pb-14">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {data.pageHeader?.title || "Support"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.pageHeader?.subtitle}
          </p>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="pt-10 sm:pt-12 pb-20 sm:pb-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              {data.faqSection?.heading}
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {data.faqSection?.faqs?.map((faq: any, index: number) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">

          <h2 className="text-3xl font-bold text-center mb-12">
            {data.getInTouchSection?.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {data.getInTouchSection?.cards?.map((card: any, i: number) => {

              const Icon = iconMap[card.title] || Mail;

              return (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-max mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {card.description || "Contact our support team."}
                    </p>

                    <Button variant="outline" asChild>
                      <a href={card.buttonLink || "#"}>
                        {card.buttonText || "Contact"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default SupportPage;