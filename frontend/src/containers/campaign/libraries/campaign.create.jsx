import { Breadcrumb } from "@/components/breadcrumb";
import { useFormik, getIn } from "formik";
import Link from "next/link";
import useValidation from "../hooks/useValidation";
import useFile from "../hooks/useFile";
import { CampaignService } from "src/services";

const pages = [
  { name: "Campaign", href: "/campaign", current: false },
  { name: "Buat campaign baru", href: "/campaign/create", current: false },
];

const CampaignCreateContainer = () => {
  const { initialValues, validationSchema } = useValidation();
  const { file, handleChangeFile, doUpload } = useFile();

  const handleOnSubmit = async (values) => {
    try {
      // upload banner
      const banner = await doUpload(file);

      // create campaign
      const payload = { ...values, banner };
      await CampaignService.create(payload);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  const { handleBlur, handleChange, values, errors, touched, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleOnSubmit,
    });

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="mb-6">
        <Breadcrumb pages={pages} />
        <h1 className="text-3xl font-bold">Buat Campaign Baru</h1>
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
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan judul campaign..."
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.judul}
            />
            <div className="h-9">
              {getIn(errors, "judul") && getIn(touched, "judul") && (
                <span className="text-red-600 text-xs">{errors.judul}</span>
              )}
            </div>
          </label>

          <label
            htmlFor="deskripsi"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Deskripsi</span>
            <textarea
              name="deskripsi"
              className="py-2 px-3 w-full border rounded-lg resize-none"
              placeholder="Tuliskan deskripsi campaign..."
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.deskripsi}
              rows={5}
            />
            <div className="h-9">
              {getIn(errors, "deskripsi") && getIn(touched, "deskripsi") && (
                <span className="text-red-600 text-xs">{errors.deskripsi}</span>
              )}
            </div>
          </label>
          <label
            htmlFor="targetDonasi"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Target Donasi</span>
            <input
              type="number"
              name="targetDonasi"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan jumlah target donasi campaign..."
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.targetDonasi}
            />
            <div className="h-9">
              {getIn(errors, "targetDonasi") &&
                getIn(touched, "targetDonasi") && (
                  <span className="text-red-600 text-xs">
                    {errors.targetDonasi}
                  </span>
                )}
            </div>
          </label>
          <label
            htmlFor="tanggalAkhir"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Tanggal Akhir</span>
            <input
              type="date"
              name="tanggalAkhir"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Pilih tanggal akhir dari campaign..."
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.tanggalAkhir}
            />
            <div className="h-9">
              {getIn(errors, "tanggalAkhir") &&
                getIn(touched, "tanggalAkhir") && (
                  <span className="text-red-600 text-xs">
                    {errors.tanggalAkhir}
                  </span>
                )}
            </div>
          </label>

          <label
            htmlFor="lokasi"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">Lokasi</span>
            <input
              type="text"
              name="lokasi"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan lokasi lengkap dari campaign..."
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.lokasi}
            />
            <div className="h-9">
              {getIn(errors, "lokasi") && getIn(touched, "lokasi") && (
                <span className="text-red-600 text-xs">{errors.lokasi}</span>
              )}
            </div>
          </label>

          <label
            htmlFor="pic"
            className="inline-flex flex-col justify-start items-start w-full"
          >
            <span className="inline-block mb-2">PIC</span>
            <input
              type="text"
              name="pic"
              className="py-2 px-3 w-full border rounded-lg"
              placeholder="Tuliskan nama penanggungjawab donasi"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.pic}
            />
            <div className="h-9">
              {getIn(errors, "pic") && getIn(touched, "pic") && (
                <span className="text-red-600 text-xs">{errors.pic}</span>
              )}
            </div>
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
              name="file"
              className="py-2 px-3 w-full border rounded-lg"
              onChange={(e) => handleChangeFile(e)}
              accept=".png, .jpg"
            />
          </label>
          {file && (
            <div className="h-72 border w-full bg-gray-100 p-3 rounded-lg">
              <img
                className="object-contain w-full h-full"
                src={URL.createObjectURL(file)}
              />
            </div>
          )}
          <div className="h-9">
            {getIn(errors, "file") && getIn(touched, "file") && (
              <span className="text-red-600 text-xs">{errors.file}</span>
            )}
          </div>
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
          Simpan
        </button>
      </div>
    </form>
  );
};

export default CampaignCreateContainer;
