
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/layout/PageHeader";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Voicemail to Email",
    description: "Get voicemails delivered directly to your inbox.",
    slug: "voicemail-to-email",
  },
  {
    title: "Call Forwarding",
    description: "Redirect calls to any number or device.",
    slug: "call-forwarding",
  },
  {
    title: "Auto Attendant",
    description: "A virtual receptionist to greet and direct callers.",
    slug: "auto-attendant",
  },
  {
    title: "Call Recording",
    description: "Record calls for quality assurance and training.",
    slug: "call-recording",
  },
  {
    title: "Ring Groups",
    description: "Route calls to multiple extensions simultaneously.",
    slug: "ring-groups",
  }
];

const faqItems = [
    {
        question: "Can I port my existing business numbers?",
        answer: "Yes, we make it easy to port your existing local, toll-free, and international numbers to our platform with no downtime."
    },
    {
        question: "Is there a long-term contract?",
        answer: "We offer flexible month-to-month plans. You can upgrade, downgrade, or cancel at any time without any penalties."
    },
    {
        question: "How long does it take to set up?",
        answer: "You can get started in minutes. Our platform is designed for self-service, but our support team is available to help you with the initial setup."
    },
    {
        question: "Do you integrate with other software?",
        answer: "Yes, we offer integrations with popular CRM and business tools to streamline your workflows."
    }
]

const FeaturesPage = () => {
  return (
    <main>
        <PageHeader 
            title="Features"
            description="Explore the powerful features that make our platform the best choice for your business."
            breadcrumb={{
                links: [
                    { name: "Home", url: "/" },
                    { name: "Features", url: "/features" }
                ]
            }}
        />
      <section className="py-16 sm:py-24 bg-[#fafafa]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <Link to={`/features/${feature.slug}`} key={feature.slug}>
                    <Card className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col justify-start h-full transition-transform transform hover:scale-105 hover:shadow-lg">
                        <CardHeader className="p-0">
                        <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                        <p className="text-gray-500">{feature.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 text-lg text-gray-500">Find quick answers to common questions about our platform and services.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 transition-shadow hover:shadow-lg">
                        <h3 className="font-semibold text-gray-900 text-lg">{item.question}</h3>
                        <p className="mt-2 text-gray-500">{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </main>
  );
};

export default FeaturesPage;
