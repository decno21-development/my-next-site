import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  // もし環境変数が空なら、直接文字列を入れてしまう（テスト用）
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || 'd4szsda8hr',
  apiKey: process.env.MICROCMS_API_KEY || '2wZkbdMZdI2GGBg27I69NFN8g7wASDD5SqWR',
});