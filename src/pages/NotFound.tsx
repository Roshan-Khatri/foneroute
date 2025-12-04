
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          Oops! The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Button asChild>
          <Link to="/">
            Go Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
