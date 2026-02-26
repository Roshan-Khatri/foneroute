
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '00t6xfuz',
  dataset: 'production',
  token: 'sktodSjSQmGwiIkXGeIXOjnDy5o4Jiq4EONAZ2o0R7BwPX9bSWU6AQR6tDeJaV13XDJNObP3OMUnhBs5Qhl7WDKqCoPcf8tSl3sRqKnJj5dCvpCZtBbfucR59pTfQPcldtWVy2mizWgqlgSZ4gco4JEfOzVXxlRXPTzn7JN6sBmdGt65LeuQ',
  useCdn: false,
  apiVersion: '2023-01-01'
});

async function deleteAllFoneRouteDocs() {
  try {
    const documents = await client.fetch('*[_type == "siteSettings" && title == "FoneRoute"] {_id, title}');

    if (documents.length === 0) {
      console.log('No "FoneRoute" documents found in siteSettings.');
      return;
    }

    console.log(`Found ${documents.length} "FoneRoute" documents. Deleting all of them...`);

    const idsToDelete = documents.map(doc => doc._id);

    if (idsToDelete.length === 0) {
        console.log("Nothing to delete.");
        return;
    }

    let transaction = client.transaction();
    idsToDelete.forEach(id => {
      transaction = transaction.delete(id);
    });

    await transaction.commit();
    console.log('Successfully deleted all \'FoneRoute\' documents.');
    console.log('Deleted document IDs:', idsToDelete);

  } catch (error) {
    console.error('Error deleting documents:', error);
    process.exit(1);
  }
}

deleteAllFoneRouteDocs();
