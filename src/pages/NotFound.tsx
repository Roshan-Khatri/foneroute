
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useSanityStatus } from '@/hooks/useSanityContent';

const NotFound = () => {
  const { data: isSanityConnected, isLoading } = useSanityStatus();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">404 - Page Not Found</h1>
      <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      { !isLoading && !isSanityConnected && (
        <p className="text-lg sm:text-xl text-red-500 mb-8 max-w-2xl">
          It looks like there's a problem connecting to our content backend. This might be why the page isn't loading.
        </p>
      )}
      <Link to="/">
        <Button size="lg" className="btn-hero">
          <Home className="mr-2 h-5 w-5" />
          Go Back to Homepage
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
