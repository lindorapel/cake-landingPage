import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" bg-softPink py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-1/3">
              <img src="" alt="Logo" />
              <p className="pt-5 indent-10">
                Afive Bakery menghadirkan beragam produk premium, memberikan
                pengalaman manis yang tak terlupakan dalam setiap kesempatan.
              </p>
            </div>
            <div className="w-1/3 ">
              <h5 className="font-bold">Kunjungi Kami di</h5>
              <p className="pt-5 indent-10">
                cibanteng proyek perumahan taman dramaga permai TDP 6 blok D-15
                No 9 kelurahan: cihideung udik kecamatan : ciampea kabupataen :
                bogor kode pos:16620 - Kecamatan Ciampea, Kota/Kab Bogor,
                Provinsi Jawa Barat
              </p>
            </div>
            <div className="w-1/4 ">
              <h5 className="font-bold">Follow Kami di</h5>
              <div className="pt-5 flex text-3xl gap-3">
                <a href="">
                  <FaYoutube />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaWhatsapp />
                </a>
                <a href="">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
