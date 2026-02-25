import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {

  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });



  return (
    <footer className="flex items-center justify-center bg-black text-[#c9b99a] p-2  border-t border-gray-700 relative">
      
        <p className="text-[10px]">&copy; 2023 Design by Nanda. Olivia Pradana Putri Portfolio</p>

      <button 
      onClick={() => scrollToTop()} 
      className={`fixed right-4  bg-[#c9b99a]/20 backdrop-blur-lg rounded-full p-2 hover:bg-[#c9b99a]/40 cursor-pointer transition-all duration-700 
        ${showButton ? 'bottom-6 md:bottom-4 opacity-100' : 'bottom-[-100px] opacity-0 pointer-events-none'}
        `}>
          <AiOutlineArrowUp className="text-2xl animate-bounce" />
          
      </button>
      
    </footer>
  );
};

export default Footer;