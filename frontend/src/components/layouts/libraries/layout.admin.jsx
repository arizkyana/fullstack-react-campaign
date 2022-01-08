import { UserCircleIcon } from "@heroicons/react/outline";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <nav className="shadow-md h-16  fixed top-0 left-0 w-full bg-white">
        <div className="max-w-5xl mx-auto h-full">
          <div className="w-full flex justify-between items-center h-full">
            <div>
              <h1 className="text-xl font-semibold">Campaign Management</h1>
            </div>
            <div>
              <button
                type="button"
                className="border py-2 px-4 rounded-full inline-flex justify-start items-center text-sm font-semibold space-x-1"
              >
                <UserCircleIcon className="h-6 w-6" />
                <span className="inline-block">User</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-28 min-h-screen max-w-5xl mx-auto pb-16">
        {children}
      </main>
    </div>
  );
};

export default LayoutAdmin;
