import { CampaignDetailContainer } from "@/containers/campaign";
import { LayoutAdmin } from "@/components/layouts";
import Head from "next/head";

const CampaignCreatePage = () => {
  return (
    <>
      <Head>
        <title>Detail Campaign</title>
      </Head>
      <LayoutAdmin>
        <CampaignDetailContainer />
      </LayoutAdmin>
    </>
  );
};

export default CampaignCreatePage;
