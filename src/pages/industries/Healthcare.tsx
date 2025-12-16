
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const HealthcarePage = () => {
  const healthcare = {
    hero: {
      title: "Revolutionizing Patient Communication in Healthcare",
      subtitle: "From appointment reminders to post-treatment follow-ups, our solutions are designed to improve patient engagement, streamline workflows, and enhance the overall patient experience."
    },
    overview: "In the healthcare sector, effective and timely communication is not just a matter of convenience—it's a critical component of patient care and safety. Our communication platform empowers healthcare providers to connect with patients at every stage of their journey, from scheduling and reminders to post-discharge care, all while maintaining the highest standards of security and HIPAA compliance.",
    problems: {
      title: "The Communication Gap in Healthcare",
      items: [
        {
          title: "Appointment No-Shows",
          description: "Missed appointments lead to significant revenue loss and disrupt the schedules of healthcare professionals."
        },
        {
          title: "Fragmented Patient Communication",
          description: "Lack of a unified communication channel can lead to confusion, missed information, and a poor patient experience."
        },
        {
          title: "Manual, Time-Consuming Processes",
          description: "Manual appointment reminders, follow-ups, and test result notifications are inefficient and prone to human error."
        },
        {
          title: "Poor Post-Discharge Follow-Up",
          description: "Inadequate post-discharge care and follow-up can lead to readmissions and lower patient satisfaction."
        }
      ]
    },
    solutions: {
      title: "How Our Solutions Bridge the Gap",
      items: [
        {
          title: "Automated Appointment Reminders",
          description: "Reduce no-shows and improve your schedule's efficiency with automated appointment reminders via SMS, voice, and email."
        },
        {
          title: "Secure Two-Way Patient Messaging",
          description: "Enable secure and convenient two-way communication between patients and providers for questions, follow-ups, and more."
        },
        {
          title: "Broadcast and Emergency Notifications",
          description: "Instantly send important announcements, public health alerts, and emergency notifications to patients and staff."
        },
        {
          title: "Automated Post-Discharge Follow-Up",
          description: "Improve patient outcomes and reduce readmissions with automated post-discharge follow-up and care instructions."
        }
      ]
    },
    features: [
      {
        title: "HIPAA-Compliant Communication",
        description: "Ensure all patient communication is secure and compliant with HIPAA regulations, protecting patient privacy and data."
      },
      {
        title: "Integration with EHR/EMR Systems",
        description: "Seamlessly integrate with your existing Electronic Health Record (EHR) or Electronic Medical Record (EMR) system for a unified workflow."
      },
      {
        title: "Interactive Voice Response (IVR) for Patients",
        description: "Allow patients to confirm appointments, request prescription refills, and access information through a 24/7 automated IVR system."
      },
      {
        title: "Real-Time Analytics and Reporting",
        description: "Track and measure the effectiveness of your communication campaigns with real-time analytics and detailed reporting."
      }
    ],
    benefits: [
      "Reduced Appointment No-Shows",
      "Improved Patient Engagement and Satisfaction",
      "Enhanced Operational Efficiency",
      "Better Health Outcomes and Reduced Readmissions",
      "Increased Revenue and Reduced Costs",
      "Assured HIPAA Compliance and Data Security"
    ],
    useCases: {
      title: "Real-World Scenarios",
      subtitle: "Discover how our solutions are transforming patient communication in various healthcare settings.",
      cases: [
        {
          title: "Reducing No-Shows at a Dental Clinic",
          description: "A dental clinic reduced its appointment no-show rate by 40% after implementing our automated SMS and voice reminder system."
        },
        {
          title: "Post-Operative Follow-Up for a Hospital",
          description: "A hospital uses our automated messaging to send post-operative care instructions and check on patients' recovery, reducing readmission rates by 15%."
        },
        {
          title: "Managing Chronic Disease Patients",
          description: "A primary care practice uses our two-way messaging to proactively manage patients with chronic diseases, improving medication adherence and overall health outcomes."
        }
      ]
    }
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 text-center bg-secondary">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            {healthcare.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {healthcare.hero.subtitle}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            {healthcare.overview}
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{healthcare.problems.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcare.problems.items.map((item, i) => (
              <Card key={i} className="shadow-lg h-full text-left">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">{healthcare.solutions.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcare.solutions.items.map((item, i) => (
              <Card key={i} className="shadow-lg h-full text-left">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthcare.features.map((feature, i) => (
              <Card key={i} className="shadow-lg h-full text-left">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {healthcare.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">{healthcare.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{healthcare.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {healthcare.useCases.cases.map((useCase, i) => (
                    <Card key={i} className="shadow-lg h-full text-left">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{useCase.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{useCase.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePage;
