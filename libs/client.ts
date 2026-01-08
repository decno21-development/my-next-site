import { createClient } from 'microcms-js-sdk';

// 環境変数が読み込めているかチェック
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  // どちらかが足りない場合、ビルドを止めて理由を表示する
  throw new Error(`環境変数が足りません。Domain: ${serviceDomain ? 'OK' : 'MISSING'}, API_KEY: ${apiKey ? 'OK' : 'MISSING'}`);
}

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});