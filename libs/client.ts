import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  // ここで .env.local や Vercel の設定から値を引っ張ってきます
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});