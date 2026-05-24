function ButtonGroup() {

  const btnStyle =
    "px-5 py-2 rounded-lg font-semibold text-white transition duration-300 active:scale-95";

  return (
    <div className="flex gap-4 flex-wrap mt-8">

      <button
        className={`${btnStyle} bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300`}
      >
        Primary
      </button>

      <button
        className={`${btnStyle} bg-green-500 hover:bg-green-700 focus:ring-2 focus:ring-green-300`}
      >
        Success
      </button>

      <button
        className={`${btnStyle} bg-red-500 hover:bg-red-700 focus:ring-2 focus:ring-red-300`}
      >
        Danger
      </button>

    </div>
  );
}

export default ButtonGroup;