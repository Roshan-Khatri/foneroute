import { Check } from "lucide-react";

interface ProvenResultsSectionProps {
  section: {
    heading?: string;
    description?: string;
    highlightBulletPoints?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
    cta?: {
      text?: string;
      link?: string;
    };
  };
}

export default function ProvenResultsSection({ section }: ProvenResultsSectionProps) {
  console.log("Proven Results Section Data:", section);
  const bullets = section?.bulletPoints || [];
  const stats = section?.stats || [];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold mb-4">
          {section?.heading}
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl">
          {section?.description}
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>

            <div className="space-y-4 mb-8">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 text-primary" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {section?.cta?.text && (
              <a
                href={section?.cta?.link || "#"}
                className="inline-block border px-6 py-3 rounded shadow-sm hover:shadow"
              >
                {section?.cta?.text}
              </a>
            )}

          </div>

          <div className="grid grid-cols-3 gap-6">

            {stats.map((stat, i) => (
              <div key={i} className="border p-6 text-center">

                <h3 className="text-3xl font-bold">
                  {stat.value}
                </h3>

                <p className="text-muted-foreground mt-2">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}