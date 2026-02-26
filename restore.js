
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const projectId = '00t6xfuz';
const dataset = 'production';
const apiToken = process.env.SANITY_API_TOKEN;

async function restoreSolutionsDocument() {
  if (!apiToken || apiToken === '<your-token-here>') {
    console.error('Error: SANITY_API_TOKEN is not set in your .env.local file.');
    console.error('Please create a token and add it to .env.local before running this script.');
    return;
  }

  const client = createClient({
    projectId,
    dataset,
    token: apiToken,
    useCdn: false,
    apiVersion: '2023-05-03',
  });

  const solutionsDocument = {
    _id: 'solutions',
    _type: 'page',
    title: 'Solutions',
    slug: {
      _type: 'slug',
      current: 'solutions',
    },
  };

  try {
    console.log('Attempting to restore the "Solutions" document...');
    await client.createIfNotExists(solutionsDocument);
    console.log('Successfully restored the "Solutions" document!');
    console.log('Please restart your Sanity development server to see the changes.');
  } catch (error) {
    console.error('An error occurred while restoring the document:', error.message);
  }
}

restoreSolutionsDocument();
