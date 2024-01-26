import { useState, useEffect } from "react";
import { Navbar } from "flowbite-react";
import logo from "../images/logo.png";


const Header = () => {
  const [activeLink, setActiveLink] = useState("about");

  // Function to handle scrolling
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop - sectionHeight * 0.3 &&
        scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.2
      ) {
        setActiveLink(section.getAttribute("id"));
      }
    });
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="mx-auto fixed w-full px-0 bg-white border-b-2">
          <div className="container w-full mx-auto">
            <Navbar fluid rounded>
              <Navbar.Brand
                className=" h-full"
              >
                <img
                  src={logo}
                  className="flex items-center h-full mr-3"
                  style={{ maxWidth: "150px", maxHeight: "50px" }}
                  alt="Flowbite React Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="p-2">
                <Navbar.Link
                  className={
                    activeLink === "home"
                      ? "flex items-center py-3 group active text-darkPink h-full font-bold"
                      : "flex items-center py-3 hover:text-slate-200 group h-full"
                  }
                  href="#home"
                >
                  Beranda
                </Navbar.Link>
                <Navbar.Link
                  href="#our-menu"
                  className={
                    activeLink === "our-menu"
                      ? "flex items-center py-3 group active text-darkPink h-full font-bold"
                      : "flex items-center py-3 hover:text-slate-200 group h-full"
                  }
                >
                  Menu
                </Navbar.Link>
                <Navbar.Link
                  className={
                    activeLink === "about"
                      ? "flex items-center py-3 group active text-darkPink h-full font-bold"
                      : "flex items-center py-3 hover:text-slate-200 group h-full"
                  }
                  href="#about"
                >
                  Tentang Kami
                </Navbar.Link>
                <Navbar.Link
                  href="#best-seller"
                  className={
                    activeLink === "best-seller"
                      ? "flex items-center py-3 group active text-darkPink h-full font-bold"
                      : "flex items-center py-3 hover:text-slate-200 group h-full"
                  }
                >
                  Best Seller
                </Navbar.Link>
               {/*  <a
                   href="https://wa.me/6289603941891"
                   target="_blank"
                   rel="noopener noreferrer"
                  className="bg-darkPink text-white py-2 px-4 rounded-full h-full"
                >
                  Kontak Kami
                </a> */}
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
