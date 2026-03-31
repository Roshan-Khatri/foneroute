import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OurValuesSection as OurValuesSectionType } from "@/types/sanity";
import { Eye, Target, Handshake } from "lucide-react";

interface OurValuesSectionProps {
  section: OurValuesSectionType;
}

const iconMap = {
  eye: Eye,
  target: Target,
  handshake: Handshake,
};

const OurValuesSection: React.FC<OurValuesSectionProps> = ({ section }) => {

  const values = section?.values || [];

  return (
    <section className="py-12 md:py-16">
      <div className="container-custom text-center">

        <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">
          {section?.heading || "Our Values"}
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">
          {section?.description}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value, i) => {

            const Icon =
              iconMap[value.icon as keyof typeof iconMap] || Handshake;

            return (
              <motion.div
                key={value._key || i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-background shadow-lg text-center card-hover-animation">
                  <CardHeader>
                    <div className="mx-auto text-primary w-fit mb-4">
                      <Icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="font-poppins text-xl">
                      {value.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>

                </Card>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default OurValuesSection;
