export default function ButtonBar() {
  return (
    <div className="text-center">
      <button
        className="w-20 h-10 m-6 p-2 rounded-xl bg-green-500 focus:outline-none">
        Check
      </button>

      <button
        className="w-20 h-10 m-6 p-2 rounded-xl bg-yellow-400 focus:outline-none ">
        Reset
      </button>
    </div>
  );
}
