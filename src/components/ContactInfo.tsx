
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ElementType;
  title: string;
  details: string;
  description: string;
}

interface ContactInfoProps {
  contactInfo: ContactInfoItem[];
}

export const ContactInfo = ({ contactInfo }: ContactInfoProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
