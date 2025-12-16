
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const EducationPage = () => {
  const education = {
    hero: {
      title: "Transform Communication in Education",
      subtitle: "Engage students, parents, and staff with seamless and secure communication solutions tailored for the education sector."
    },
    overview: "In today's connected world, effective communication is critical for student success and institutional efficiency. Our solutions help educational institutions streamline communication, enhance engagement, and improve safety across the entire learning community.",
    features: [
      {
        title: "Mass Notifications",
        description: "Instantly send alerts and announcements to students, parents, and staff via SMS, voice, and email for emergencies, school closures, and important updates."
      },
      {
        title: "Parent-Teacher Communication",
        description: "Facilitate secure and direct communication between parents and teachers with two-way messaging, appointment scheduling, and progress report delivery."
      },
      {
        title: "Student Engagement Platforms",
        description: "Utilize interactive voice response (IVR) and SMS surveys to gather feedback, conduct polls, and increase student participation in campus activities."
      },
      {
        title: "Attendance Monitoring",
        description: "Automate attendance tracking and truancy alerts to notify parents of unexcused absences, improving student accountability and safety."
      },
      {
        title: "Admissions and Enrollment",
        description: "Streamline the admissions process with automated follow-ups, application status updates, and virtual open house invitations."
      },
      {
        title: "Campus Safety and Security",
        description: "Implement emergency alert systems and anonymous tip lines to enhance campus safety and provide a secure learning environment."
      }
    ],
    benefits: [
      "Improved Student and Parent Engagement",
      "Enhanced Campus Safety and Security",
      "Increased Administrative Efficiency",
      "Reduced Operational Costs",
      "Better Attendance and Punctuality",
      "Streamlined Admissions Process"
    ],
    useCases: {
        title: "Real-World Scenarios",
        subtitle: "See how our communication solutions are making a difference in educational institutions.",
        cases: [
          {
            title: "Emergency School Closure",
            description: "A school district uses our mass notification system to instantly inform all parents and staff about a sudden closure due to severe weather, ensuring everyone's safety."
          },
          {
            title: "Parent-Teacher Conference Scheduling",
            description: "An elementary school simplifies conference scheduling by allowing parents to book appointments with teachers via an automated SMS system, saving administrative time."
          },
          {
            title: "University Admission Follow-ups",
            description: "A university admissions office uses automated emails and SMS to keep applicants informed about their application status, increasing enrollment rates."
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
            {education.hero.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            {education.hero.subtitle}
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
            {education.overview}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.features.map((feature, i) => (
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-foreground">{education.useCases.title}</h2>
                <p className="text-lg max-w-3xl mx-auto text-muted-foreground">{education.useCases.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {education.useCases.cases.map((useCase, i) => (
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

export default EducationPage;
