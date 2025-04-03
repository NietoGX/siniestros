import MainLayout from "../layouts/MainLayout";

export default function PoliticaPrivacidad() {
  return (
    <MainLayout
      title="Política de Privacidad | Reclamamos Tu Siniestro"
      description="Información sobre el tratamiento de datos personales en Reclamamos Tu Siniestro."
    >
      <div className="pt-32 pb-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Política de Privacidad
          </h1>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              1. Responsable del Tratamiento
            </h2>
            <p className="mb-4 text-tertiary">
              <strong>Identidad:</strong> RECLAMAMOS TU SINIESTRO S.L. (en
              adelante, "RTS")
            </p>
            <p className="mb-4 text-tertiary">
              <strong>NIF:</strong> B-XXXXXXXX
            </p>
            <p className="mb-4 text-tertiary">
              <strong>Dirección postal:</strong> [DIRECCIÓN COMPLETA]
            </p>
            <p className="mb-4 text-tertiary">
              <strong>Teléfono:</strong> +34 XXX XXX XXX
            </p>
            <p className="mb-4 text-tertiary">
              <strong>Correo electrónico:</strong>{" "}
              info@reclamamostusiniestro.com
            </p>
            <p className="text-tertiary">
              <strong>Delegado de Protección de Datos (DPD):</strong> [NOMBRE
              DEL DPD] - contacto: dpd@reclamamostusiniestro.com
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              2. Finalidad del Tratamiento
            </h2>
            <p className="mb-4 text-tertiary">
              En RTS tratamos la información que nos facilitan los interesados
              con las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                Gestionar la prestación de los servicios jurídicos solicitados y
                mantener la relación contractual.
              </li>
              <li>
                Atender consultas, solicitudes o peticiones de los usuarios a
                través de los distintos canales de contacto.
              </li>
              <li>
                Gestionar el envío de información comercial y/o newsletters de
                nuestros servicios, en caso de consentimiento expreso.
              </li>
              <li>
                Mejorar la experiencia del usuario en nuestra web y personalizar
                el contenido.
              </li>
              <li>
                Cumplir con obligaciones legales y reglamentarias aplicables.
              </li>
              <li>
                Gestionar procesos de selección en caso de que nos haya enviado
                su currículum.
              </li>
            </ul>
            <p className="mb-4 text-tertiary">
              <strong>Plazo de conservación:</strong> Los datos personales
              proporcionados se conservarán mientras se mantenga la relación
              contractual, no se solicite su supresión por el interesado y no
              deban eliminarse por ser necesarios para el cumplimiento de una
              obligación legal o para la formulación, ejercicio y defensa de
              reclamaciones.
            </p>
            <p className="text-tertiary">
              Si el usuario ha dado su consentimiento para finalidades de
              marketing, sus datos se conservarán mientras no retire dicho
              consentimiento. En caso de currículums, se conservarán por un
              periodo máximo de un año desde su recepción.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              3. Legitimación del Tratamiento
            </h2>
            <p className="mb-4 text-tertiary">
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                <strong>Ejecución de un contrato</strong> en el que el
                interesado es parte o para la aplicación de medidas
                precontractuales (Art. 6.1.b RGPD), para la prestación de
                nuestros servicios jurídicos.
              </li>
              <li>
                <strong>Consentimiento del interesado</strong> (Art. 6.1.a RGPD)
                para el envío de comunicaciones comerciales, newsletters y el
                tratamiento de datos con fines de marketing.
              </li>
              <li>
                <strong>Interés legítimo del responsable</strong> (Art. 6.1.f
                RGPD) para la gestión de consultas y solicitudes, la mejora de
                nuestros servicios y la seguridad de nuestro sitio web.
              </li>
              <li>
                <strong>Cumplimiento de obligaciones legales</strong> (Art.
                6.1.c RGPD) a las que está sujeto el responsable del
                tratamiento.
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              4. Categorías de Datos
            </h2>
            <p className="mb-4 text-tertiary">
              Los datos que tratamos incluyen las siguientes categorías:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                <strong>Datos identificativos:</strong> nombre, apellidos,
                DNI/NIE, dirección postal, dirección de correo electrónico,
                teléfono.
              </li>
              <li>
                <strong>Datos de características personales:</strong> fecha y
                lugar de nacimiento, sexo, nacionalidad.
              </li>
              <li>
                <strong>Datos bancarios y de transacciones:</strong> en caso de
                contratación de nuestros servicios.
              </li>
              <li>
                <strong>Datos relativos al siniestro:</strong> fechas,
                circunstancias, compañía de seguros, póliza, daños y lesiones,
                informes médicos, peritajes y cualquier otra documentación
                relacionada con el siniestro que se nos proporcione para la
                prestación de nuestros servicios.
              </li>
              <li>
                <strong>Datos de navegación:</strong> dirección IP, tipo de
                navegador, dispositivo, sistema operativo, páginas visitadas,
                duración de la visita, ubicación geográfica general.
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              5. Destinatarios
            </h2>
            <p className="mb-4 text-tertiary">
              Los datos personales podrán ser comunicados a:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                Administraciones Públicas competentes, Jueces y Tribunales,
                cuando la comunicación sea necesaria para el cumplimiento de
                obligaciones legales.
              </li>
              <li>
                Compañías aseguradoras implicadas en el siniestro, para la
                gestión de la reclamación.
              </li>
              <li>
                Peritos y profesionales sanitarios, en caso necesario para la
                valoración de daños.
              </li>
              <li>
                Proveedores de servicios que actúan como encargados del
                tratamiento, con los que hemos firmado los correspondientes
                contratos de encargado de tratamiento y con quienes tomamos
                medidas para garantizar la protección de sus datos personales.
              </li>
            </ul>
            <p className="mb-4 text-tertiary">
              <strong>Transferencias internacionales:</strong> No se realizan
              transferencias internacionales de sus datos personales fuera del
              Espacio Económico Europeo (EEE). En caso de producirse, se
              adoptarán las garantías adecuadas de conformidad con la normativa
              de protección de datos.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              6. Derechos de los Interesados
            </h2>
            <p className="mb-4 text-tertiary">
              Cualquier persona tiene derecho a obtener confirmación sobre si en
              RTS estamos tratando datos personales que les conciernan, o no.
            </p>
            <p className="mb-4 text-tertiary">
              Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>
                <strong>Acceder</strong> a sus datos personales, así como a
                solicitar la rectificación de los datos inexactos o, en su caso,
                solicitar su <strong>supresión</strong> cuando, entre otros
                motivos, los datos ya no sean necesarios para los fines que
                fueron recogidos.
              </li>
              <li>
                Solicitar en determinadas circunstancias:
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>
                    La <strong>limitación</strong> del tratamiento de sus datos,
                    en cuyo caso únicamente los conservaremos para el ejercicio
                    o la defensa de reclamaciones.
                  </li>
                  <li>
                    La <strong>oposición</strong> al tratamiento de sus datos,
                    en cuyo caso, dejaremos de tratar los datos, salvo por
                    motivos legítimos imperiosos, o el ejercicio o la defensa de
                    posibles reclamaciones.
                  </li>
                  <li>
                    La <strong>portabilidad</strong> de los datos para que sean
                    facilitados a la persona interesada o directamente a otro
                    responsable, en un formato estructurado, de uso común y
                    lectura mecánica.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Retirar el consentimiento</strong> otorgado, en
                cualquier momento, sin que ello afecte a la licitud del
                tratamiento basado en el consentimiento previo a su retirada.
              </li>
            </ul>
            <p className="mb-4 text-tertiary">
              Estos derechos podrán ejercerse presencialmente en nuestras
              oficinas, por correo postal a la dirección [DIRECCIÓN COMPLETA], o
              a través del correo electrónico info@reclamamostusiniestro.com,
              adjuntando copia de su DNI u otro documento identificativo válido.
            </p>
            <p className="mb-4 text-tertiary">
              Si considera que el tratamiento no se ajusta a la normativa
              vigente o considera que sus derechos no han sido debidamente
              atendidos, puede presentar una reclamación ante la Agencia
              Española de Protección de Datos (www.aepd.es).
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              7. Procedencia de los Datos
            </h2>
            <p className="mb-4 text-tertiary">
              Los datos personales que tratamos en RTS proceden de:
            </p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>El propio interesado o su representante legal.</li>
              <li>
                Terceros con quienes existen acuerdos de colaboración, siempre
                que exista una base legítima para ello.
              </li>
              <li>
                Fuentes de acceso público, cuando sea necesario para la
                prestación de nuestros servicios y exista un interés legítimo.
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              8. Medidas de Seguridad
            </h2>
            <p className="mb-4 text-tertiary">
              RTS ha adoptado todas las medidas técnicas y organizativas
              necesarias para garantizar la seguridad e integridad de los datos
              personales que trata, así como para evitar su pérdida, alteración
              y/o acceso por parte de terceros no autorizados. No obstante, debe
              ser consciente de que las medidas de seguridad en Internet no son
              inexpugnables.
            </p>
            <p className="text-tertiary">Entre estas medidas se incluyen:</p>
            <ul className="list-disc list-inside mb-4 text-tertiary">
              <li>Cifrado de comunicaciones mediante protocolos SSL/TLS.</li>
              <li>Almacenamiento seguro y controles de acceso a los datos.</li>
              <li>Revisiones periódicas de nuestras medidas de seguridad.</li>
              <li>
                Formación continua a nuestro personal en materia de protección
                de datos.
              </li>
            </ul>
          </div>

          <div className="bg-secondary p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              9. Modificación de la Política de Privacidad
            </h2>
            <p className="mb-4 text-tertiary">
              RTS se reserva el derecho a modificar la presente política de
              privacidad para adaptarla a novedades legislativas o
              jurisprudenciales, así como a prácticas de la industria. En dichos
              supuestos, anunciaremos en esta página los cambios introducidos
              con razonable antelación a su puesta en práctica.
            </p>
            <p className="text-tertiary">
              Fecha de la última actualización: [FECHA].
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
