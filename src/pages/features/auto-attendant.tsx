
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const AutoAttendantPage: FC = () => {
  const overview = 'An auto attendant, or virtual receptionist, greets callers and directs them to the right department or employee. This feature provides a professional image for your business and ensures that calls are handled efficiently, improving customer experience and operational workflow.';

  const keyCapabilities = [
    'Customizable Greetings: Create personalized greetings for business hours, after-hours, and holidays.',
    'Intelligent Call Routing: Direct callers to the right department, extension, or voicemail with easy-to-configure menus.',
    'Directory Services: Allow callers to find employees by name using a dial-by-name directory.',
    'Seamless Integration: Works with your existing phone system and CRMs for a unified communication experience.',
  ];

  const benefits = [
    'Enhanced Professionalism: Greet every caller with a consistent and professional message, improving your business\'s image.',
    'Improved Efficiency: Automate call handling to free up your staff to focus on more critical tasks.',
    'Enhanced Customer Experience: Reduce wait times and connect callers to the right person quickly and efficiently.',
    '24/7 Availability: Ensure your business is always responsive, even outside of regular business hours.',
  ];

  const useCases = [
    {
      title: 'Small and Medium Businesses',
      description: 'SMBs can project a big-company image without the cost of a full-time receptionist. An auto attendant ensures that every call is answered promptly and professionally, enhancing customer trust and satisfaction.',
    },
    {
      title: 'Healthcare Clinics',
      description: 'Medical offices can manage high call volumes by directing patients to the right department, such as appointments, billing, or nurse inquiries. This reduces administrative workload and improves patient service.',
    },
    {
      title: 'Real Estate Agencies',
      description: 'Real estate firms can use an auto attendant to route calls from buyers, sellers, and partners to the appropriate agent or department, ensuring that no lead is missed and every client receives prompt attention.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Auto Attendant</title>
      </Helmet>
      <div className="bg-background text-foreground pt-32 pb-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">Auto Attendant</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A virtual receptionist that greets callers and directs them to the right department or employee, ensuring a professional image and efficient call handling.
            </p>
          </div>

          <section className="section-padding bg-surface rounded-lg mb-12">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">{overview}</p>
            </div>
          </section>

          <section className="section-padding bg-surface rounded-lg mb-12">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Key Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyCapabilities.map((capability, index) => (
                  <div key={index} className="p-6 text-center rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <p className="text-lg font-semibold">{capability}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-surface rounded-lg mb-12">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Benefits</h2>
              <ul className="space-y-4 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start p-6 rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                    <p className="font-semibold">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-padding bg-surface rounded-lg">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="p-6 text-center rounded-lg shadow-lg bg-card hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default AutoAttendantPage;
