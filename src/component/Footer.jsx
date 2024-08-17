import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-softPink py-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
            <div className="md:w-1/3">
              <img
                src={logo}
                alt="Logo"
                style={{ maxWidth: "100px", maxHeight: "80px" }}
              />
              <p className="pt-5">
                BMI Cake & Bakery menghadirkan beragam produk premium,
                memberikan pengalaman manis yang tak terlupakan dalam setiap
                kesempatan.
              </p>
            </div>
            <div className="md:w-1/3 ">
              <h5 className="font-bold">Kunjungi Kami di</h5>
              <p className="pt-2.5 md:pt-5">
                Desa Binorong RT 002 / RW 002 Kecamatan Bawang Kabupaten
                Banjarnegara
              </p>
            </div>
            <div className="md:w-1/4 ">
              <h5 className="font-bold">Follow Kami di</h5>
              <div className="pt-2.5 md:pt-5 flex text-3xl gap-3">
                {/* <a href="">
                  <FaYoutube />
                </a> */}
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaFacebook />
                </a>
                {/* <a href="">
                  <FaTwitter />
                </a> */}
                {/* <a href="">
                  <FaWhatsapp />
                </a> */}
                {/* <a href="">
                  <FaTiktok />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
