import "../index.css";
export default function DropElement() {
  return (
    <>
      <div className="w-4/12 mt-16 grid grid-row-3 gap-2 py-4">
       
        <div className=" my-2 rounded-xl bg-white flex items-center gap-3 p-3 shadow-slate-400 shadow-md border-2 border-slate-200">
            <div className="w-1/6 text-center bg-blue-600 text-white px-4 py-2 rounded-lg">
              Source
          </div>
          <div className="w-full font-bold text-gray-300 text-4xl text-center "> Drags items here...</div>
        </div>

        <div className=" my-2 rounded-xl bg-white flex items-center gap-3 p-3 shadow-slate-400 shadow-md border-2 border-slate-200">
            <div className="w-1/6 text-center bg-blue-600 text-white px-4 py-2 rounded-lg">
              Path
          </div>
          <div className="w-full font-bold text-gray-300 text-4xl text-center "> Drags items here...</div>
        </div>

        <div className=" my-2 rounded-xl bg-white flex items-center gap-3 p-3 shadow-slate-400 shadow-md border-2 border-slate-200">
            <div className="w-1/6 text-center bg-blue-600 text-white px-4 py-2 rounded-lg">
              Load
          </div>
          <div className="w-full font-bold text-gray-300 text-4xl text-center "> Drags items here...</div>
        </div>

      </div>
    </>
  );
}
