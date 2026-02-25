import Title from "./components/Title";

const About = () => {
  return (
    <>
      <section className="grid md:grid-cols-[1fr_1fr] gap-8 mb-16 md:mb-24 py-2  px-4 sm:px-6 lg:px-8 " id="tentang">
        <div className="flex items-center justify-center bg-gray-700/20 backdrop-blur-lg rounded-xl p-6 relative">
          <div className="absolute rounded-full w-30 h-30 bg-[#d4a574]/40 blur-md right-0 top-0"></div>
          <div className="absolute rounded-full w-30 h-30 bg-[#c9b99a]/40 blur-md left-0 bottom-0"></div>
          <div className="flex items-center justify-center bg-[#c9b99a]/20 backdrop-blur-lg rounded-full w-60 h-60 ">
            <img
              src="/images/oliv.jpg"
              alt=""
              className=" w-50 h-50 rounded-full object-cover "
            />
          </div>
          <div className="flex gap-4 text-[#c9b99a] justify-center items-center absolute bottom-[-3rem] md:bottom-4 right-4 border-[#c9b99a] border-2 px-4 py-2 rounded-xl bg-[#d4a574]/20 backdrop-blur-md">
            <span class="text-xl">✨</span>
            <div className="flex flex-col">
              <div className="flex gap-2">1+ Tahun</div>
              <span>Pengalaman</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <Title title="Tentang Saya" subTitle="Pemimpin Muda Berbakat" />
          <p className="text-gray-400">
            Saya adalah seorang siswa SMK yang berdedikasi dengan passion tinggi
            di kepramukaan. Melalui berbagai kegiatan dan lomba yang saya ikuti,
            saya terus mengasah kepemimpinan, kerja sama tim, dan kemampuan
            menghadapi tantangan. Setiap kompetisi adalah kesempatan untuk
            belajar dan berkembang menjadi yang terbaik.
          </p>
          <div className="flex md:flex-row flex-col gap-4 items-center justify-around ">
            <div className="text-center rounded-lg bg-gray-700/20 backdrop-blur-lg p-4 border border-gray-600 w-full">
              <span className="text-[#c9b99a] text-3xl md:text-xl">
                15 <span className="text-[2rem]">+</span>
              </span>
              <p className="text-[#c9b99a]/50">Lomba Diikuti</p>
            </div>
            <div className="text-center rounded-lg bg-gray-700/20 backdrop-blur-lg p-4 border border-gray-600 w-full">
              <span className="text-[#c9b99a] text-3xl md:text-xl">
                20 <span className="text-[2rem]">+</span>
              </span>
              <p className="text-[#c9b99a]/50">Penghargaan</p>
            </div>
            <div className="text-center rounded-lg bg-gray-700/20 backdrop-blur-lg p-4 border border-gray-600 w-full">
              <span className="text-[#c9b99a] text-3xl md:text-xl">
                2 <span className="text-[2rem]">+</span>
              </span>
              <p className="text-[#c9b99a]/50">Tahun Pramuka</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
