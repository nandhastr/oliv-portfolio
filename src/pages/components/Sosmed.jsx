const Sosmed = ({href, title, icon}) => {
  return (
    <>
    
    <div className="flex justify-center items-center bg-[#c9b99a]/20 backdrop-blur-lg rounded-full p-4 hover:bg-[#c9b99a]/40 transition-all duration-300 group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 text-sm flex items-center gap-2"
      >
        <span className="text-2xl">
          {icon}
        </span>
      </a>
      <div className="group-hover:flex hidden absolute -top-10 left-1/2 transform -translate-x-1/2 transistion-all duration-700 bg-gray-700/20 backdrop-blur-lg rounded-lg p-2 text-[#c9b99a]">
        {title}
      </div>
    </div>
    </>
  );
};

export default Sosmed;
