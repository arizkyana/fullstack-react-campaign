import { UserCircleIcon, LogoutIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayoutAdmin = ({ children }) => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!token) window.location.href = "/login";
    setTimeout(() => {
      setMounted(true);
    }, 150);
  }, [token]);

  const handleLogout = () => {
    const confirms = confirm(
      "Apakah anda yakin akan keluar dari aplikasi ini?"
    );
    if (confirms) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      return;
    }
  };

  if (mounted) {
    return (
      <>
        <nav className="shadow-md h-16  fixed top-0 left-0 w-full bg-white">
          <div className="max-w-5xl mx-auto h-full">
            <div className="w-full flex justify-between items-center h-full">
              <div>
                <h1 className="text-xl font-semibold">Campaign Management</h1>
              </div>
              <div>
                <button
                  type="button"
                  className="border bg-red-600 text-white hover:bg-red-700 py-2 px-4 rounded-full inline-flex justify-start items-center text-sm font-semibold space-x-1"
                  onClick={() => handleLogout()}
                >
                  <LogoutIcon className="h-6 w-6" />
                  <span className="inline-block">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-28 min-h-screen max-w-5xl mx-auto pb-16">
          {children}
        </main>
        <ToastContainer />
      </>
    );
  }

  return <div className="mx-auto max-w-5xl h-screen p-3">Loading...</div>;
};

export default LayoutAdmin;
