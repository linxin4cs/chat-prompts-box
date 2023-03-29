import Head from "next/head";
import PromptPanel from "../components/promptPanel.js";
import axios from "axios";

export default function Home({ prompts }) {
  return (
    <>
      <Head>
        <title>ChatGPT中文Prompts</title>
        <meta
          name="description"
          content="在本站点上搜索适合的ChatGPT Prompts"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="m-auto  h-screen max-w-md overflow-hidden bg-white py-0">
        <PromptPanel prompts={prompts} /> 
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://datasets-server.huggingface.co/first-rows?dataset=fka%2Fawesome-chatgpt-prompts&config=fka--awesome-chatgpt-prompts&split=train"
  );

  const prompts = res.data.rows.map((data) => {
    const prompt = {
      id: data.row.act,
      title: data.row.act,
      content: data.row.prompt,
    };

    return prompt;
  });

  return {
    props: {
      prompts,
    },
  };
}
