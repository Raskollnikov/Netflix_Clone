import OpenAI from "openai";
import { GPTKEY } from "../utils/constants";

const openAi = new OpenAI({
  apiKey: GPTKEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openAi;
