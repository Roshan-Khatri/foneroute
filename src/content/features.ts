
import type { Feature } from '@/sanity/types';

export const features: Partial<Feature>[] = [
  {
    title: 'Cloud PBX',
    slug: { current: 'cloud-pbx' },
    excerpt: 'A complete business phone system in the cloud.',
  },
  {
    title: 'Voicemail to Email',
    slug: { current: 'voicemail-to-email' },
    excerpt: 'Get voicemails delivered directly to your inbox.',
  },
  {
    title: 'Call Forwarding',
    slug: { current: 'call-forwarding' },
    excerpt: 'Redirect calls to any number or device.',
  },
  {
    title: 'Auto Attendant',
    slug: { current: 'auto-attendant' },
    excerpt: 'A virtual receptionist to greet and direct callers.',
  },
  {
    title: 'Call Recording',
    slug: { current: 'call-recording' },
    excerpt: 'Record calls for quality assurance and training.',
  },
  {
    title: 'Ring Groups',
    slug: { current: 'ring-groups' },
    excerpt: 'Route calls to multiple extensions simultaneously.',
  },
];
