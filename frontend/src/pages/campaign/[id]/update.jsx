import { CampaignUpdateContainer } from "@/containers/campaign";
import { LayoutAdmin } from "@/components/layouts";
import Head from "next/head";

const CampaignUpdatePage = () => {
  return (
    <>
      <Head>
        <title>Update Campaign</title>
      </Head>
      <LayoutAdmin>
        <CampaignUpdateContainer />
      </LayoutAdmin>
    </>
  );
};

export default CampaignUpdatePage;
