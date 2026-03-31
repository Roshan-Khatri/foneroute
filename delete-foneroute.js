
const { createClient } = require('@sanity/client');

// This function retrieves the dataset from the command-line arguments.
function getDataset() {
  const args = process.argv.slice(2);
  const datasetArg = args.find(arg => arg.startsWith('--dataset='));
  if (!datasetArg) {
    console.error('Error: Please specify the dataset using --dataset=<your-dataset-name>');
    console.error('For example: node delete-foneroute.js --dataset=development');
    process.exit(1);
  }
  return datasetArg.split('=')[1];
}

const dataset = getDataset();

const client = createClient({
  projectId: '00t6xfuz',
  dataset: dataset,
  token: 'sktodSjSQmGwiIkXGeIXOjnDy5o4Jiq4EONAZ2o0R7BwPX9bSWU6AQR6tDeJaV13XDJNObP3OMUnhBs5Qhl7WDKqCoPcf8tSl3sRqKnJj5dCvpCZtBbfucR59pTfQPcldtWVy2mizWgqlgSZ4gco4JEfOzVXxlRXPTzn7JN6sBmdGt65LeuQ',
  useCdn: false,
  apiVersion: '2023-01-01'
});

async function deleteAllFoneRouteDocs() {
  try {
    console.log(`Searching for "FoneRoute" documents in the '${dataset}' dataset...`);
    const documents = await client.fetch('*[_type == "siteSettings" && title == "FoneRoute"] {_id, title}');

    if (documents.length === 0) {
      console.log('No "FoneRoute" documents found to delete.');
      return;
    }

    console.log(`Found ${documents.length} "FoneRoute" document(s). Deleting...`);

    const idsToDelete = documents.map(doc => doc._id);
    let transaction = client.transaction();
    idsToDelete.forEach(id => {
      transaction = transaction.delete(id);
    });

    await transaction.commit();
    console.log(`Successfully deleted ${idsToDelete.length} document(s).`);

  } catch (error) {
    console.error('Error deleting documents:', error);
    process.exit(1);
  }
}

deleteAllFoneRouteDocs();
