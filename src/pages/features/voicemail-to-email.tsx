
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const VoicemailToEmailPage: FC = () => {
  const keyCapabilities = [
    'Instant Email Notifications: Receive an email with the voicemail audio attached as an MP3 file the moment a message is left.',
    'Voicemail Transcription: Get a text version of your voicemails, allowing you to read messages at a glance.',
    'Easy Archiving and Search: Store and organize your voicemails within your email client for easy retrieval.',
    'Playback from Anywhere: Listen to your voicemails on any device that can access your email, including smartphones, tablets, and computers.',
  ];

  const benefits = [
    'Increased Efficiency: Save time by quickly scanning transcriptions or listening to audio files without dialing into your voicemail.',
    'Improved Responsiveness: Address urgent messages faster by receiving them directly in your inbox, no matter where you are.',
    'Better Organization: Keep a searchable record of all your communications, both emails and voicemails, in one place.',
    'Enhanced Accessibility: Provides an accessible alternative for team members who may have hearing impairments.',
  ];

  const useCases = [
    {
      title: 'Sales Professionals',
      description: 'Sales teams can use Voicemail to Email to quickly follow up on leads and customer inquiries. By receiving voicemails in their inbox, they can prioritize messages, share them with colleagues, and ensure timely responses, ultimately improving customer satisfaction and closing more deals.',
    },
    {
      title: 'Healthcare Providers',
      description: 'Medical practices can enhance patient communication by using Voicemail to Email. Staff can securely receive and manage patient messages, schedule appointments, and address urgent requests more efficiently, all while maintaining a clear and organized record of all communications.',
    },
    {
      title: 'Small Business Owners',
      description: 'For busy entrepreneurs, Voicemail to Email is an indispensable tool for managing a high volume of calls. It allows them to stay connected with customers, partners, and suppliers without being tied to their phones, ensuring that no opportunity is missed.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Voicemail to Email</title>
      </Helmet>
      <div className="bg-background text-foreground pt-32 pb-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold font-poppins tracking-tight mb-4">Voicemail to Email</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Never miss an important message again. Get your voicemails delivered directly to your email inbox as audio files, with optional transcription for quick reading.
            </p>
          </div>

          <section className="section-padding bg-surface rounded-lg mb-12">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center">
                Voicemail to Email is a modern solution that bridges the gap between traditional telephony and digital communication. It automatically converts your voicemails into audio files and delivers them directly to your email inbox. This streamlined process ensures that you never miss an important message and can manage your communications more efficiently. With the added benefit of transcription, you can read your voicemails at your convenience, making it easier than ever to stay on top of your messages.
              </p>
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

export default VoicemailToEmailPage;
