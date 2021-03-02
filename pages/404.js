import Layout from 'components/Layout';

function Page404() {
  return (
    <Layout center>
      <div className="flex items-center">
        <div className="font-thin text-3xl p-4 tracking-widest text-gray-500">404</div>
        <div className="border-l h-16" />
        <div className="font-light p-4">This page could not be found.</div>
      </div>
    </Layout>
  );
}

export default Page404;
