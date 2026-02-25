const SubTitle = ({ src, icon, title, subTitle }) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        {src ? (
        <img
        src={src}
        alt={title}
        className="w-8 h-8 rounded-lg"
      />
    ):
    <span className="text-2xl">{icon}</span>
    }
      <div className="flex   justify-center flex-col">
        <h1 className="text-[#c9b99a]/80 text-lg font-bold">{title}</h1>
        <p className="text-gray-400">
          {subTitle}
        </p>
      </div>
      </div>
    </>
  );
};
export default SubTitle;
