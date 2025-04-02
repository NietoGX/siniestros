import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-tertiary text-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-tertiary-dark to-tertiary opacity-50"></div>
        <div className="container mx-auto px-4 z-10 flex-grow flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 text-primary">
                Reclamamos Tu Siniestro
              </h1>
              <p className="text-xl mb-8 text-secondary">
                No te conformes con una{" "}
                <span className="text-primary font-semibold italic">
                  indemnización injusta
                </span>{" "}
                , nosotros{" "}
                <span className="text-primary font-semibold underline decoration-2">
                  luchamos por ti
                </span>{" "}
                contra las aseguradoras.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-secondary px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg transform hover:scale-105">
                Solicita información
              </button>
            </div>

            <div className="bg-secondary p-8 rounded-lg shadow-xl border border-primary">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                ¿Cómo podemos ayudarte?
              </h2>
              <p className="mb-6 text-tertiary">
                Reserva tu consulta{" "}
                <span className="text-primary font-bold">GRATUITA</span> y sin
                compromiso y te lo contamos
              </p>
              <button className="w-full bg-primary hover:bg-primary-dark text-secondary px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg transform hover:scale-105">
                Quiero contactar
              </button>
            </div>
          </div>
        </div>

        {/* Nuevos divs informativos */}
        <div className="w-full bg-secondary bg-opacity-90 backdrop-blur-sm border-t border-primary z-10 py-10 mb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg md:text-xl font-medium text-tertiary">
                  <span className="text-primary font-semibold bg-secondary px-2 py-1 rounded">
                    Única Plataforma
                  </span>{" "}
                  de Abogados especialistas en{" "}
                  <span className="text-primary font-bold underline decoration-2 underline-offset-4">
                    RECLAMACIONES
                  </span>
                  . Y{" "}
                  <span className="text-primary italic">
                    solo cobramos si logramos
                  </span>{" "}
                  tu compensación.
                </p>
              </div>

              <div className="p-6 border-l-4 border-primary bg-secondary-light bg-opacity-30 rounded-r-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="text-lg md:text-xl font-medium text-tertiary">
                  <span className="text-primary font-bold bg-secondary px-2 py-1 rounded">
                    Importante:
                  </span>{" "}
                  Ninguno de nuestros abogados trabaja para una{" "}
                  <span className="text-primary font-semibold">
                    Compañía de Seguros
                  </span>
                  . No hay{" "}
                  <span className="text-primary italic underline">
                    intereses ocultos
                  </span>
                  , por ello, nuestra ratio de éxito es de{" "}
                  <span className="text-primary font-bold">casi el 100%</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-tertiary">
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
                Accidentes de Tráfico
              </h3>
              <p className="text-tertiary">
                Has sufrido un{" "}
                <span className="text-primary font-semibold">
                  accidente de tráfico
                </span>{" "}
                y no sabes cómo reclamar la
                <span className="text-primary font-bold italic">
                  {" "}
                  indemnización que mereces
                </span>
                . Nosotros te asesoramos y gestionamos todo el proceso para{" "}
                <span className="text-primary font-semibold underline">
                  maximizar tu compensación
                </span>
                .
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Daños Corporales
              </h3>
              <p className="text-tertiary">
                Has tenido{" "}
                <span className="text-primary font-semibold">
                  lesiones o secuelas
                </span>{" "}
                tras un accidente y necesitas un profesional que{" "}
                <span className="text-primary font-bold">
                  defienda tus intereses
                </span>
                . Te ayudamos a obtener la
                <span className="text-primary italic">
                  {" "}
                  indemnización justa
                </span>{" "}
                por tus daños físicos y psicológicos.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Vehículos de Sustitución
              </h3>
              <p className="text-tertiary">
                Tu vehículo está en el taller y{" "}
                <span className="text-primary font-semibold">
                  necesitas movilidad
                </span>
                . Gestionamos la obtención de un{" "}
                <span className="text-primary font-bold">
                  vehículo de sustitución
                </span>{" "}
                mientras el tuyo está siendo reparado,{" "}
                <span className="text-primary italic underline">
                  sin costes adicionales
                </span>{" "}
                para ti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos Section */}
      <section className="py-20 bg-secondary text-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">
            ¿Por qué{" "}
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary"></span>
              elegirnos
            </span>
            ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="text-5xl font-bold mb-4 text-primary">95%</div>
              <p className="text-tertiary text-lg">
                <span className="text-primary font-semibold">
                  Tasa de éxito
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
          </div>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="py-20 bg-tertiary">
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
      <section className="py-20 bg-primary text-secondary">
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
