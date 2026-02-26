
import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const projectId = '00t6xfuz';
const dataset = 'production';
const apiToken = process.env.SANITY_API_TOKEN;

async function resetContactDocument() {
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

  const idsToDelete = ['contact', 'drafts.contact'];

  console.log('Step 1: Deleting existing "contact" and "drafts.contact" documents...');
  try {
    const transaction = client.transaction();
    idsToDelete.forEach(id => transaction.delete(id));
    await transaction.commit();
    console.log('Successfully deleted old contact documents.');
  } catch (error) {
    console.error('An error occurred during deletion:', error.message);
    // We can continue even if deletion fails, as the document might not exist.
  }

  const contactDocument = {
    _id: 'contact',
    _type: 'page',
    title: 'Contact',
    slug: {
      _type: 'slug',
      current: 'contact',
    },
  };

  console.log('\nStep 2: Recreating the "Contact" document...');
  try {
    await client.create(contactDocument);
    console.log('Successfully recreated the "Contact" document!');
  } catch (error) {
    console.error('An error occurred while recreating the document:', error.message);
  }
}

resetContactDocument();
