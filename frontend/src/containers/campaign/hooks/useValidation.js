import * as Yup from "yup";

const useValidation = () => {
  const initialValues = {
    judul: "",
    deskripsi: "",
    targetDonasi: "",
    tanggalAkhir: "",
    lokasi: "",
    pic: "",
  };

  const validationSchema = Yup.object().shape({
    judul: Yup.string().required(),
    deskripsi: Yup.string().required().min(50),
    targetDonasi: Yup.number().required().min(100000),
    tanggalAkhir: Yup.string().required(),
    lokasi: Yup.string().required(),
    pic: Yup.string().required(),
  });

  return {
    initialValues,
    validationSchema,
  };
};

export default useValidation;
