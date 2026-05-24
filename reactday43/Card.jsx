function Card() {
  return (
    <div className="border rounded-2xl shadow-lg p-6 bg-white w-80 hover:scale-105 transition">
      
      <h2 className="text-2xl font-bold text-blue-600 mb-3">
        React + Tailwind
      </h2>

      <p className="text-gray-600 leading-relaxed">
        Tailwind CSS helps build responsive UI quickly.
      </p>

      <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Read More
      </button>

    </div>
  );
}

export default Card;