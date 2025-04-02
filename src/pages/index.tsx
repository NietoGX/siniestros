import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import preocupadoImg from "../assets/preocupado.jpg";
import { useState, useEffect } from "react";

export default function Home() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón tan pronto como el usuario comience a hacer scroll
      if (window.scrollY > 10) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center bg-tertiary text-secondary overflow-hidden h-screen w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-tertiary-dark to-tertiary z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src={preocupadoImg}
            alt="Persona preocupada por un siniestro"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tertiary-dark to-tertiary opacity-60"></div>
        </div>

        {/* Contenido principal del Hero - 100vh en móvil y desktop */}
        <div className="container mx-auto px-4 z-10 flex-grow flex items-center h-screen md:h-auto pt-16 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center md:text-left">
              <p className="text-4xl mb-8 text-secondary">
                Plataforma de abogados{" "}
                <span className="text-primary font-semibold">
                  especializada
                </span>{" "}
                en las reclamaciones{" "}
                <span className="text-primary font-semibold underline decoration-2">
                  contra los seguros
                </span>{" "}
                de autos.
              </p>
            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-xl border border-primary backdrop-blur-sm bg-opacity-50">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                ¿Cómo podemos ayudarte?
              </h2>
              <p className="text-xl mb-6 text-tertiary">
                Contacta sin compromiso y de forma{" "}
                <span className="text-primary font-bold">GRATUITA</span> y te
                asesoraremos sobre la reclamación contra tu aseguradora.
              </p>
              <button className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg transform hover:scale-105">
                Quiero contactar
              </button>
            </div>
          </div>
        </div>

        {/* Nuevos divs informativos - Visibles solo en desktop, incluidos en el 100vh */}
        <div className="w-full bg-secondary bg-opacity-90 backdrop-blur-sm border-t border-primary z-10 py-10 hidden md:block mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg md:text-xl font-medium text-tertiary">
                  No te conformes con una{" "}
                  <span className="text-primary font-semibold bg-secondary px-2 py-1 rounded">
                    indemnización injusta
                  </span>{" "}
                  ante un siniestro.{" "}
                  <span className="text-primary font-bold">
                    Luchamos por ti
                  </span>{" "}
                  contra las compañías de seguros y te asesoramos sobre la{" "}
                  <span className="text-primary italic underline decoration-2 underline-offset-4">
                    mejor opción
                  </span>
                  .
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg md:text-xl font-medium text-tertiary">
                  Ninguno de nuestros abogados trabaja para{" "}
                  <span className="text-primary font-semibold">
                    compañías de seguros
                  </span>
                  , por lo que no hay{" "}
                  <span className="text-primary italic underline">
                    intereses ocultos
                  </span>
                  . Además, solo cobramos si{" "}
                  <span className="text-primary font-bold bg-secondary px-2 py-1 rounded">
                    TÚ
                  </span>{" "}
                  consigues una compensación económica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante de contacto */}
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="bg-primary hover:bg-primary-dark text-white flex items-center px-4 py-3 rounded-full font-semibold transition-all shadow-lg transform hover:scale-105 animate-fadeIn">
            <svg
              className="w-5 h-5 mr-2"
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
          </button>
        </div>
      )}

      {/* Sección informativa para móvil - Visible solo en móvil */}
      <section className="py-12 bg-secondary md:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md">
              <p className="text-lg font-medium text-tertiary">
                No te conformes con una{" "}
                <span className="text-primary font-semibold bg-secondary px-2 py-1 rounded">
                  indemnización injusta
                </span>{" "}
                ante un siniestro.{" "}
                <span className="text-primary font-bold">Luchamos por ti</span>{" "}
                contra las compañías de seguros y te asesoramos sobre la{" "}
                <span className="text-primary italic underline decoration-2 underline-offset-4">
                  mejor opción
                </span>
                .
              </p>
            </div>

            <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md">
              <p className="text-lg font-medium text-tertiary">
                Ninguno de nuestros abogados trabaja para{" "}
                <span className="text-primary font-semibold">
                  compañías de seguros
                </span>
                , por lo que no hay{" "}
                <span className="text-primary italic underline">
                  intereses ocultos
                </span>
                . Además, solo cobramos si{" "}
                <span className="text-primary font-bold bg-secondary px-2 py-1 rounded">
                  TÚ
                </span>{" "}
                consigues una compensación económica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Nuestros{" "}
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
              Servicios
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Siniestro Total
              </h3>
              <p className="text-tertiary">
                Si has tenido un{" "}
                <span className="text-primary font-semibold">accidente</span> y
                la compañía aseguradora no te permite reparar por entender que
                el vehículo es{" "}
                <span className="text-primary font-bold italic">
                  pérdida total
                </span>
                , puede que no sea cierto. Si no estás de acuerdo con la{" "}
                <span className="text-primary font-semibold underline">
                  indemnización u oferta
                </span>{" "}
                que te ofrecen es posible que tu vehículo no sea pérdida total
                por NO superar la reparación el valor venal del mismo.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Daños Corporales
              </h3>
              <p className="text-tertiary">
                Si has tenido un{" "}
                <span className="text-primary font-semibold">
                  accidente con tu vehículo
                </span>
                , seas o no el culpable, puedes sacar la{" "}
                <span className="text-primary font-bold">
                  mejor valoración e indemnización
                </span>{" "}
                en proporción a la{" "}
                <span className="text-primary italic">
                  gravedad de tus daños
                </span>
                .
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Vehículo de Sustitución
              </h3>
              <p className="text-tertiary">
                ¿Has tenido el vehículo{" "}
                <span className="text-primary font-semibold">
                  parado en el taller días y días
                </span>{" "}
                por un accidente que{" "}
                <span className="text-primary font-bold">
                  NO ha sido tu culpa
                </span>
                ? Te ayudamos a reclamar por un{" "}
                <span className="text-primary italic underline">
                  vehículo de sustitución
                </span>{" "}
                o por esos daños y perjuicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos Section */}
      <section
        id="por-que-elegirnos"
        className="py-20 bg-secondary text-tertiary"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            ¿Por qué{" "}
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
              elegirnos
            </span>
            ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-secondary-light bg-opacity-20 p-8 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-5xl font-bold mb-4 text-primary">99%</div>
              <p className="text-tertiary text-lg">
                <span className="text-primary font-semibold">de éxito</span>
              </p>
            </div>
            <div className="text-center bg-secondary-light bg-opacity-20 p-8 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-5xl font-bold mb-4 text-primary">+500</div>
              <p className="text-tertiary text-lg">
                Casos{" "}
                <span className="text-primary font-semibold">
                  resueltos con éxito
                </span>
              </p>
            </div>
            <div className="text-center bg-secondary-light bg-opacity-20 p-8 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-5xl font-bold mb-4 text-primary">100%</div>
              <p className="text-tertiary text-lg">
                <span className="text-primary font-semibold">
                  Atención personalizada
                </span>
              </p>
            </div>
            <div className="text-center bg-secondary-light bg-opacity-20 p-8 rounded-lg transform hover:scale-105 transition-all">
              <div className="text-5xl font-bold mb-4 text-primary">✓</div>
              <p className="text-tertiary text-lg">
                <span className="text-primary font-semibold">
                  Consulta gratuita
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section id="proceso" className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            Nuestro{" "}
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
              Proceso
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Evaluación Inicial
              </h3>
              <p className="text-tertiary">
                Analizamos tu caso de forma{" "}
                <span className="text-primary font-bold">gratuita</span> y te
                asesoramos sobre las
                <span className="text-primary font-semibold italic">
                  {" "}
                  mejores opciones
                </span>
                .
              </p>
            </div>
            <div className="text-center bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Gestión del Caso
              </h3>
              <p className="text-tertiary">
                Nos encargamos de{" "}
                <span className="text-primary font-semibold">
                  toda la documentación
                </span>{" "}
                y{" "}
                <span className="text-primary font-bold italic">
                  trámites necesarios
                </span>
                .
              </p>
            </div>
            <div className="text-center bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Resolución
              </h3>
              <p className="text-tertiary">
                Conseguimos la{" "}
                <span className="text-primary font-bold underline">
                  mejor compensación posible
                </span>{" "}
                para tu caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-primary text-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            ¿Necesitas ayuda con tu reclamación?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
            Nuestro equipo de{" "}
            <span className="bg-secondary text-primary px-2 py-1 rounded-md">
              expertos
            </span>{" "}
            está listo para ayudarte. Primera consulta{" "}
            <span className="underline decoration-2 font-bold">
              gratuita y sin compromiso
            </span>
            .
          </p>
          <button className="bg-tertiary text-secondary border-2 border-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-tertiary transition-colors shadow-lg transform hover:scale-105">
            Contacta ahora
          </button>
        </div>
      </section>
    </MainLayout>
  );
}
