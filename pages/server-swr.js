import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Page = (props) => {
  const { data, error } = useSWR('/api/random', fetcher, { initialData: props })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log('data, client-side:', data);
  return (
    <>
      <Head>
        <title>{'Server SWR'}</title>
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
  const data = await fetcher(`http://localhost:3000/api/random`);

  if (!data) {
    return {
      notFound: true,
    }
  }

  console.log('data, server-side:', data);

  return {
    props: { ...data },
  }
}

export default Page;
