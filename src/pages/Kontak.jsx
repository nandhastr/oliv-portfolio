import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTikTok } from "react-icons/ai";
import Card from "./components/Card";
import Title from "./components/Title"
import Sosmed from "./components/Sosmed";

const Kontak = () => {
    return (
        <>
        <section className="flex flex-col gap-8 mb-16 mb-24 py-2  px-4 sm:px-6 lg:px-8 " id="kontak">
            <div className="text-center  ">
            <Title title="Kontak" subTitle="Mari Berkolaborasi" className="text-center w-fit mx-auto"/>
            <p className="text-gray-400 w-[50%] mx-auto">
                Tertarik untuk bekerja sama dalam suatu proyek atau ingin mengetahui lebih banyak tentang pengalaman pramuka saya? Silakan hubungi melalui saluran berikut.
            </p>
            </div>

                <div className="flex flex-col md:flex-row  justify-around gap-6 md:w-[50%]">
                    <Card icon="📧" title="Email" desc="hai@example.com" className="text-md md:text-sm"/>
                    <Card icon="📞" title="Telepon" desc="+628123456789" className="text-md md:text-sm" />
                    <Card icon="📍" title="Alamat" desc="Kp. Ciawitali Rt 03/10 Desa Gn. Picung Kec. Pamijahan Kab. Bogor" className="text-md md:text-[10px] text-center" />
                </div>
                
            <div className="flex items-center justify-center gap-4">
                <div className="flex justify-around gap-6 md:w-[20%]">
                    <Sosmed href="" title="Facebook" icon={<AiOutlineFacebook />} />
                    <Sosmed href="" title="Instagram" icon={<AiOutlineInstagram />} />
                    <Sosmed href="" title="TikTok" icon={<AiOutlineTikTok />} />
                </div>
            </div>

            </section>
        </>
    )
};

export default Kontak;