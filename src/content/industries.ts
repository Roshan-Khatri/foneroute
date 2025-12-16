
import { Heart, Scale, BookOpen, Code, ShoppingCart, Truck, Hotel, Home, Briefcase } from 'lucide-react';

export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    hero: {
      title: 'Transform Patient Communication in Healthcare',
      subtitle: 'Secure, compliant, and integrated solutions for modern healthcare providers.',
    },
    overview: 'In the healthcare sector, timely and secure communication is not just a matter of convenience—it can be a matter of life and death. From appointment reminders to critical alerts and telehealth services, healthcare providers need a communication platform that is reliable, secure, and compliant with industry regulations like HIPAA. Our solutions are designed to meet these unique challenges, helping you improve patient outcomes, enhance operational efficiency, and reduce administrative costs.',
    keyProblems: [
      'High no-show rates for appointments, leading to lost revenue and scheduling inefficiencies.',
      'Insecure communication channels that risk violating HIPAA and other patient data privacy regulations.',
      'Fragmented communication between departments, causing delays in patient care and internal coordination issues.',
      'Lack of scalable and reliable telehealth solutions to meet the growing demand for remote care.',
      'Difficulty in managing patient feedback and follow-ups, impacting patient satisfaction and retention.'
    ],
    ourSolutions: [
      {
        title: 'Automated Appointment Reminders',
        description: 'Reduce no-shows and administrative work with our automated SMS and voice reminders. Customize messaging and timing to ensure patients receive timely and helpful notifications.',
        icon: 'Calendar'
      },
      {
        title: 'HIPAA-Compliant Messaging',
        description: 'Enable secure, encrypted communication channels for sharing sensitive patient information, test results, and treatment plans. Our platform is designed to meet the stringent requirements of HIPAA.',
        icon: 'Shield'
      },
      {
        title: 'Unified Clinical Communication',
        description: 'Connect your entire healthcare team—doctors, nurses, and administrative staff—on a single platform. Improve coordination, reduce response times, and ensure that critical information is always at the right person\'s fingertips.',
        icon: 'Users'
      },
      {
        title: 'High-Quality Telehealth Services',
        description: 'Provide reliable and secure video consultations with our high-quality, low-latency telehealth solutions. Our platform is easy to use for both providers and patients, ensuring a seamless virtual care experience.',
        icon: 'Video'
      }
    ],
    useCases: [
      {
        title: 'Appointment Management',
        description: 'A multi-specialty clinic uses our automated SMS reminders to reduce patient no-shows by 30%, saving thousands in lost revenue each month.'
      },
      {
        title: 'Secure Patient Follow-ups',
        description: 'A hospital sends post-discharge instructions and medication reminders to patients via our secure messaging platform, improving patient adherence to treatment plan.'
      },
      {
        title: 'Emergency Alerts',
        description: 'In the event of a critical incident, a hospital uses our mass notification system to instantly alert all staff members, ensuring a swift and coordinated response.'
      }
    ],
    benefits: [
      'Improved patient outcomes',
      'Enhanced operational efficiency',
      'Reduced administrative costs',
      'Increased patient satisfaction',
      'Guaranteed HIPAA compliance',
      'Higher staff productivity'
    ],
  },
  {
    slug: 'finance',
    title: 'Finance',
    icon: Scale,
    hero: {
      title: 'Secure and Compliant Communication for the Finance Industry',
      subtitle: 'Building trust and efficiency in every financial interaction.',
    },
    overview: 'The financial services industry operates on a foundation of trust and security. With stringent regulations like GDPR, and PCI DSS, financial institutions need a communication platform that not only meets these requirements but also enhances the customer experience. Our solutions are engineered to provide the highest levels of security, reliability, and compliance, helping you build lasting relationships with your clients.',
    keyProblems: [
      'Compliance risks associated with unrecorded or unmonitored communication channels.',
      'High operational costs due to manual compliance checks and reporting.',
      'Fragmented client communication leading to a disjointed and frustrating customer experience.',
      'Security vulnerabilities that expose sensitive financial data to the risk of fraud and cyberattacks.',
      'Difficulty in tracking and auditing client interactions, making it challenging to resolve disputes.'
    ],
    ourSolutions: [
      {
        title: 'Secure & Compliant Call Recording',
        description: 'Automatically record and archive all client calls in a secure, compliant manner. Our solution helps you meet regulatory requirements, improve training, and resolve disputes with ease.',
        icon: 'Mic'
      },
      {
        title: 'Encrypted Multi-Channel Communication',
        description: 'Engage with clients on their preferred channels—voice, SMS, and video—with end-to-end encryption. Our platform ensures that all communications are private and secure.',
        icon: 'Lock'
      },
      {
        title: 'AI-Powered Fraud Detection',
        description: 'Leverage our advanced AI and machine learning algorithms to detect and prevent fraudulent activities in real-time. Protect your clients and your business from financial losses.',
        icon: 'ShieldAlert'
      },
      {
        title: 'Integrated CRM & Billing Systems',
        description: 'Seamlessly integrate with your existing CRM and billing systems to automate workflows, track billable hours, and provide a unified view of the client relationship.',
        icon: 'Database'
      }
    ],
    useCases: [
      {
        title: 'Wealth Management',
        description: 'A wealth management firm uses our secure call recording solution to ensure that all financial advice is compliant with industry regulations. This has reduced their compliance risk and improved client trust.'
      },
      {
        title: 'Retail Banking',
        description: 'A retail bank leverages our AI-powered fraud detection to identify and block suspicious transactions, saving their customers from significant financial losses.'
      },
      {
        title: 'Insurance Claims',
        description: 'An insurance company uses our platform to securely communicate with claimants, share documents, and record statements, accelerating the claims process and improving customer satisfaction.'
      }
    ],
    benefits: [
      'Guaranteed regulatory compliance',
      'Enhanced data security',
      'Reduced operational costs',
      'Increased customer trust and loyalty',
      'Improved dispute resolution',
      'Streamlined workflows'
    ],
  },
  {
    slug: 'education',
    title: 'Education',
    icon: BookOpen,
    hero: {
      title: 'Connecting Communities in Education',
      subtitle: 'Fostering collaboration and engagement in modern learning environments.',
    },
    overview: 'Educational institutions are hubs of communication, connecting students, parents, faculty, and staff. Effective communication is essential for creating a positive learning environment, ensuring student safety, and streamlining administrative processes. Our solutions are designed to help educational institutions build a more connected and engaged campus community, from K-12 to higher education.',
    keyProblems: [
      'Difficulty in reaching students and parents with timely information and emergency alerts.',
      'Fragmented communication tools that create confusion and hinder collaboration.',
      'High administrative overhead associated with manual processes for admissions, registration, and tuition reminders.',
      'Lack of engaging and accessible remote learning options for students.',
      'Challenges in providing timely and effective student support and services.'
    ],
    ourSolutions: [
      {
        title: 'Unified Campus Communication',
        description: 'Integrate voice, video, SMS, and mass notifications into a single, easy-to-use platform. Connect your entire campus community and ensure that everyone stays informed.',
        icon: 'Users'
      },
      {
        title: 'Automated Student Services & Alerts',
        description: 'Automate routine tasks such as admissions inquiries, registration reminders, and tuition payment notifications. Free up your staff to focus on more strategic initiatives.',
        icon: 'Bot'
      },
      {
        title: 'Enhanced E-Learning & Virtual Classrooms',
        description: 'Deliver a high-quality, interactive learning experience with our reliable and secure video conferencing solutions. Foster collaboration and engagement, no matter where your students are.',
        icon: 'Video'
      },
      {
        title: 'Parent & Guardian Engagement Tools',
        description: 'Keep parents and guardians informed with automated attendance alerts, grade notifications, and event reminders. Build a strong school-home partnership.',
        icon: 'Mail'
      }
    ],
    useCases: [
      {
        title: 'Emergency Notifications',
        description: 'A school district uses our mass notification system to instantly alert parents and staff of school closures due to inclement weather, ensuring student safety.'
      },
      {
        title: 'Student Admissions',
        description: 'A university automates the admissions process, from initial inquiry to final acceptance, using our integrated communication platform. This has reduced response times and improved the applicant experience.'
      },
      {
        title: 'Remote Learning',
        description: 'A K-12 school offers a hybrid learning model, using our virtual classroom solution to provide a seamless and engaging experience for remote students.'
      }
    ],
    benefits: [
      'Improved student engagement and retention',
      'Streamlined administrative workflows',
      'Enhanced campus safety and security',
      'Increased parent and guardian involvement',
      'Greater accessibility to learning',
      'Reduced operational costs'
    ],
  },
  {
    slug: 'technology',
    title: 'Technology',
    icon: Code,
    hero: {
      title: 'Build, Innovate, and Scale with Powerful Communication APIs',
      subtitle: 'The communication infrastructure for agile and innovative tech companies.',
    },
    overview: 'In the fast-paced and competitive technology sector, your communication infrastructure needs to be as agile and innovative as your products. Our developer-friendly APIs and scalable cloud platform provide the building blocks you need to create exceptional customer experiences, streamline operations, and accelerate innovation. Whether you\'re a startup or a tech giant, our solutions are designed to grow with you.',
    keyProblems: [
      'Lack of scalable and reliable communication infrastructure to support rapid growth.',
      'Difficulty in integrating communication features into existing applications and workflows.',
      'High latency and poor quality in voice and video communications, leading to a frustrating user experience.',
      'Inability to provide global reach and local presence for a worldwide user base.',
      'Complex and time-consuming carrier negotiations and management.'
    ],
    ourSolutions: [
      {
        title: 'Developer-Friendly APIs',
        description: 'Easily integrate voice, video, SMS, and authentication into your applications with our well-documented and robust APIs. Get to market faster with our flexible and powerful platform.',
        icon: 'Code'
      },
      {
        title: 'Scalable Cloud-Native Platform',
        description: 'Our global, cloud-native platform is built for scale and reliability, ensuring that your communication services are always available, no matter where your users are.',
        icon: 'Cloud'
      },
      {
        title: 'Unified Collaboration Tools',
        description: 'Connect your global teams with our suite of collaboration tools, including video conferencing, team messaging, and cloud-based business phone systems.',
        icon: 'Users'
      },
      {
        title: 'Global Carrier Network',
        description: 'Leverage our global network of carriers to achieve high-quality, low-latency communications with a local presence in over 100 countries.',
        icon: 'Globe'
      }
    ],
    useCases: [
      {
        title: 'In-App Communication',
        description: 'A ride-sharing app uses our voice and SMS APIs to enable drivers and passengers to communicate securely without revealing their personal phone numbers.'
      },
      {
        title: 'Two-Factor Authentication (2FA)',
        description: 'A fintech startup uses our authentication API to secure user accounts with two-factor authentication, protecting against unauthorized access.'
      },
      {
        title: 'Cloud Contact Center',
        description: 'A SaaS company builds a scalable, cloud-based contact center to provide 24/7 customer support to its global user base.'
      }
    ],
    benefits: [
      'Accelerated time-to-market',
      'Increased developer productivity',
      'Improved user experience',
      'Global scale and reliability',
      'Reduced infrastructure costs',
      'Enhanced security and compliance'
    ],
  },
  {
    slug: 'retail',
    title: 'Retail',
    icon: ShoppingCart,
    hero: {
      title: 'Enhance the Customer Experience in Retail',
      subtitle: 'Building brand loyalty and driving sales with seamless communication.',
    },
    overview: 'In the competitive world of retail, the customer experience is everything. From personalized marketing to seamless order fulfillment and responsive customer service, every interaction is an opportunity to build a lasting relationship. Our solutions are designed to help retailers create a more engaging, personalized, and efficient customer journey, from online to in-store.',
    keyProblems: [
      'High cart abandonment rates due to a lack of timely customer support.',
      'Fragmented communication between online and in-store operations, leading to a disjointed customer experience.',
      'Difficulty in managing high volumes of customer inquiries during peak seasons.',
      'Lack of personalized and timely communication, resulting in low customer engagement and loyalty.',
      'Inefficient in-store communication that impacts staff productivity and customer service.'
    ],
    ourSolutions: [
      {
        title: 'Omnichannel Contact Center',
        description: 'Provide a seamless customer experience across all channels—voice, SMS, chat, and social media. Our omnichannel contact center solution gives your agents a unified view of the customer, enabling them to provide personalized and efficient support.',
        icon: 'Users'
      },
      {
        title: 'Automated Order & Delivery Notifications',
        description: 'Keep your customers informed at every step of the fulfillment process. Our automated SMS and voice notifications for order confirmations, shipping updates, and delivery alerts reduce customer anxiety and improve satisfaction.',
        icon: 'Truck'
      },
      {
        title: 'Personalized SMS & Voice Marketing',
        description: 'Engage your customers with targeted and personalized marketing campaigns. Send promotional offers, new product announcements, and exclusive discounts via SMS and voice to drive sales and build brand loyalty.',
        icon: 'Megaphone'
      },
      {
        title: 'In-Store Staff Communication',
        description: 'Equip your in-store staff with reliable and instant communication tools. Our push-to-talk and group messaging features improve coordination between departments, from the stockroom to the sales floor.',
        icon: 'Smartphone'
      }
    ],
    useCases: [
      {
        title: 'Abandoned Cart Recovery',
        description: 'An e-commerce retailer uses our automated SMS solution to send personalized reminders to customers who have abandoned their shopping carts, recovering up to 15% of lost sales.'
      },
      {
        title: 'Curbside Pickup',
        description: 'A brick-and-mortar store uses our two-way SMS communication to manage curbside pickups, providing a safe and convenient experience for their customers.'
      },
      {
        title: 'Flash Sales & Promotions',
        description: 'A fashion brand uses our voice broadcasting solution to announce flash sales to their VIP customers, creating a sense of urgency and driving immediate sales.'
      }
    ],
    benefits: [
      'Increased sales and revenue',
      'Improved customer satisfaction and loyalty',
      'Streamlined online and in-store operations',
      'Reduced cart abandonment rates',
      'Enhanced staff productivity',
      'Higher marketing ROI'
    ],
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    icon: Truck,
    hero: {
      title: 'Streamline Operations and Enhance Safety in Manufacturing',
      subtitle: 'Connecting the factory floor to the supply chain.',
    },
    overview: 'In the manufacturing industry, efficiency, safety, and coordination are paramount. From the production line to the supply chain, every component needs to work in harmony. Our communication solutions are designed to streamline workflows, enhance worker safety, and provide real-time visibility into your operations, helping you reduce downtime, improve productivity, and maintain a competitive edge.',
    keyProblems: [
      'Production line downtime due to slow response to equipment malfunctions.',
      'Poor coordination between the factory floor, warehouse, and supply chain partners.',
      'Lack of real-time visibility into production status and inventory levels.',
      'Ineffective communication channels for emergency alerts and worker safety protocols.',
      'Difficulty in tracking and managing logistics and delivery schedules.'
    ],
    ourSolutions: [
      {
        title: 'Automated Equipment Monitoring & Alerts',
        description: 'Integrate our platform with your IoT sensors to monitor equipment health and receive instant alerts via SMS or voice call when a machine malfunctions. This enables you to proactively address issues and minimize downtime.',
        icon: 'Server'
      },
      {
        title: 'Unified Supply Chain Communication',
        description: 'Connect your entire supply chain—suppliers, distributors, and logistics providers—on a single platform. Share real-time updates, manage delivery schedules, and resolve issues quickly to ensure a smooth and efficient supply chain.',
        icon: 'Truck'
      },
      {
        title: 'Mass Notification & Emergency Alerts',
        description: 'In the event of an emergency, instantly alert your entire workforce with our mass notification system. Deliver critical information via SMS and voice to ensure that everyone is informed and safe.',
        icon: 'Megaphone'
      },
      {
        title: 'Push-to-Talk for Factory Floor Communication',
        description: 'Equip your factory floor workers with our rugged and reliable push-to-talk devices. Enable instant, one-to-one or one-to-many communication to improve coordination and response times.',
        icon: 'Phone'
      }
    ],
    useCases: [
      {
        title: 'Predictive Maintenance',
        description: 'A manufacturing plant uses our automated alerts to receive notifications when a machine is about to fail. This allows them to perform predictive maintenance, avoiding costly downtime.'
      },
      {
        title: 'Supply Chain Coordination',
        description: 'A CPG company uses our platform to coordinate with its suppliers and distributors, ensuring that raw materials are delivered on time and finished goods are shipped out efficiently.'
      },
      {
        title: 'Worker Safety',
        description: 'In a chemical plant, workers use our push-to-talk devices to instantly communicate with the control room in case of an emergency, improving worker safety and response times.'
      }
    ],
    benefits: [
      'Reduced production downtime',
      'Improved operational efficiency',
      'Enhanced worker safety',
      'Greater supply chain visibility',
      'Faster response to incidents',
      'Increased productivity'
    ],
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    icon: Hotel,
    hero: {
      title: 'Create Exceptional Guest Experiences in Hospitality',
      subtitle: 'From seamless booking to personalized in-stay services.',
    },
    overview: 'In the hospitality industry, the guest experience is the currency of success. From the moment a guest books a room to the time they check out, every interaction is an opportunity to create a memorable and personalized stay. Our communication solutions are designed to help hotels, resorts, and other hospitality businesses streamline operations, enhance guest services, and build lasting loyalty.',
    keyProblems: [
      'Fragmented communication between the front desk, housekeeping, and maintenance, leading to slow response times to guest requests.',
      'High administrative overhead from manual booking confirmations, check-in reminders, and service requests.',
      'Lack of personalized communication that makes guests feel like just another room number.',
      'Inefficient management of guest feedback and reviews, leading to missed opportunities for improvement.',
      'Difficulty in promoting on-site amenities and special offers to guests.'
    ],
    ourSolutions: [
      {
        title: 'Automated Guest Messaging',
        description: 'Engage your guests with automated SMS and voice messages for booking confirmations, check-in details, and pre-arrival information. Provide a seamless and welcoming experience from the very beginning.',
        icon: 'Mail'
      },
      {
        title: 'Unified Staff Collaboration',
        description: 'Connect your entire hotel staff on a single platform. Our mobile and desktop apps enable front desk, housekeeping, and maintenance teams to communicate in real-time, ensuring that guest requests are handled quickly and efficiently.',
        icon: 'Users'
      },
      {
        title: 'In-Room Service Automation',
        description: 'Automate guest requests for services like room service, wake-up calls, and spa bookings. Our interactive voice response (IVR) and SMS solutions make it easy for guests to get what they need, when they need it.',
        icon: 'ConciergeBell'
      },
      {
        title: 'Personalized Guest Engagement',
        description: 'Send personalized offers and recommendations to your guests based on their preferences and past behavior. Promote on-site amenities, local attractions, and special events to enhance their stay and generate additional revenue.',
        icon: 'Star'
      }
    ],
    useCases: [
      {
        title: 'Contactless Check-in',
        description: 'A hotel uses our automated SMS solution to provide guests with a contactless check-in option. Guests receive a message on the day of arrival with a link to check in online, reducing wait times at the front desk.'
      },
      {
        title: 'Housekeeping & Maintenance',
        description: 'A resort uses our staff collaboration tools to dispatch housekeeping and maintenance requests in real-time. This has improved response times by 50% and increased guest satisfaction.'
      },
      {
        title: 'Guest Feedback',
        description: 'A boutique hotel sends an automated SMS survey to guests after they check out. This allows them to collect valuable feedback and address any issues before they appear in online reviews.'
      }
    ],
    benefits: [
      'Enhanced guest experience and satisfaction',
      'Improved staff efficiency and productivity',
      'Increased guest loyalty and repeat bookings',
      'Streamlined hotel operations',
      'Higher revenue from on-site services',
      'Positive online reviews'
    ],
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    icon: Home,
    hero: {
      title: 'Connecting Agents, Buyers, and Sellers in Real Estate',
      subtitle: 'Close deals faster with seamless and instant communication.',
    },
    overview: 'In the fast-paced world of real estate, timing is everything. From capturing new leads to coordinating showings and negotiating offers, every moment counts. Our communication solutions are designed to help real estate professionals stay connected, respond faster, and provide an exceptional client experience, from the first inquiry to the final closing.',
    keyProblems: [
      'Missed leads and slow response times, resulting in lost opportunities.',
      'Difficulty in coordinating showings and appointments between agents, buyers, and sellers.',
      'Insecure and inefficient methods for sharing sensitive documents and contracts.',
      'Lack of a centralized system for tracking client communications and property inquiries.',
      'Challenges in keeping all parties informed and aligned during the complex closing process.'
    ],
    ourSolutions: [
      {
        title: 'Instant Lead Capture & Routing',
        description: 'Capture leads from your website, social media, and real estate portals, and instantly route them to the right agent. Our automated lead distribution ensures that every inquiry is followed up on promptly.',
        icon: 'Zap'
      },
      {
        title: 'Automated Appointment & Showing Reminders',
        description: 'Reduce no-shows and keep everyone on schedule with our automated SMS and voice reminders for property viewings, inspections, and closing appointments.',
        icon: 'Calendar'
      },
      {
        title: 'Secure Document Sharing & E-Signatures',
        description: 'Share and sign contracts, disclosures, and other sensitive documents with our secure, encrypted platform. Our e-signature integration streamlines the closing process and ensures that all documents are legally binding.',
        icon: 'FileLock'
      },
      {
        title: 'Unified Client Communication Hub',
        description: 'Manage all of your client communications—calls, texts, and emails—in a single, unified inbox. Our CRM integration provides a complete history of every interaction, ensuring that you\'re always up-to-date.',
        icon: 'Inbox'
      }
    ],
    useCases: [
      {
        title: 'Lead Generation',
        description: 'A real estate agency uses our SMS auto-responder to instantly engage with new leads from their website, resulting in a 25% increase in lead conversion.'
      },
      {
        title: 'Transaction Coordination',
        description: 'A transaction coordinator uses our platform to keep all parties—agents, lenders, and title companies—informed and on track for a smooth and timely closing.'
      },
      {
        title: 'Property Marketing',
        description: 'An agent uses our voice broadcasting solution to send a pre-recorded message to a list of potential buyers, announcing a new property listing and generating immediate interest.'
      }
    ],
    benefits: [
      'Faster lead response times and higher conversion rates',
      'Improved client satisfaction and referrals',
      'Accelerated sales cycles and faster closings',
      'Enhanced security and compliance',
      'Streamlined workflows and increased agent productivity',
      'Greater visibility into your business'
    ],
  },
  {
    slug: 'legal',
    title: 'Legal',
    icon: Briefcase,
    hero: {
      title: 'Secure and Compliant Communication for the Legal Sector',
      subtitle: 'Maintain client confidentiality and improve billing accuracy.',
    },
    overview: 'In the legal profession, confidentiality, accuracy, and compliance are non-negotiable. Law firms require a communication platform that is not only secure and reliable but also integrates seamlessly with their existing workflows. Our solutions are designed to help law firms maintain the highest standards of client confidentiality, improve billing accuracy, and ensure compliance with legal regulations.',
    keyProblems: [
      'Risk of violating attorney-client privilege with insecure communication channels.',
      'Difficulty in accurately tracking and billing for time spent on client calls.',
      'In-person meetings for depositions and client consultations are not always feasible or cost-effective.',
      'Challenges in managing and archiving client communications for compliance and discovery.',
      'Lack of a secure and efficient method for sharing confidential legal documents.'
    ],
    ourSolutions: [
      {
        title: 'Secure & Encrypted Client Communication',
        description: 'Ensure that all of your client communications—voice, video, and messaging—are private and secure with our end-to-end encryption. Our platform is designed to meet the stringent confidentiality requirements of the legal profession.',
        icon: 'Lock'
      },
      {
        title: 'Automated Time & Billing Integration',
        description: 'Integrate our platform with your existing time and billing system to automatically track and log all billable hours for client calls. Eliminate manual entry and ensure accurate invoicing.',
        icon: 'Clock'
      },
      {
        title: 'High-Quality Video Conferencing for Depositions',
        description: 'Conduct remote depositions and client consultations with our high-quality, secure video conferencing solution. Our platform provides a reliable and cost-effective alternative to in-person meetings.',
        icon: 'Video'
      },
      {
        title: 'Compliant Call Recording & Archiving',
        description: 'Record and archive all client calls in a secure, compliant manner. Our solution helps you meet your legal and ethical obligations, and provides a valuable resource for training and dispute resolution.',
        icon: 'Archive'
      }
    ],
    useCases: [
      {
        title: 'Client Intake',
        description: 'A law firm uses our IVR and call routing system to manage new client intake, ensuring that every call is directed to the right person and that all necessary information is captured.'
      },
      {
        title: 'Remote Depositions',
        description: 'A litigator uses our secure video conferencing solution to conduct remote depositions, saving time and money on travel costs.'
      },
      {
        title: 'Client Billing',
        description: 'A corporate law firm integrates our platform with its billing system to automatically track all billable hours for client calls, resulting in a 15% increase in billed revenue.'
      }
    ],
    benefits: [
      'Enhanced client confidentiality and security',
      'Improved billing accuracy and revenue capture',
      'Simplified compliance and record-keeping',
      'Reduced travel costs and increased efficiency',
      'Improved client satisfaction and trust',
      'Streamlined workflows and increased productivity'
    ],
  },
];
