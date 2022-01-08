import { useRouter } from "next/router";
import { toast } from "react-toastify";

const useToast = () => {
  const { back } = useRouter();

  // default on close is redirect to the last page
  const success = (message, onClose = () => back()) => {
    // show toast
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose,
    });
  };

  return {
    success,
  };
};

export default useToast;
