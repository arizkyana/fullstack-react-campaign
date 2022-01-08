// @ts-nocheck
import { Breadcrumb } from "@/components/breadcrumb";
import { getCurrency } from "@/helpers/text";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import useDetail from "../hooks/useDetail";
import useValidation from "../hooks/useValidation";

const CampaignDetailContainer = () => {
  const { query } = useRouter();
  const { id } = query;

  const pages = [
    { name: "Campaign", href: "/campaign", current: false },
    { name: "Detail campaign", href: `/campaign/${id}`, current: false },
  ];

  const { detail, banner, remove } = useDetail(id);

  const { initialValues, validationSchema } = useValidation();
  const handleOnSubmit = () => {};

  return (
    <div>
      <div className="mb-6">
        <Breadcrumb pages={pages} />
        <h1 className="text-3xl font-bold">Detail Campaign</h1>
      </div>
      {detail && (
        <div className="flex justify-between items-start space-x-2">
          <div className="w-1/2  flex flex-col justify-start items-start space-y-4">
            <label
              htmlFor="judul"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Judul</span>
              {detail.judul}
            </label>

            <label
              htmlFor="deskripsi"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Deskripsi</span>
              {detail.deskripsi}
            </label>

            <label
              htmlFor="targetDonasi"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Target Donasi</span>
              {getCurrency(detail.targetDonasi)}
            </label>

            <label
              htmlFor="tanggalAkhir"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Tanggal Akhir</span>
              {detail.tanggalAkhir}
            </label>

            <label
              htmlFor="lokasi"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Lokasi</span>
              {detail.lokasi}
            </label>

            <label
              htmlFor="pic"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">PIC</span>
              {detail.pic}
            </label>
          </div>
          <div className="w-1/2  flex flex-col justify-start items-start space-y-4">
            <label
              htmlFor="judul"
              className="inline-flex flex-col justify-start items-start w-full"
            >
              <span className="inline-block mb-2 font-bold">Banner</span>
            </label>
            {banner && (
              <>
                <div className="h-72 border w-full bg-gray-100 p-3 rounded-lg">
                  <img className="object-contain w-full h-full" src={banner} />
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-red-600 hover:bg-red-700 font-bold text-sm text-white px-6 h-10"
                  onClick={() => remove()}
                >
                  Hapus
                </button>
                <div className="text-xs text-gray-600">
                  Campaign yang sudah dihapus tidak dapat dikembalikan lagi
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetailContainer;
