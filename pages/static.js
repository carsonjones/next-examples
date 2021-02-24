import Head from 'next/head';
import Link from 'next/link';

const Page = (data) => {
  console.log('data, client-side:', data);
  return (
    <>
      <Head>
        <title>{'Static'}</title>
      </Head>
      <pre>{JSON.stringify({ data }, null, 2)}</pre>
      <ul>
        <li><Link href="/client-swr">{"Client SWR"}</Link></li>
        <li><Link href="/server-swr">{"Server SWR"}</Link></li>
        <li><Link href="/static">{"Static"}</Link></li>
        <li><Link href="/server">{"Server"}</Link></li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      hello: 'from build'
    },
  }
}

export default Page;
