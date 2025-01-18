import OpenAI from 'openai';
import { openapikey } from './Constants';

const openai = new OpenAI({
  apiKey: openapikey,
  dangerouslyAllowBrowser: true,
   // defaults to process.env["OPENAI_API_KEY"]
});

export default openai