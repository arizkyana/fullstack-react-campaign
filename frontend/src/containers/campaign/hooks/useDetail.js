// @ts-nocheck
import useToast from "@/libraries/toast";
import { useEffect, useState } from "react";
import { CampaignService, UploadService } from "src/services";

const useDetail = (id) => {
  const [detail, setDetail] = useState();
  const [banner, setBanner] = useState();
  const { success } = useToast();

  const fetchDetailCampaign = async () => {
    try {
      const {
        data: { data },
      } = await CampaignService.getCampaign(id);
      setDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = async (fileName) => {
    try {
      const { data } = await UploadService.getImage(fileName);
      setBanner(URL.createObjectURL(data));
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const remove = async () => {
    const isConfirm = confirm("Apakah anda yakin akan menghapus campaign ini?");
    if (isConfirm) {
      try {
        await CampaignService.remove(id);
        success("Berhasil hapus campaign!");
      } catch (error) {
        console.log("error > ", error);
      }
    }
  };

  // fetch detail
  useEffect(() => {
    if (id) {
      fetchDetailCampaign();
    }
  }, [id]);

  // fetch banner
  useEffect(() => {
    if (detail) {
      getImage(detail.banner);
    }
  }, [detail]);

  return {
    detail,
    getImage,
    banner,
    remove,
  };
};

export default useDetail;
