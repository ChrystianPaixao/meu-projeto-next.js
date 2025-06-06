import Head from "next/head";

export default function heade({ title = "Heatshoes", icone = "/logo.png" }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href={icone} />
    </Head>
  );
}
