import { Breadcrumb } from "@/components/breadcrumb";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import useValidation from "../hooks/useValidation";

const CampaignUpdateContainer = () => {
  const { query } = useRouter();
  const { id } = query;
  const pages = [
    { name: "Campaign", href: "/campaign", current: false },
    { name: "Ubah campaign", href: `/campaign/${id}/update`, current: false },
  ];
  const { initialValues, validationSchema } = useValidation();
  const handleOnSubmit = () => {};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleOnSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleBlur, handleChange, errors, values }) => (
        <Form className="">
          <div className="mb-6">
            <Breadcrumb pages={pages} />
            <h1 className="text-3xl font-bold">Ubah Campaign </h1>
          </div>
          <div className="flex justify-between items-start space-x-2">
            <div className="w-1/2  flex flex-col justify-start items-start space-y-4">
              <label
                htmlFor="judul"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Judul</span>
                <input
                  type="text"
                  name="judul"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Tuliskan judul campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.judul}
                />
              </label>

              <label
                htmlFor="deskripsi"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Deskripsi</span>
                <textarea
                  name="deskripsi"
                  className="py-2 px-1 w-full border rounded-lg resize-none"
                  placeholder="Tuliskan deskripsi campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.deskripsi}
                  rows={5}
                />
              </label>

              <label
                htmlFor="targetDonasi"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Target Donasi</span>
                <input
                  type="text"
                  name="targetDonasi"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Tuliskan jumlah target donasi campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.targetDonasi}
                />
              </label>

              <label
                htmlFor="tanggalAkhir"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Tanggal Akhir</span>
                <input
                  type="date"
                  name="tanggalAkhir"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Pilih tanggal akhir dari campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.judul}
                />
              </label>

              <label
                htmlFor="lokasi"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Lokasi</span>
                <input
                  type="text"
                  name="lokasi"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Tuliskan lokasi lengkap dari campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.judul}
                />
              </label>

              <label
                htmlFor="pic"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">PIC</span>
                <input
                  type="text"
                  name="pic"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Tuliskan nama penanggungjawab donasi"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.judul}
                />
              </label>
            </div>
            <div className="w-1/2  flex flex-col justify-start items-start space-y-4">
              <label
                htmlFor="judul"
                className="inline-flex flex-col justify-start items-start w-full"
              >
                <span className="inline-block mb-2">Upload foto</span>
                <input
                  type="file"
                  name="judul"
                  className="py-2 px-1 w-full border rounded-lg"
                  placeholder="Tuliskan judul campaign..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  defaultValue={values.judul}
                />
              </label>
            </div>
          </div>
          <div className="mt-6 space-x-2 text-right">
            <Link href="/campaign" passHref shallow>
              <button
                type="button"
                className="rounded-lg py-2 px-6 text-gray-600 bg-white font-semibold  hover:text-gray-700"
              >
                Batal
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-lg py-2 px-6 text-white font-semibold bg-blue-600 hover:bg-blue-700"
            >
              Ubah
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CampaignUpdateContainer;
