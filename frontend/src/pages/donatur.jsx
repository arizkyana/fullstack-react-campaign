import { DonaturContainer } from "@/containers/donatur";
import Head from "next/head";
import { CampaignService } from "src/services";

const Donatur = ({ data }) => {
  return (
    <>
      <Head>
        <title>Donatur</title>
      </Head>
      <DonaturContainer campaigns={data} />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const {
      data: { data },
    } = await CampaignService.loadCampaign({
      limit: 10,
      offset: 0,
    });
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Donatur;
