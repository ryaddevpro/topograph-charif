export default function Card({ tabs }) {
  return (
    <>
      {tabs.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:bg-gray-200 transition duration-300"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.icon} </div>
              <p className="text-gray-700 text-base">{item.label}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
