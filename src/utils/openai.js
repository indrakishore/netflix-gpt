import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constants";
console.log("VALUE", OPENAI_API_KEY);
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
