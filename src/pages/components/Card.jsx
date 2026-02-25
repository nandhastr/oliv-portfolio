const Card = ({ icon, title, desc, className }) => {
  return (
    <div className="w-full flex flex-col  items-center gap-4 justify-center bg-gray-700/20 backdrop-blur-lg rounded-xl p-4 ">
      <div className="bg-[#c9b99a]/20 backdrop-blur-lg rounded-xl p-4 ">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className={`text-[#c9b99a] ${className}`}>{desc}</p>
    </div>
  );
};

export default Card;
