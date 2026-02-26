
// To use this script:
// 1. Install the required libraries if you haven't already:
//    npm install @sanity/client dotenv
//
// 2. Create a Sanity API token with write permissions for your project.
//    You can create one at https://www.sanity.io/manage/personal/tokens
//
// 3. Set the token as an environment variable named SANITY_API_TOKEN.
//    You can do this by creating a .env.local file in your project root with the following content:
//    SANITY_API_TOKEN="<your-token-here>"
//
// 4. Run the script from your terminal:
//    node fix_sanity_documents.js

import {createClient} from '@sanity/client';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: '00t6xfuz',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-05-23', // Use a recent API version
  useCdn: false,
});

async function fixCorruptedDocuments() {
  if (!process.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN === '<your-token-here>') {
    console.error('Error: SANITY_API_TOKEN is not set or is still the placeholder value.');
    console.error('Please add your token to the .env.local file and try again.');
    return;
  }

  console.log('Starting the document fix process...');

  // Step 1: Delete the corrupted documents and their drafts
  const corruptedDocumentIds = ['homePage', 'featuresPage', 'drafts.homePage', 'drafts.featuresPage'];
  console.log(`Attempting to delete the following documents: ${corruptedDocumentIds.join(', ')}`);

  for (const id of corruptedDocumentIds) {
    try {
      await client.delete(id);
      console.log(`- Successfully deleted document with ID: ${id}`);
    } catch (error) {
      if (error.statusCode === 404) {
        console.log(`- Document with ID: ${id} did not exist, skipping.`);
      } else {
        console.warn(`- Could not delete document with ID: ${id}. Reason:`, error.message);
      }
    }
  }

  // Step 2: Recreate the 'Home' page document
  console.log('\nAttempting to recreate the "Home" page document...');
  const homePageDocument = {
    _id: 'homePage',
    _type: 'homePage',
    seo: {
      metaTitle: 'Home',
      metaDescription: 'Welcome to the homepage.'
    },
    slug: {
      _type: 'slug',
      current: 'home'
    }
  };

  try {
    await client.createOrReplace(homePageDocument);
    console.log('Successfully created or replaced the "Home" page document.');
  } catch (error) {
    console.error('Error creating or replacing the "Home" page document:', error.message);
    return;
  }

  // Step 3: Recreate the 'Features' page document
  console.log('\nAttempting to recreate the "Features" page document...');
  const featuresPageDocument = {
    _id: 'featuresPage',
    _type: 'featuresPage',
    title: 'Features',
    slug: {
      _type: 'slug',
      current: 'features'
    }
  };

  try {
    await client.createOrReplace(featuresPageDocument);
    console.log('Successfully created or replaced the "Features" page document.');
  } catch (error) {
    console.error('Error creating or replacing the "Features" page document:', error.message);
    return;
  }

  console.log('\nDocument fix process completed successfully!');
  console.log('The new documents have been created and published.');
}

fixCorruptedDocuments().catch(error => {
  console.error('\nAn unexpected error occurred:', error);
});
