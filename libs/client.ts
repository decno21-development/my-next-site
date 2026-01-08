import { createClient } from 'microcms-js-sdk';

// 何を読み込んでいるかチェック（安全のため最初の3文字だけ出す）
console.log("DEBUG - Domain exists:", !!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);
console.log("DEBUG - API Key exists:", !!process.env.NEXT_PUBLIC_MICROCMS_API_KEY);

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || !process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error("Vercelの設定画面で環境変数が正しくセットされていません。Keyの名前を再確認してください。");
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
});