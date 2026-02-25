import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black  p-4 flex items-center justify-between mx-auto  text-[#c9b99a]">
      <h1 className="text-xl font-bold text-[#f8f5f2] pl-8">Portfolio</h1>

      {/* tampilan desktop */}
      <ul className="flex justify-center space-x-4 hidden md:flex px-8">
        <li>
          <a href="#tentang">Tentang</a>
        </li>
        <li>
          <a href="#pencapaian">Pencapaian</a>
        </li>
        <li>
          <a href="#kontak">Kontak</a>
        </li>
      </ul>

      {/* tombol hamburger */}
      <button className="md:hidden " onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* tampilan mobile */}
     
        <ul className={`absolute z-10 rounded-xl shadow-lg shadow-[#c9b99a]/50 right-0 w-50 bg-black flex flex-col items-center space-y-4 p-4 md:hidden transition-all duration-300 ${isOpen ? 'opacity-100 top-14' : 'opacity-0 top-12 pointer-events-none'}`}>
          <li>
            <a href="#tentang">Tentang</a>
          </li>
          <li>
            <a href="#pencapaian">Pencapaian</a>
          </li>
          <li>
            <a href="#kontak">Kontak</a>
          </li>
        </ul>
      
    </nav>
  );
};

export default Navbar;
