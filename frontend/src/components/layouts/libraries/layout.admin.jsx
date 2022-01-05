import { UserCircleIcon } from "@heroicons/react/outline";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <nav className="shadow-md h-20 flex justify-end items-center pl-72 pr-3 fixed top-0 left-0 w-full bg-white">
        <div>
          <button
            type="button"
            className="border py-2 px-4 rounded-full inline-flex justify-start items-center text-sm font-semibold space-x-1"
          >
            <UserCircleIcon className="h-6 w-6" />
            <span className="inline-block">User</span>
          </button>
        </div>
      </nav>
      <aside className="h-screen absolute top-0 left-0 bottom-0 z-30 w-72 bg-gray-600 text-white">
        <div className="h-20 w-full  flex justify-center items-center bg-white ">
          <div className="font-bold text-gray-600">Campaign Admin</div>
        </div>
      </aside>
      <main className="ml-72 px-3 pt-28  min-h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;
