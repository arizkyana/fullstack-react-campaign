import { useCampaignDispatcher } from "@/redux/reducers/campaign/campaign";
import { Fragment } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { getCurrency } from "@/helpers/text";

const pages = [{ name: "Campaign", href: "/campaign", current: false }];

const CampaignListContainer = () => {
  const { campaigns } = useCampaignDispatcher();

  const renderCampaigns = () => {
    return (
      campaigns.length > 0 &&
      campaigns.map((item, index) => (
        <tr
          key={item._id}
          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {item.judul}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {getCurrency(item.targetDonasi)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {item.lokasi}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {item.pic}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link href={`/campaign/${item.slug}/update`} shallow passHref>
              <a className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </Link>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <Link href={`/campaign/${item.slug}`} shallow passHref>
              <a className="text-indigo-600 hover:text-indigo-900">View</a>
            </Link>
          </td>
        </tr>
      ))
    );
  };

  return (
    <Fragment>
      <Breadcrumb pages={pages} />
      <div className="mb-6 flex justify-between items-center h-10">
        <h1 className="text-2xl font-bold">Daftar Campaign</h1>
        <Link href="/campaign/create" passHref shallow>
          <a className="h-full text-sm inline-flex justify-center items-center px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold">
            Buat baru
          </a>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Judul
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Target Donasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Lokasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      PIC
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>
                <tbody>{renderCampaigns()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignListContainer;
