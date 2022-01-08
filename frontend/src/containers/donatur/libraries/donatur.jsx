import { getCurrency } from "@/helpers/text";

// campaigns props is an initializer
const DonaturContainer = ({ campaigns }) => {
  const renderCampaigns = () => {
    return (
      campaigns &&
      campaigns.length > 0 &&
      campaigns.map((item) => (
        <div
          className="border rounded-lg flex flex-col justify-between items-start p-3"
          key={item._id}
        >
          <div className="bg-gray-100 h-64 w-full rounded-lg">
            <img
              className="object-contain h-full border-0"
              src={`${process.env.NEXT_PUBLIC_API_URL}/image?fileName=${item.banner}`}
              alt={item.banner}
            />
          </div>
          <div className="break-words whitespace-pre-line my-3 space-y-3 w-full">
            <h1 className="text-lg font-bold text-gray-700">{item.judul}</h1>
            <div className="flex justify-between items-center text-xs">
              <div>
                <div>Target Donasi</div>
                <div className="font-bold">
                  Rp. {getCurrency(item.targetDonasi)}
                </div>
              </div>
              <div className="text-right">
                <div>Tanggal Akhir</div>
                <div>{item.tanggalAkhir}</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <button
              type="button"
              className="w-full h-10 px-6 rounded-lg bg-green-500 text-white text-sm font-bold"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      ))
    );
  };
  return (
    <div className="mx-auto max-w-5xl min-h-screen pt-6 pb-16">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Ayo Bantu Saudara Kita</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-5 lg:px-0 px-3">
        {renderCampaigns()}
      </section>
    </div>
  );
};

export default DonaturContainer;
