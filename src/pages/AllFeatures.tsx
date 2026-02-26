
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Voicemail to Email",
    description: "Get voicemails delivered directly to your inbox.",
  },
  {
    title: "Call Forwarding",
    description: "Redirect calls to any number or device.",
  },
  {
    title: "Auto Attendant",
    description: "A virtual receptionist to greet and direct callers.",
  },
  {
    title: "Call Recording",
    description: "Record calls for quality assurance and training.",
  },
  {
    title: "Ring Groups",
    description: "Route calls to multiple extensions simultaneously.",
  },
];

const AllFeatures = () => {
  return (
    <div className="bg-[#fafafa]">
      <section className="py-16 sm:py-24">
        <div className="container-custom">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-semibold text-gray-900">Our Features</h1>
                <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Explore the powerful features that make our platform the best choice for your business.</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 flex flex-col justify-start text-left h-full">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFeatures;
