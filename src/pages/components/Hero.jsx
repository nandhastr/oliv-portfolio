const Hero = () => {
  return (
    <section className=" py-16 mx-auto md:mb-24  px-4 sm:px-6 lg:px-8  relative">
      {/* Decorative Elements */}
        <div className=" absolute  bg-[#c9b99a] rounded-full w-40 h-40 md:w-96 md:h-96 opacity-30 top-0 right-10 blur-2xl z-[-1]"></div>
        <div className=" absolute bg-[#d4a574] rounded-full w-40 h-40 md:w-96 md:h-96 bottom-20 md:bottom-[-100px] left-20 opacity-62 blur-2xl z-[-1]"></div>

        <div className="items-center justify-center text-center max-w-2xl mx-auto">
            <div className="bg-[#c9b99a]/20 backdrop-blur-lg inline-block px-4 py-2 rounded-full mb-4">
            <h1 className="opacity-100 text-[#d4a574] text-sm ">
                👋 halo, Selamat Datang Di Portfolio Saya
            </h1>
            </div>
            <h1 className="text-[40px] m:text-[60px] font-bold text-[#fff] ">
            Olivia Pradana Putri
            </h1>
            <p className="text-lg text-[#d4a574] mb-6">
            Siswa SMK & Pemimpin Pramuka
            </p>
            <p className="text-base text-gray-400 mb-10">
            Aktif di dunia kepramukaan dengan semangat tinggi mengikuti berbagai
            lomba dan kompetisi. Terus berkembang menjadi pemimpin yang
            inspiratif.
            </p>

            <div className="flex justify-center gap-2">
                <a
            href="#kontak"
            className="inline-block bg-[#d4a574] text-gray-700 px-6 py-3 rounded-full hover:bg-[#c9b99a] transition duration-300"
            >
            Hubungi Saya
            </a>
        <a
    href="#tentang"
    className="inline-block bg-[#d4a574]/20 backdrop-blur-lg border border-[#d4a574]/70 text-white px-6 py-3 rounded-full hover:bg-[#c9b99a]/70 transition duration-300"
    >
    Pelajari Lebih Lanjut
    </a>

            </div>
        </div>
    </section>
  );
};

export default Hero;
