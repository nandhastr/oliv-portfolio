import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex items-center justify-center bg-black text-[#c9b99a] p-2  border-t border-gray-700 relative">
      
        <p className="text-[10px]">&copy; 2023 Design by Nanda. Oliv Perdana Putri Portfolio</p>

      <button onClick={() => scrollToTop()} className="absolute right-4 bottom-10 md:bottom-4 bg-[#c9b99a]/20 backdrop-blur-lg rounded-full p-2 hover:bg-[#c9b99a]/40 transition-colors duration-300">
        <AiOutlineArrowUp className="text-2xl animate-bounce" />
      </button>
      
    </footer>
  );
};

export default Footer;