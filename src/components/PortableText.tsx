import { PortableText as PortableTextComponent } from '@portabletext/react';
import type { PortableTextBlock } from '@/sanity/types';

export default function PortableText({ value, className }: { value?: PortableTextBlock[]; className?: string }) {
  if (!value?.length) return null;
  return (
    <div className={className}>
      <PortableTextComponent value={value} />
    </div>
  );
}
