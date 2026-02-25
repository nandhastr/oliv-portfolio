 const Title = ({ title, subTitle, className }) => {
  return (
    <div>
      <div className={`flex items-center gap-4 mb-4 ${className}`}>
      <h6 className="  px-4 py-2 rounded-full   bg-[#c9b99a]/20 text-[#c9b99a] text-sm font-bold ">{title}</h6>
      </div>
        <p className="text-white text-3xl md:text-5xl font-bold mb-4">
          {subTitle}
        </p>
    </div>
  );
};

export default Title;