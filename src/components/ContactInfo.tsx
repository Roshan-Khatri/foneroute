import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

interface ContactItem {
  title: string;
  value: string;
  description?: string;
}

interface ContactInfoProps {
  heading?: string;
  items?: ContactItem[];
}

// ✅ Icon mapping based on title
const iconMap: Record<string, any> = {
  "General Inquiries": Mail,
  "Sales Inquiries": Phone,
  "Support": MessageSquare,
  "Address": MapPin,
};

export const ContactInfo = ({ heading, items }: ContactInfoProps) => {
  return (
    <div className="space-y-8">

      {/* HEADING */}
      <div>
        <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
          {heading || "Get In Touch"}
        </h2>

        {/* ITEMS */}
        <div className="space-y-6">
          {items?.map((info, index) => {
            const Icon = iconMap[info.title] || Mail;

            return (
              <div key={index} className="flex items-start space-x-4">

                {/* ICON */}
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="font-medium text-foreground mb-1">
                    {info.title}
                  </h3>

                  <p className="text-foreground font-medium mb-1">
                    {info.value}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {info.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};