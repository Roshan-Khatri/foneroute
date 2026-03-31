import {createClient} from '@sanity/client';

const client = createClient({
  projectId: '00t6xfuz',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-01-01',
  useCdn: false,
});

async function resetSingletons() {
  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home Page',
  };

  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Site Settings',
  };

  try {
    await client.createOrReplace(homePage);
    console.log('Successfully created/replaced homePage document');

    await client.createOrReplace(siteSettings);
    console.log('Successfully created/replaced siteSettings document');

  } catch (error) {
    console.error('Error resetting singleton documents:', error.message);
    if (error.message.includes('permission')) {
        console.error('Please ensure you have set the SANITY_API_TOKEN environment variable with a token that has write permissions.');
    }
  }
}

resetSingletons();
