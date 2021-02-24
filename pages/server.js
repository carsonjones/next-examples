import Head from 'next/head';
import Link from 'next/link';

const Page = ({ data }) => {
  console.log('data, client-side:', data);
  return (
    <>
      <Head>
        <title>{'Server'}</title>
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

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/random`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log('data, server-side:', data);

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Page;
