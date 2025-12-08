
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Briefcase, Users, Heart, Star, Zap, Award, BarChart } from "lucide-react";
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder", image: "/avatars/01.png" },
    { name: "Jane Smith", role: "Chief Technology Officer", image: "/avatars/02.png" },
    { name: "Peter Jones", role: "Head of Sales", image: "/avatars/03.png" },
    { name: "Emily Williams", role: "Lead Developer", image: "/avatars/04.png" },
    { name: "Michael Brown", role: "Marketing Director", image: "/avatars/05.png" },
    { name: "Jessica Davis", role: "Customer Support Lead", image: "/avatars/06.png" },
  ];

  const commitment = [
    {
      icon: Zap,
      title: "Innovation",
      description: "We are committed to continuous innovation, leveraging the latest technologies to provide cutting-edge solutions.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We uphold the highest standards of quality in our products and services, ensuring reliability and excellence.",
    },
    {
      icon: BarChart,
      title: "Customer Satisfaction",
      description: "Our customers are at the heart of everything we do. We are dedicated to ensuring their success and satisfaction.",
    },
  ];

  const values = [
    { icon: Heart, title: "Customer-First", description: "We are deeply committed to understanding and meeting our customers' needs." },
    { icon: Star, title: "Excellence", description: "We foster a culture of creativity and continuous improvement." },
    { icon: Users, title: "Integrity", description: "We operate with transparency and honesty in every interaction." },
  ];

  return (
    <div>
      <PageHeader
        title="About Our Company"
        subtitle="Innovators in business communication, dedicated to your success."
      />

      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Our Mission & Vision</h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
                Our mission is to empower businesses with seamless, intelligent, and reliable communication solutions that foster growth and build lasting customer relationships. We envision a world where every business, regardless of size, can leverage cutting-edge technology to connect with their customers effortlessly and effectively.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span>Innovative Technology</span></li>
                <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span>Customer-Centric Approach</span></li>
                <li className="flex items-center gap-3 text-muted-foreground"><CheckCircle className="h-5 w-5 text-primary flex-shrink-0" /><span>Commitment to Excellence</span></li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <img src="/about-us-image.png" alt="Our Team" className="rounded-lg shadow-lg w-full h-auto card-hover-animation" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">The principles that guide our mission and define our character.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-transparent border-0 shadow-none text-center card-hover-animation">
                  <CardHeader>
                    <div className="mx-auto text-primary w-fit mb-4"><item.icon className="h-10 w-10" /></div>
                    <CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom text-center">
        <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Our Commitment</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">Our commitment to excellence, innovation, and customer satisfaction.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitment.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className="bg-transparent border-0 shadow-none text-center card-hover-animation">
                  <CardHeader>
                    <div className="mx-auto text-primary w-fit mb-4"><item.icon className="h-10 w-10" /></div>
                    <CardTitle className="font-poppins text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12">The talented individuals driving our company forward.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {teamMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 shadow-md card-hover-animation">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
