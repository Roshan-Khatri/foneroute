
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Wrench, Mail, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="dark">
      {/* Hero Section */}
      <section className="py-20 text-center bg-background">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Support Center</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We’re here to help you with anything — explore solutions or contact our team.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search FAQs..."
              className="pl-10 w-full"
            />
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Account & Subscription */}
            <Card className="text-center card-hover-animation">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Account & Subscription</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Manage your profile, billing details, and get login assistance.
                </p>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="text-center card-hover-animation">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Wrench className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find troubleshooting guides, report product issues, and get setup help.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card className="text-center card-hover-animation">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with live support, send an email, or make business inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* "Need More Help?" Section */}
      <section className="py-16 text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our support team is ready to assist you with any questions.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Talk to Support</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Support;
