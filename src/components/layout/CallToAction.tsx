
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Ready to Transform Your Business Communications?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Get started with a free consultation and discover how our solutions can drive your business forward.
        </p>
        <div className="mt-8">
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
