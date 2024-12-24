import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      {/* Barra de navegación */}
      <nav className="flex justify-center py-4">
        <ul className="flex gap-8 bg-[#B99470] text-white rounded-full py-2 px-6">
          <li>
            <Link
              href="#sobre-nosotros"
              className="hover:text-[#5F6F52] hover:drop-shadow-lg transition-all"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#eventos"
              className="hover:text-[#5F6F52] hover:drop-shadow-lg transition-all"
            >
              Eventos
            </Link>
          </li>
          <li>
            <Link
              href="#comidas"
              className="hover:text-[#5F6F52] hover:drop-shadow-lg transition-all"
            >
              Comidas
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className="hover:text-[#5F6F52] hover:drop-shadow-lg transition-all"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Secciones */}
      <section id="sobre-nosotros" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Homemade Apple, cursive' }}>
          Sobre Nosotros
        </h2>
        <p className="mt-4">Información sobre el servicio gastronómico.</p>
      </section>

      <section id="eventos" className="py-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Homemade Apple, cursive' }}>
          Eventos
        </h2>
        <p className="mt-4">Descubre nuestros eventos gastronómicos.</p>
      </section>

      <section id="comidas" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Homemade Apple, cursive' }}>
          Comidas
        </h2>
        <p className="mt-4">Explora nuestro menú delicioso.</p>
      </section>

      <section id="contacto" className="py-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Homemade Apple, cursive' }}>
          Contacto
        </h2>
        <p className="mt-4">Ponte en contacto con nosotros.</p>
      </section>
    </div>
  );
}
