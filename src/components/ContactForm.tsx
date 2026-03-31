import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface ContactFormProps {
  data: {
    heading?: string;
    description?: string;
    solutions?: string[];
    submitButtonText?: string;
  };
}

export const ContactForm = ({ data }: ContactFormProps) => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    solution: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 🔥 Future: API call here
    console.log("FORM DATA 👉", formData);

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      solution: '',
      message: ''
    });
  };

  return (
    <Card className="card-professional">

      {/* HEADER */}
      <CardHeader>
        <CardTitle className="text-2xl font-poppins font-bold text-foreground">
          {data?.heading || "Get Started Today"}
        </CardTitle>

        <p className="text-muted-foreground">
          {data?.description || "Fill out the form and we’ll contact you."}
        </p>
      </CardHeader>

      {/* FORM */}
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First Name *</Label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Last Name *</Label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
              />
            </div>
          </div>

          {/* EMAIL + PHONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email Address *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>

          {/* COMPANY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Job Title</Label>
              <Input
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
              />
            </div>
          </div>

          {/* DROPDOWN (🔥 SANITY DATA) */}
          <div className="space-y-2">
            <Label>Solution of Interest</Label>

            <Select
              value={formData.solution}
              onValueChange={(value) => handleInputChange('solution', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a solution" />
              </SelectTrigger>

              <SelectContent>
                {data?.solutions?.map((item: string, i: number) => (
                  <SelectItem key={i} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* MESSAGE */}
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* BUTTON */}
          <Button type="submit" size="lg" className="w-full btn-hero">
            {data?.submitButtonText || "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>

        </form>
      </CardContent>
    </Card>
  );
};