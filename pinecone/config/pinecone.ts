/**
 * Change the index and namespace to your own
 */
if (!process.env.PINECONE_INDEX_NAME) {
    throw new Error('Missing Pinecone index name in .env file');
  }

const PINECONE_INDEX_NAME = 'langchainjsfundamentals';

export { PINECONE_INDEX_NAME };