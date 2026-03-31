
export interface SearchItem {
    type: 'Solution' | 'Feature' | 'Page';
    name: string;
    href: string;
    description: string;
  }
  
  const solutions = {
    title: "Solutions",
    sections: [
      {
        title: "Contact Center Solution",
        items: [
          { name: 'Auto Dialer', href: '/solutions/contact-center/auto-dialer', description: 'Automatically dial from a list of contacts.' },
          { name: 'Power Dialer', href: '/solutions/contact-center/power-dialer', description: 'Dial one by one, skipping unanswered calls.' },
          { name: 'Predictive Dialer', href: '/solutions/contact-center/predictive-dialer', description: 'Dial multiple numbers and connect agents to live calls.' },
          { name: 'Progressive Dialer', href: '/solutions/contact-center/progressive-dialer', description: 'Dial numbers at a fixed ratio to available agents.' },
          { name: 'Inbound Contact Center', href: '/solutions/contact-center/inbound', description: 'Manage incoming customer calls efficiently.' },
          { name: 'Outbound Contact Center', href: '/solutions/contact-center/outbound', description: 'Power up your outbound sales and marketing calls.' },
        ],
      },
      {
        title: "International Numbers",
        items: [
          { name: 'Toll-Free Numbers', href: '/solutions/international-numbers/toll-free', description: 'Allow customers to call you for free.' },
          { name: 'Local Numbers', href: '/solutions/international-numbers/local', description: 'Establish a local presence in any country.' },
        ],
      },
      {
        items: [
          { name: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'A complete business phone system in the cloud.' },
          { name: 'Unified Communications', href: '/solutions/unified-communications', description: 'Combine all your communication channels in one platform.' },
          { name: 'Click to Call', href: '/solutions/click-to-call', description: 'Add a call button to your website or app.' },
          { name: 'SMS/MMS API', href: '/solutions/sms-mms-api', description: 'Integrate SMS and MMS messaging into your applications.' },
          { name: 'Number Masking', href: '/solutions/number-masking', description: 'Protect user privacy with temporary numbers.' },
          { name: 'WhatsApp Business Solution', href: '/solutions/whatsapp-business-solution', description: 'Engage with customers on the world\'s most popular messaging app.' },
        ]
      }
    ],
  };
  
  const features = {
    title: "Features",
    sections: [
        {
            title: "Core Features",
            items: [
                { name: 'Calling Features', href: '/features/calling-features', description: 'Enhance your communication with powerful calling features.' },
                { name: 'Call Management', href: '/features/call-management', description: 'Take control of your inbound and outbound calls.' },
                { name: 'Call Reporting', href: '/features/call-reporting', description: 'Gain valuable insights into your call performance.' },
            ],
        },
        {
            title: "Advanced Call Control",
            items: [
                { name: 'Call Tracking', href: '/features/call-tracking', description: 'Monitor and analyze your call sources to optimize your marketing.' },
                { name: 'Call Forwarding', href: '/features/call-forwarding', description: 'Redirect incoming calls to any number, ensuring you never miss a call.' },

            ],
        },
        {
            title: "Contact Management",
            items: [
                { name: 'Target Management', href: '/features/target-management', description: 'Efficiently manage and organize your contact lists.' },
                { name: 'Call Capping', href: '/features/call-capping', description: 'Limit calls to contacts to avoid over-dialing.' },
            ]
        }
    ],
  };
  
  const allSearchableItems: SearchItem[] = [
    // Pages
    { type: 'Page', name: 'Home', href: '/', description: 'Return to the main page of FoneRoute.' },
    { type: 'Page', name: 'Support', href: '/support', description: 'Find help and support for our products.' },
    { type: 'Page', name: 'About', href: '/about', description: 'Learn more about our company and team.' },
    { type: 'Page', name: 'Contact Sales', href: '/contact', description: 'Get in touch with our sales team.' },
  
    // Solutions
    ...solutions.sections.flatMap(section => 
      section.items.map(item => ({ ...item, type: 'Solution' as const }))
    ),
  
    // Features
    ...features.sections.flatMap(section => 
      section.items.map(item => ({ ...item, type: 'Feature' as const }))
    ),
  ];
  
  export default allSearchableItems;
