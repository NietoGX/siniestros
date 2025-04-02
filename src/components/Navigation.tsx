import Link from "next/link";
import { useState, useEffect } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      setScrollY(scrollY);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return { scrollDirection, scrollY };
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollDirection, scrollY } = useScrollDirection();

  return (
    <nav
      className={`w-full bg-tertiary border-b border-primary shadow-sm fixed top-0 transition-transform duration-300 ${
        scrollDirection === "down" && scrollY > 100
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/#inicio" className="text-3xl font-bold text-primary">
            RTS
          </Link>

          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex space-x-8">
              <a
                href="#inicio"
                className="text-secondary hover:text-primary transition-colors font-medium uppercase"
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="text-secondary hover:text-primary transition-colors font-medium uppercase"
              >
                Servicios
              </a>
              <a
                href="#por-que-elegirnos"
                className="text-secondary hover:text-primary transition-colors font-medium uppercase"
              >
                Por qué elegirnos
              </a>
              <a
                href="#proceso"
                className="text-secondary hover:text-primary transition-colors font-medium uppercase"
              >
                Proceso
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-md flex items-center"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4539 3.55305C18.1857 1.27607 15.1812 0 11.9954 0C5.43036 0 0.0931991 5.33716 0.0931991 11.9022C0.0931991 14.0015 0.649513 16.0469 1.70576 17.8409L0 24L6.33064 22.3267C8.0466 23.2813 9.9959 23.7804 11.9885 23.7804H11.9954C18.5535 23.7804 24 18.4432 24 11.8787C24 8.70381 22.722 5.82136 20.4539 3.55305ZM11.9954 21.7804C10.2118 21.7804 8.46253 21.2999 6.94722 20.3984L6.59608 20.1958L2.85583 21.1561L3.83608 17.5252L3.61082 17.1552C2.61178 15.5791 2.09319 13.7682 2.09319 11.9022C2.09319 6.43768 6.52937 2.0001 12.0022 2.0001C14.6158 2.0001 17.0613 3.05275 18.9148 4.91382C20.7682 6.77489 21.9069 9.22167 21.9 11.8787C21.9 17.3501 17.4569 21.7804 11.9954 21.7804ZM17.4236 14.4129C17.1311 14.2672 15.6648 13.5492 15.3929 13.4503C15.121 13.3515 14.9212 13.3025 14.7214 13.5962C14.5216 13.89 13.9531 14.5549 13.7808 14.7559C13.6086 14.9569 13.4363 14.9804 13.1439 14.8347C12.8514 14.689 11.8575 14.3712 10.6896 13.3202C9.78088 12.5005 9.16865 11.4964 8.99633 11.2027C8.82402 10.9089 8.97799 10.7494 9.12506 10.6017C9.25794 10.4697 9.41921 10.2533 9.56629 10.0806C9.71336 9.90779 9.76232 9.78338 9.85922 9.58238C9.95612 9.38138 9.90819 9.20869 9.83599 9.06299C9.76378 8.91729 9.16037 7.45113 8.91089 6.86347C8.67042 6.29695 8.42582 6.36695 8.24144 6.36695C8.0691 6.35807 7.86929 6.35436 7.66949 6.35436C7.46969 6.35436 7.149 6.4268 6.87713 6.72055C6.60526 7.01429 5.8391 7.73233 5.8391 9.19851C5.8391 10.6647 6.90126 12.0768 7.04833 12.2778C7.19542 12.4788 9.147 15.5051 12.1489 16.7932C12.9382 17.134 13.5536 17.338 14.0324 17.4924C14.8217 17.7497 15.5386 17.7126 16.1062 17.6391C16.7426 17.5569 17.9374 16.92 18.187 16.2335C18.4364 15.547 18.4364 14.9593 18.3642 14.8377C18.292 14.7161 18.0922 14.6407 17.8014 14.5179L17.4236 14.4129Z"
                />
              </svg>
              Contactar
            </a>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-tertiary py-4">
            <a
              href="#inicio"
              className="block text-secondary hover:text-primary transition-colors font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="block text-secondary hover:text-primary transition-colors font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#por-que-elegirnos"
              className="block text-secondary hover:text-primary transition-colors font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Por qué elegirnos
            </a>
            <a
              href="#proceso"
              className="block text-secondary hover:text-primary transition-colors font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </a>
            <a
              href="#contacto"
              className="block text-primary hover:text-primary-dark transition-colors font-semibold uppercase flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.4539 3.55305C18.1857 1.27607 15.1812 0 11.9954 0C5.43036 0 0.0931991 5.33716 0.0931991 11.9022C0.0931991 14.0015 0.649513 16.0469 1.70576 17.8409L0 24L6.33064 22.3267C8.0466 23.2813 9.9959 23.7804 11.9885 23.7804H11.9954C18.5535 23.7804 24 18.4432 24 11.8787C24 8.70381 22.722 5.82136 20.4539 3.55305ZM11.9954 21.7804C10.2118 21.7804 8.46253 21.2999 6.94722 20.3984L6.59608 20.1958L2.85583 21.1561L3.83608 17.5252L3.61082 17.1552C2.61178 15.5791 2.09319 13.7682 2.09319 11.9022C2.09319 6.43768 6.52937 2.0001 12.0022 2.0001C14.6158 2.0001 17.0613 3.05275 18.9148 4.91382C20.7682 6.77489 21.9069 9.22167 21.9 11.8787C21.9 17.3501 17.4569 21.7804 11.9954 21.7804ZM17.4236 14.4129C17.1311 14.2672 15.6648 13.5492 15.3929 13.4503C15.121 13.3515 14.9212 13.3025 14.7214 13.5962C14.5216 13.89 13.9531 14.5549 13.7808 14.7559C13.6086 14.9569 13.4363 14.9804 13.1439 14.8347C12.8514 14.689 11.8575 14.3712 10.6896 13.3202C9.78088 12.5005 9.16865 11.4964 8.99633 11.2027C8.82402 10.9089 8.97799 10.7494 9.12506 10.6017C9.25794 10.4697 9.41921 10.2533 9.56629 10.0806C9.71336 9.90779 9.76232 9.78338 9.85922 9.58238C9.95612 9.38138 9.90819 9.20869 9.83599 9.06299C9.76378 8.91729 9.16037 7.45113 8.91089 6.86347C8.67042 6.29695 8.42582 6.36695 8.24144 6.36695C8.0691 6.35807 7.86929 6.35436 7.66949 6.35436C7.46969 6.35436 7.149 6.4268 6.87713 6.72055C6.60526 7.01429 5.8391 7.73233 5.8391 9.19851C5.8391 10.6647 6.90126 12.0768 7.04833 12.2778C7.19542 12.4788 9.147 15.5051 12.1489 16.7932C12.9382 17.134 13.5536 17.338 14.0324 17.4924C14.8217 17.7497 15.5386 17.7126 16.1062 17.6391C16.7426 17.5569 17.9374 16.92 18.187 16.2335C18.4364 15.547 18.4364 14.9593 18.3642 14.8377C18.292 14.7161 18.0922 14.6407 17.8014 14.5179L17.4236 14.4129Z"
                />
              </svg>
              Contactar
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
