import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div id="navbar">
        <div id="navbar-logo">
          <Image alt="" src={"/img/elife_logo.png"} width={140} height={70} />
        </div>
        <div id="navbar-link">
          <ul>
            <li>
              <Link
                href={{
                  pathname: `/`,
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: `/products`,
                }}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: `/`,
                }}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: `/`,
                }}
              >
                About
              </Link>
            </li>
          </ul>
          <button className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <span>1</span>
          </button>
          <button className="blue-button">Shop Now</button>
        </div>
      </div>
    </nav>
  );
}
