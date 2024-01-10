import React from "react";

// Layout
import Layout from "../layouts/default";

// Components
import Seo from "../components/seo";

const ProyekPage = () => {
  return (
    <Layout>
      <Seo title="Proyek" />
      <div className="mx-auto lg:max-w-3xl px-4 lg:px-0 ">
        <h1 className="my-5 text-5xl leading-tight md:leading-normal ">
          Proyek
        </h1>
        <p className="my-5 text-xl leading-tight">
          Beberapa karya favorit saya.
        </p>
        <div className="mb-6 text-center text-2xl my-20">
          <p>
            <span role="img">🙏</span>Segera hadir.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ProyekPage;
