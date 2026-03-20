import { useEffect, useState } from "react";
import { getSanityClient } from "@/sanity/client";
import { CONTACT_PAGE_QUERY } from "@/sanity/queries";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const client = getSanityClient();

    client.fetch(CONTACT_PAGE_QUERY).then((res) => {
      console.log("CONTACT DATA 👉", res);
      setData(res);
    });
  }, []);

  if (!data) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="dark:bg-black dark:text-white">

      {/* ✅ HERO */}
      <PageHeader
        title={data.heroSection?.heading}
        description={data.heroSection?.subtitle}
      />

      {/* ✅ CONTACT FORM */}
      <section className="py-16">
        <div className="container-custom grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE (FORM) */}
          <div className="border p-6 rounded-lg shadow-sm dark:bg-[#111111] dark:border-gray-800 card-hover-animation">

            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              {data.contactFormSection?.heading}
            </h2>

            <p className="text-muted-foreground mb-6 text-sm">
              {data.contactFormSection?.description}
            </p>

            <form className="space-y-4">

              {/* NAME */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
              </div>

              {/* COMPANY + JOB */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="border p-2 rounded w-full bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
                />
              </div>

              {/* DROPDOWN */}
              <select className="w-full border p-3 rounded bg-white dark:bg-[#1a1a1a] dark:text-white dark:border-gray-700">
                <option>Select a solution</option>
                {data.contactFormSection?.solutions?.map((item: string, i: number) => (
                  <option key={i}>{item}</option>
                ))}
              </select>

              {/* MESSAGE */}
              <textarea
                placeholder="Tell us about your needs..."
                className="w-full border p-3 rounded h-24 bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:border-gray-700"
              />

              {/* BUTTON */}
              <Button variant="outline" className="w-full">
                {data.contactFormSection?.submitButtonText || "Send Message"}
              </Button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-xl font-semibold mb-6 dark:text-white">
              {data.getInTouchSection?.heading}
            </h2>

            {data.getInTouchSection?.items?.map((item: any, i: number) => (
              <div key={i} className="mb-6">
                <h3 className="font-semibold dark:text-white">{item.title}</h3>
                <p className="dark:text-gray-300">{item.value}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ✅ FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-[#0d0d0d]">
        <div className="container-custom">

          <h2 className="text-2xl font-bold text-center mb-10 dark:text-white">
            {data.faqSection?.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {data.faqSection?.faqs?.map((faq: any, i: number) => (
              <div key={i} className="p-4 border rounded dark:bg-[#1a1a1a] dark:border-gray-800 card-hover-animation">
                <h3 className="font-semibold dark:text-white">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
