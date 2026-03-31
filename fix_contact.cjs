require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '00t6xfuz',
  dataset: 'production',
  token: process.env.SANITY_STUDIO_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
});

const DOC_ID = 'contactPage';
const DRAFT_ID = `drafts.${DOC_ID}`;

async function fixContactDocument() {
  console.log(`Step 1: Deleting existing "${DOC_ID}" and "${DRAFT_ID}" documents...`);

  try {
    const trx = client.transaction();
    trx.delete(DOC_ID);
    trx.delete(DRAFT_ID);
    const result = await trx.commit();
    console.log('Successfully deleted old contact documents.', result);
  } catch (error) {
    console.log('Deletion step finished. It is okay if documents with those IDs did not exist.');
  }

  console.log('\nStep 2: Recreating the "Contact" document...');

  try {
    const newDoc = {
      _id: DOC_ID,
      _type: 'contactPage',
      title: 'Contact',
      slug: {
        _type: 'slug',
        current: 'contact',
      },
    };

    const createdDoc = await client.create(newDoc);
    console.log('Successfully recreated the "Contact" document!', createdDoc);
  } catch (error) {
    console.error('Failed to recreate the document:', error.message);
    throw error;
  }
}

fixContactDocument();
