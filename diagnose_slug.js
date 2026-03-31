// This script safely queries your Sanity dataset to find all documents
// with the slug "contact". It does not modify any data.

import {createClient} from '@sanity/client';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function findDuplicateSlugs() {
  // Check if the Sanity API token is set
  if (!process.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN === '<your-token-here>') {
    console.error('Error: SANITY_API_TOKEN is not set or is still the placeholder value.');
    console.error('Please create a .env.local file in your project root with the following content:');
    console.error('SANITY_API_TOKEN="<your-read-token-here>"');
    console.error('You can create a token at https://www.sanity.io/manage/personal/tokens');
    return;
  }

  const client = createClient({
    projectId: '00t6xfuz',
    dataset: 'production',
    token: process.env.SANITY_API_TOKEN,
    apiVersion: '2024-05-23', // Use a recent API version
    useCdn: false,
  });

  try {
    console.log('Querying for documents with slug: "contact"');
    const query = '*[_type == "page" && slug.current == "contact"]{_id, _type, title, "slug": slug.current}';
    const documents = await client.fetch(query);

    if (documents.length > 0) {
      console.log('Found the following documents:');
      console.log(JSON.stringify(documents, null, 2));
    } else {
      console.log('No documents found with the slug "contact".');
    }
  } catch (error) {
    console.error('An error occurred while fetching documents:', error);
  }
}

findDuplicateSlugs();
