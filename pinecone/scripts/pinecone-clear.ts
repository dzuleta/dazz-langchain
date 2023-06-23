import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from 'langchain/embeddings';
import { PineconeStore } from 'langchain/vectorstores';
import { pinecone } from '@/utils/pinecone-client';
import { PDFLoader } from 'langchain/document_loaders';
import { PINECONE_INDEX_NAME, PINECONE_NAME_SPACE } from '@/config/pinecone';

/* Name of directory to retrieve files from. You can change this as required */

export const run = async () => {
  try {
    const list = await pinecone.listIndexes();
    console.log("index: ", list);
    
    if(list.length > 0) {
      const resDel = await pinecone.deleteIndex({
        indexName: PINECONE_INDEX_NAME,
      });
      console.log("resDel: ", resDel);
    }
    const resCreate = await pinecone.createIndex({
      createRequest: {
        name: PINECONE_INDEX_NAME,
        dimension: 1536,
        metric: "cosine"
      },
    });

    console.log("resCreate: ", resCreate);
    

    //embed the PDF documents

  } catch (error) {
    console.log('error de pinecone', error);
    throw new Error('Failed to retrieve your data ');
  }
};

(async () => {
  await run();
  console.log('clear complete');
})();
