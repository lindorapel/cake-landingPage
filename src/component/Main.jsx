import cardBg from "../images/cake1.png";
import browniesBg from "../images/brownies.png";
import cakeData from "../data/cakeList.json";
import cardbg2 from "../images/Vegan_Chocolate_Pie__No-Bake__-_From_My_Bowl-removebg-preview 1.png";
import chefBg from "../images/chef.png";
import toko from "../images/toko.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Main = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const bestSellerCakes = cakeData.filter((data) => data.bestSeller);

  return (
    <>
      <div className="">
        <section id="home" className="container mx-auto pt-20">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-5">
            <div
              className="flex flex-col gap-5 pt-5 md:pt-0"
              style={{ flex: "7" }}
            >
              <h1 className="text-6xl font-semibold text-darkPink">
                The Perfect Cake Every Time
              </h1>
              <p>
                Jelajahi keindahan rasa di dunia kue kami yang kaya akan variasi
                dan inovasi, temukan kelezatan tak terlupakan untuk setiap
                selera hanya di toko online kami!
              </p>
              <a
                href=""
                className="bg-darkPink rounded-full px-6 py-2 w-max text-white font-semibold"
              >
                Order Disini
              </a>
            </div>
            <div style={{ flex: "8" }}>
              <img src={browniesBg} alt="" />
            </div>

            {/* <div style={{ flex: "8" }}>
              <img src={cardBg} alt="" />
            </div> */}
          </div>
        </section>
        <section
          id="about"
          className=" bg bg-gradient-to-r from-softPink  mx-auto mt-14"
        >
          <div className="container mx-auto flex flex-col md:flex-row gap-14 py-8">
            <div style={{ flex: "1" }} className="w-full md:w-1 z-0">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2500}
                swipeable={true}
                draggable={true}
              >
                <div>
                  <img
                    src={toko}
                    alt=""
                    className="w-full h-72 object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <img
                    src={chefBg}
                    alt=""
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div>
                  <img
                    src={cardBg}
                    alt=""
                    className="w-full h-72 object-cover"
                  />
                </div>
                <div>Item 4</div>
              </Carousel>
            </div>

            <div
              style={{ flex: "1" }}
              className="flex flex-col gap-6 pt-5 md:pt-0 justify-center"
            >
              <h1 className="text-3xl font-semibold">Tentang Kami</h1>
              <p>
                Selamat datang di BMI Cake & Bakery! Kami adalah toko kue yang
                menyajikan berbagai pilihan kue berkualitas tinggi. Dengan
                dedikasi kami dalam menyajikan lezatnya hidangan kue, kami
                bangga menjadi bagian dari momen spesial Anda.
              </p>
            </div>
          </div>
        </section>
        <section id="best-seller" className="container mx-auto py-20">
          <h2 className="text-2xl text-center font-bold text-darkPink">
            Best Seller
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-10">
            {bestSellerCakes.map((data) => (
              <div className="" key={data.id}>
                <>
                  <img
                    className="object-cover rounded-xl"
                    src={data.image}
                    alt=""
                    style={{ aspectRatio: "3/2" }}
                  />
                  <p className="font-semibold pt-2">{data.name}</p>
                  <p className="font-bold ">
                    {data.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </>
              </div>
            ))}
          </div>
        </section>
        <section id="about " className="bg bg-gradient-to-l from-softPink ">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-14">
              <div style={{ flex: "5" }}>
                <img src={cardbg2} className=" my-6" />
              </div>
              <div
                style={{ flex: "6" }}
                className="flex flex-col gap-6 pt-5 md:pt-0 justify-center"
              >
                <h1 className="text-3xl font-semibold ">
                  Order Sekarang Juga Disini
                </h1>
                <p>
                  Untuk informasi lebih lanjut, silakan hubungi kami melalui
                  rincian kontak yang tertera. Kami siap memberikan bantuan dan
                  jawaban terbaik untuk kebutuhan Anda.
                </p>
                <a
                  href="https://wa.me/6289603941891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-darkPink rounded-full px-6 py-2 w-max text-white font-semibold"
                >
                  Order Sekarang Juga
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="our-menu" className="container mx-auto py-20">
          <h2 className="text-2xl text-center font-bold text-darkPink">Menu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 pt-10">
            {cakeData.map((data) => (
              <div className="" key={data.id}>
                <>
                  <img
                    className="object-cover rounded-xl"
                    src={data.image}
                    alt=""
                    style={{ aspectRatio: "3/2" }}
                  />
                  <p className="font-semibold pt-2">{data.name}</p>
                  <p className="font-bold ">
                    {data.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto w-full">
          <h1 className="text-3xl font-semibold text-center mb-6 ">
            Temukan Kami Di Sini
          </h1>
          <iframe
            className="w-full mb-20"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.558760219624!2d109.61129899999999!3d-7.403233999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjQnMTEuNiJTIDEwOcKwMzYnNDAuNyJF!5e0!3m2!1sid!2sid!4v1706259850880!5m2!1sid!2sid"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        {/* <section
          id="about"
          className=" bg bg-gradient-to-r from-softPink  mx-auto mt-14"
        >
          <div className="container mx-auto flex flex-col md:flex-row gap-14">
            <div style={{ flex: "1" }}>
              <img src={toko} alt="" />
            </div>
            <div
              style={{ flex: "1" }}
              className="flex flex-col gap-6 pt-5 md:pt-0 justify-center"
            >
              <h1 className="text-3xl font-semibold">Tentang Kami</h1>
              <p>
              Selamat datang di BMI Cake & Bakery! Kami adalah toko kue yang menyajikan berbagai pilihan kue berkualitas tinggi. Dengan dedikasi kami dalam menyajikan lezatnya hidangan kue, kami bangga menjadi bagian dari momen spesial Anda.
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Main;
