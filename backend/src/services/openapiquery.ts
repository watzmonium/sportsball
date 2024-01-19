import OpenAI from 'openai';
import config from '../utils/config';


const openai = new OpenAI({
  // organization: config.OPEN_API_ORG,
  apiKey: config.OPEN_API_KEY,
});

const queryOpenAPI = async (headline: string, body: string): Promise<string | null> => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `i'm creating a water cooler sports chat api and want you to parse the following headline and info 
                  to come up with a quick tidbit someone who knows nothing about sports can say to fit in.
                  Please format your answer as a JSON response with the data being the string that is the tidbit
                  as the key "data". Please make the response short (2 sentences max) and casual, in the voice of a middle-aged sports fan.

                 headline: ${headline}
                 
                 body: ${body}`,
      },
    ],
    max_tokens: 150,
    model: 'gpt-3.5-turbo',
  });
  console.log(completion);
  console.log(completion.choices[0]);
  console.log('type: ', typeof completion.choices[0]);
  return completion.choices[0].message.content;
};

export default queryOpenAPI;

// https://platform.openai.com/docs/models/model-endpoint-compatibility
