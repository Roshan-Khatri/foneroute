import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'siteDescription', title: 'Site Description', type: 'text' }),

    // ✅ NEW FIELD (favicon added)
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // TEMP BACKWARD COMPATIBILITY (do not remove yet)
    defineField({ name: 'primaryPhone', title: 'Primary Phone', type: 'string' }),

    defineField({ name: 'primaryEmail', title: 'Primary Email', type: 'string' }),
    defineField({ name: 'usPhoneNumber', title: 'US Phone Number', type: 'string' }),
    defineField({ name: 'ukPhoneNumber', title: 'UK Phone Number', type: 'string' }),

    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string' }),
    defineField({ name: 'footerDescription', title: 'Footer Description', type: 'text' }),

    defineField({
      name: 'headerButton',
      title: 'Header Button',
      type: 'object',
      fields: [
        defineField({ name: 'text', title: 'Text', type: 'string' }),
        defineField({ name: 'link', title: 'Link', type: 'string' }),
      ],
    }),

    defineField({
      name: 'globalCta',
      title: 'Global CTA',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
        defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
      ],
    }),

    defineField({
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'object',
      fields: [
        defineField({ name: 'privacyPolicy', title: 'Privacy Policy', type: 'string' }),
        defineField({ name: 'termsOfService', title: 'Terms of Service', type: 'string' }),
      ],
    }),

    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footerCompanyLinks',
      title: 'Footer Company Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footerFeaturesLinks',
      title: 'Footer Features Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footerSolutionsLinks',
      title: 'Footer Solutions Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'link', title: 'Link', type: 'string' }),
          ],
        },
      ],
    }),

    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({ name: 'companyDescription', title: 'Company Description', type: 'text' }),
        defineField({ name: 'phoneNumber', title: 'Phone Number', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' }),
        defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
      ],
    }),
  ],
})