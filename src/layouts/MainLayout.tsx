import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function MainLayout({
  children,
  title = "Reclamamos Tu Siniestro",
  description = "Especialistas en reclamación de siniestros",
}: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-secondary fixed top-0 w-full z-[1000]">
        <Navigation />
      </header>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
        <footer className="bg-secondary text-tertiary py-12 border-t border-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold mb-6 text-primary">
                  Contacto
                </h3>
                <div className="space-y-3">
                  <p>Email: info@reclamamostusiniestro.com</p>
                  <p>Teléfono: +34 623 225 873</p>
                  <p>WhatsApp: +34 623 225 873</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-primary">
                  Enlaces Rápidos
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/"
                      className="hover:text-primary transition-colors"
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#servicios"
                      className="hover:text-primary transition-colors"
                    >
                      Nuestros Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#por-que-elegirnos"
                      className="hover:text-primary transition-colors"
                    >
                      ¿Por qué elegirnos?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#proceso"
                      className="hover:text-primary transition-colors"
                    >
                      Nuestro Proceso
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contacto"
                      className="hover:text-primary transition-colors"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-6 text-primary">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/aviso-legal"
                      className="hover:text-primary transition-colors"
                    >
                      Aviso Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacidad"
                      className="hover:text-primary transition-colors"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="hover:text-primary transition-colors"
                    >
                      Política de Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary text-center">
              <p>
                &copy; {new Date().getFullYear()} Reclamamos Tu Siniestro. Todos
                los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
