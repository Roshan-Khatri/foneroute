import { Shield, Lock, FileText, ShieldCheck } from 'lucide-react';

const TrustCenterPage = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <Shield className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            FoneRoute Trust Center
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Your trust is our top priority. Learn about our commitment to security, compliance, and privacy.
          </p>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 border rounded-lg card-hover-animation">
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Security</h2>
              <p className="text-muted-foreground">
                We employ industry-leading security measures to protect your data and communications at every layer of our platform.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg card-hover-animation">
              <FileText className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Compliance</h2>
              <p className="text-muted-foreground">
                Our services are designed to help you meet your compliance and regulatory obligations, including GDPR, HIPAA, and more.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border rounded-lg card-hover-animation">
              <ShieldCheck className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Privacy</h2>
              <p className="text-muted-foreground">
                We are committed to protecting your privacy and giving you control over your data. Read our privacy policy for details.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrustCenterPage;
