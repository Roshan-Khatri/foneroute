
import { useLocation } from 'react-router-dom';
import Layout from './Layout';

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <Layout location={location}>
      {children}
    </Layout>
  );
};

export default LayoutWrapper;
