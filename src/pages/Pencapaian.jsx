import SubTitle from './components/subTitle';
import Title from './components/Title';
const Pencapaian = () => {
    return (
        <>
        <section className="flex flex-col gap-8 mb-16 md:mb-24 py-2  px-4 sm:px-6 lg:px-8 " id="pencapaian">
            <div className="text-center">
            <Title title="Pencapaian" subTitle="Penghargaan dan Prestasi" className="text-center w-fit mx-auto"/>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex gap-6 flex-col rounded-lg bg-gray-700/20 backdrop-blur-lg p-6 border border-gray-600 w-full">
                    <div className="flex  gap-4">
                        <div className="justify-center items-center rounded-[20px] bg-[#c9b99a]/60 backdrop-blur-lg p-4">
                            <span className="text-4xl ">👑</span>
                        </div>
                        <div className="flex   justify-center flex-col">
                            <h1 className="text-white text-xl font-bold">Pencapaian</h1>
                        <p className="text-gray-400">Pencapaian yang telah saya raih selama berkegiatan di pramuka</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🏆" title="Juara Lomba Pramuka Tingkat Kabupaten" subTitle="Tahun 2023" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="⭐" title="Peserta Aktif Jambore Nasional" subTitle="Tahun 2023" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🎖️" title="Duta Pramuka Sekolah" subTitle="Tahun 2023" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🥇" title="Finalis Kompetisi Baris-Berbaris" subTitle="Tahun 2023" />
                    </div>
                </div>
                
                <div className="flex gap-6 flex-col rounded-lg bg-gray-700/20 backdrop-blur-lg p-6 border border-gray-600 w-full">
                    <div className="flex  gap-4">
                        <div className="justify-center items-center rounded-[20px] bg-[#c9b99a]/60 backdrop-blur-lg p-4">
                            <span className="text-4xl ">🧠</span>
                        </div>
                        <div className="flex   justify-center flex-col">
                            <h1 className="text-white text-xl font-bold">Kompetensi</h1>
                        <p className="text-gray-400">Keterampilan & Karakter</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="👥" title="Kepemimpinan Visioner" subTitle="Memimpin dengan penuh tanggung jawab" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🤝" title="Kerja sama Tim" subTitle="Solid dan saling mendukung" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🎯" title="Fokus pada tujuan" subTitle="Tekun mengejar setiap prestasi" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <SubTitle src="" icon="🚀" title="Adaptasi Cepat" subTitle="Fleksibel mengahadapi tantangan" />
                    </div>
                </div>
                
            </div>
        </section>
        </>
    ) 
};

export default Pencapaian;