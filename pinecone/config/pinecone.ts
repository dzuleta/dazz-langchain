/**
 * Change the index and namespace to your own
 */
if (!process.env.PINECONE_INDEX_NAME) {
    throw new Error('Missing Pinecone index name in .env file');
  }

const PINECONE_INDEX_NAME = 'langchainjsfundamentals';

const PINECONE_NAME_SPACE = 'dzuleta-pdf-test'; //namespace is optional for your vectors

export { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE };