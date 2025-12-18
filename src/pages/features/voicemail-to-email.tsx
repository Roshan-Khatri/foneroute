
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const VoicemailToEmailPage: FC = () => {
  const keyFeatures = [
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

          <section className="section-padding bg-surface rounded-lg">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="card-professional p-6 text-center">
                    <p className="text-lg font-semibold">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding">
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

        </div>
      </div>
    </>
  );
};

export default VoicemailToEmailPage;
