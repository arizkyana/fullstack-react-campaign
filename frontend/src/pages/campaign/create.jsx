import { CampaignCreateContainer } from "@/containers/campaign";
import { LayoutAdmin } from "@/components/layouts";
import Head from "next/head";

const CampaignCreatePage = () => {
  return (
    <>
      <Head>
        <title>Buat Campaign</title>
      </Head>
      <LayoutAdmin>
        <CampaignCreateContainer />
      </LayoutAdmin>
    </>
  );
};

export default CampaignCreatePage;
