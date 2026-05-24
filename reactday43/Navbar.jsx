function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <h1 className="text-2xl font-bold">
          MyWebsite
        </h1>

        <ul className="flex flex-col md:flex-row gap-4">

          <li className="hover:text-yellow-400 cursor-pointer">
            Home
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            About
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Services
          </li>

          <li className="hover:text-yellow-400 cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;