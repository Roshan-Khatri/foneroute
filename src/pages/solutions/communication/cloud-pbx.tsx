
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

const CloudPBXPage = () => {
  return (
    <main>
      <PageHeader
        title="Cloud PBX Solutions"
        breadcrumb={{
          links: [
            { name: 'Home', url: '/' },
            { name: 'Solutions', url: '/solutions' },
            { name: 'Communication', url: '/solutions/communication' },
            { name: 'Cloud PBX', url: '/solutions/communication/cloud-pbx' }
          ]
        }}
        description="Modernize your business communication with our reliable and scalable Cloud PBX solutions. Enjoy the flexibility of a cloud-based phone system without the hassle of managing on-premise hardware."
      />

      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Key Features of Our Cloud PBX Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Our Cloud PBX solutions are designed to provide your business with a complete communication solution. Here are some of the key features that we offer:
              </p>
              <ul className="mt-8 list-disc list-inside text-lg text-gray-600 dark:text-gray-300">
                <li>Virtual Receptionist: Greet your callers with a professional greeting and route them to the right department or employee.</li>
                <li>Call Forwarding: Forward calls to your mobile phone or any other number, so you never miss an important call.</li>
                <li>Voicemail to Email: Receive your voicemails as audio files in your email inbox, so you can listen to them on the go.</li>
                <li>Conference Calling: Host conference calls with multiple participants, so you can collaborate with your team and clients.</li>
              </ul>
            </div>
            <div>
              <img
                src="/images/cloud-pbx-features.jpg"
                alt="Cloud PBX features"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Coming Soon
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            This page is under construction. Please check back later for more information about our Cloud PBX solutions.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CloudPBXPage;
