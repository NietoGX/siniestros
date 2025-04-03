import MainLayout from "../layouts/MainLayout";

export default function PoliticaCookies() {
  return (
    <MainLayout
      title="Política de Cookies | Reclamamos Tu Siniestro"
      description="Información sobre el uso de cookies en la web de Reclamamos Tu Siniestro."
    >
      <div className="pt-32 pb-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Política de Cookies
          </h1>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              1. ¿Qué son las Cookies?
            </h2>
            <p className="mb-4 text-tertiary">
              Las cookies son pequeños archivos de texto que los sitios web
              almacenan en su navegador cuando los visita. Estos archivos
              permiten que el sitio web recuerde información sobre su visita,
              como su idioma preferido y otras opciones, lo que puede facilitar
              su próxima visita y hacer que el sitio le resulte más útil.
            </p>
            <p className="text-tertiary">
              Las cookies desempeñan un papel muy importante y contribuyen a
              tener una mejor experiencia de navegación para el usuario. Pueden
              ser de diferentes tipos: cookies técnicas (necesarias para la
              navegación), cookies de personalización, cookies de análisis,
              cookies publicitarias y cookies de publicidad comportamental.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              2. Uso de Cookies en Nuestra Web
            </h2>
            <p className="mb-4 text-tertiary">
              Actualmente, en Reclamamos Tu Siniestro no utilizamos cookies en
              nuestro sitio web. Esto significa que no almacenamos información
              en su navegador ni realizamos seguimiento de su actividad en
              nuestra página.
            </p>
            <p className="mb-4 text-tertiary">
              En el futuro, si decidimos implementar cookies, actualizaremos
              esta política para informarle sobre su uso y finalidad.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              3. Cómo Configurar y Deshabilitar las Cookies
            </h2>
            <p className="mb-4 text-tertiary">
              Aunque actualmente no utilizamos cookies, puede permitir, bloquear
              o eliminar las cookies instaladas en su equipo mediante la
              configuración de las opciones de su navegador de internet. En caso
              de que no permita la instalación de cookies en su navegador es
              posible que no pueda acceder a algunas de las funcionalidades de
              nuestra página web.
            </p>
            <p className="mb-4 text-tertiary">
              A continuación, le ofrecemos enlaces donde encontrará información
              sobre cómo puede activar sus preferencias en los principales
              navegadores:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://help.opera.com/en/latest/web-preferences/#cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Opera
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              4. Consentimiento
            </h2>
            <p className="mb-4 text-tertiary">
              Al navegar y continuar en nuestra web nos indica que está
              consintiendo el uso de las cookies antes enunciadas, y en las
              condiciones contenidas en la presente Política de Cookies.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              5. Actualizaciones y Cambios en la Política de Cookies
            </h2>
            <p className="mb-4 text-tertiary">
              RECLAMAMOS TU SINIESTRO S.L. puede modificar esta Política de
              Cookies en función de exigencias legislativas, reglamentarias, o
              con la finalidad de adaptar dicha política a las instrucciones
              dictadas por la Agencia Española de Protección de Datos o cambios
              en nuestro sitio web.
            </p>
            <p className="mb-4 text-tertiary">
              Por eso, aconsejamos a los usuarios que visiten periódicamente
              nuestra página para obtener información actualizada. Cuando se
              produzcan cambios significativos en esta Política de Cookies, se
              comunicarán a los usuarios bien mediante la web o a través de
              correo electrónico a los usuarios registrados.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              6. Información Adicional sobre Protección de Datos
            </h2>
            <p className="mb-4 text-tertiary">
              Para obtener más información detallada sobre la protección de
              datos y cómo tratamos su información personal, incluyendo sus
              derechos, consulte nuestra{" "}
              <a href="/privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
            <p className="mb-4 text-tertiary">
              Si tiene alguna duda, comentario o sugerencia sobre la Política de
              Cookies, puede contactar con nosotros a través de:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>Correo electrónico: info@reclamamostusiniestro.com</li>
              <li>Teléfono: +34 623 225 873</li>
              <li>Dirección postal: Calle Salvador 59 Vila-real (Castellón)</li>
            </ul>
            <p className="text-tertiary">
              Fecha de la última actualización:{" "}
              {new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
