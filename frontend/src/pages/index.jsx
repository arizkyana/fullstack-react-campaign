import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Selamat datang - Kelas Fullstack NextJS + Express + MongoDB
        </title>
      </Head>
      <div className="mx-auto container min-h-screen flex justify-center items-center">
        <div className="py-4">
          <h1 className="text-3xl mt-3">Selamat datang di</h1>
          <h1 className="text-xl font-bold">
            Kelas Fullstack NextJS + Express + MongoDB
          </h1>
          <div className="my-3">
            <h2 className="text-lg font-semibold">Fitur : </h2>
            <ul className="list-disc text-base">
              <li>CRUD Campaign with Upload image</li>
              <li>User login and Authorized page</li>
              <li>Sample donatur web page (list of campaign)</li>
            </ul>
          </div>
          <div className="my-3">
            <h2 className="text-lg font-semibold mb-3">Teknologi </h2>
            <div className="flex justify-start items-center space-x-3">
              <div className="rounded-full py-3 px-6 bg-blue-200 text-blue-800">
                ReactJS (NextJS)
              </div>
              <div className="rounded-full py-3 px-6 bg-cyan-200 text-cyan-800">
                Tailwind CSS
              </div>
              <div className="rounded-full py-3 px-6 bg-purple-200 text-purple-800">
                ExpressJS (Backend REST API)
              </div>
              <div className="rounded-full py-3 px-6 bg-green-200 text-green-800">
                MongoDB (Database NoSQL)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
