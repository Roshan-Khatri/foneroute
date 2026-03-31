
import { FC } from 'react';
import PageHeader from '@/components/layout/PageHeader';

interface GenericPageProps {
  title: string;
  description: string;
}

const GenericPage: FC<GenericPageProps> = ({ title, description }) => {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
      />
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
          <p className="text-muted-foreground text-lg">
            This page is under construction. Please check back later for more information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
