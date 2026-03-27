import Image from "next/image";
import { getNotionPageMarkdown } from "./lib/notion";
import MarkdownRenderer from "./components/MarkdownRenderer";

export default async function Home() {

  const content = await getNotionPageMarkdown("32f117a41d4d805fb82ac7e116d9311a");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-[80%]">
        <MarkdownRenderer content={content} />
      </main>
    </div>
  );
}
