import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>LittleBigAdventure</title>
        <meta name="description" content="LittleBigAdventure community website" />
      </Head>
      <main>
        <h1>LittleBigAdventure</h1>
        <p>Next.js + Supabase + Prisma is connected and ready.</p>
        <a href="/api/health">Test server</a>
        <br />
        <a href="/api/db-test">Test database</a>
      </main>
    </>
  );
}
