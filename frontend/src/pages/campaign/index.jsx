import { CampaignListContainer } from "@/containers/campaign";
import { LayoutAdmin } from "@/components/layouts";
import Head from "next/head";

const CampaignListPage = () => {
  return (
    <>
      <Head>
        <title>Daftar Campaign</title>
      </Head>
      <LayoutAdmin>
        <CampaignListContainer />
      </LayoutAdmin>
    </>
  );
};

export default CampaignListPage;
