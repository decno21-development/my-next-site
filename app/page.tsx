import { client } from "@/libs/client";

export default async function Home() {
  // microCMSからニュースデータを取得する
  const data = await client.get({ endpoint: "news" });

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        ニュース一覧
      </h1>
      <ul>
        {data.contents.map((news: any) => (
          <li key={news.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <h2 style={{ fontSize: "1.2rem" }}>{news.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: `${news.content}`,
              }}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}