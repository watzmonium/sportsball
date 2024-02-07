import OpenAI from 'openai';
import config from '../utils/config';

const openai = new OpenAI({
  apiKey: config.OPEN_API_KEY,
});

const queryOpenAPI = async (prompt: string): Promise<string> => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: prompt,
      },
    ],
    max_tokens: 150,
    model: 'gpt-3.5-turbo',
  });

  return String(completion.choices[0].message.content);
};

export default queryOpenAPI;

// https://platform.openai.com/docs/models/model-endpoint-compatibility
