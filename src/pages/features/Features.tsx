
import React from 'react';
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

const AllFeaturesPage = () => {
  return (
    <div className="bg-[#fafafa] py-16 sm:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200/80 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFeaturesPage;
