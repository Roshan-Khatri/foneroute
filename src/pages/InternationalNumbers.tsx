
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Building, Users, Star, Search, PhoneForwarded, BarChart } from 'lucide-react';

const countries = [
  { name: 'United States', code: 'us' },
  { name: 'Canada', code: 'ca' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'Australia', code: 'au' },
  { name: 'Germany', code: 'de' },
  { name: 'France', code: 'fr' },
  { name: 'Brazil', code: 'br' },
  { name: 'Japan', code: 'jp' },
  { name: 'India', code: 'in' },
  { name: 'Mexico', code: 'mx' },
  { name: 'Spain', code: 'es' },
  { name: 'South Africa', code: 'za' },
];

const InternationalNumbers = () => {
  return (
    <div className="debug-force-refresh">
      <PageHeader
        title="Connect Globally with International Numbers"
        description="Establish a local presence in over 100 countries and build trust with your international customers."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Expand Your Reach, Build Local Trust</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              With FoneRoute, you can instantly acquire local, national, and toll-free numbers from around the world. Present a familiar, local number to your customers, no matter where you are.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center transition-transform duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Establish Local Presence</h3>
                <p className="text-muted-foreground">Customers are 4x more likely to answer a call from a local number. Build trust and increase answer rates instantly.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-transform duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Enter New Markets</h3>
                <p className="text-muted-foreground">Test and expand into new countries without the need for a physical office. Forward calls to your existing team anywhere.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-transform duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unified Communications</h3>
                <p className="text-muted-foreground">Manage all your international numbers from one simple platform, with unified reporting and analytics.</p>
              </CardContent>
            </Card>
            <Card className="text-center transition-transform duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">Rely on crystal-clear call quality and reliable connections with our Tier-1 carrier network.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">How It Works in 3 Simple Steps</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Get your international number up and running in minutes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Search className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">1. Choose Your Number</h3>
              <p className="text-muted-foreground">Search for and select a local, national, or toll-free number from our extensive inventory.</p>
            </div>
            <div className="flex flex-col items-center">
              <PhoneForwarded className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">2. Set Up Forwarding</h3>
              <p className="text-muted-foreground">Decide where you want calls to go - to your mobile, landline, or our powerful softphone.</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart className="w-16 h-16 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">3. Start Calling</h3>
              <p className="text-muted-foreground">That's it! Start making and receiving calls with your new international number immediately.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mt-2">No hidden fees. No long-term contracts. Just clear, affordable pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Local Numbers</h3>
                <p className="text-5xl font-bold mb-2">$5</p>
                <p className="text-muted-foreground mb-6">per month</p>
                <ul className="text-left space-y-2 mb-8">
                  <li>✓ Local number in your chosen country</li>
                  <li>✓ Call forwarding</li>
                  <li>✓ Voicemail to email</li>
                </ul>
                <Button size="lg" className="w-full">Get Started</Button>
              </CardContent>
            </Card>
             <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">National Numbers</h3>
                <p className="text-5xl font-bold mb-2">$15</p>
                <p className="text-muted-foreground mb-6">per month</p>
                <ul className="text-left space-y-2 mb-8">
                  <li>✓ Nationwide presence</li>
                  <li>✓ All features from Local</li>
                  <li>✓ Advanced call routing</li>
                </ul>
                <Button size="lg" variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>
             <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Toll-Free Numbers</h3>
                <p className="text-5xl font-bold mb-2">$25</p>
                <p className="text-muted-foreground mb-6">per month</p>
                 <ul className="text-left space-y-2 mb-8">
                  <li>✓ Free for your customers to call</li>
                  <li>✓ All features from National</li>
                  <li>✓ IVR & Auto-attendant</li>
                </ul>
                <Button size="lg" variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Available in Countries Worldwide</h2>
            <p className="text-muted-foreground mt-2">Here are just a few of the countries where you can get a virtual phone number.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {countries.map((country) => (
              <div key={country.code} className="flex items-center space-x-3 p-3 bg-card rounded-lg shadow">
                <img src={`https://flagcdn.com/w40/${country.code}.png`} alt={`${country.name} flag`} className="w-10 h-auto" />
                <span className="font-medium">{country.name}</span>
              </div>
            ))}
          </div>
           <p className="text-center mt-8 text-muted-foreground">And many more! Contact us for availability in specific countries.</p>
        </div>
      </section>

    </div>
  );
};

export default InternationalNumbers;
