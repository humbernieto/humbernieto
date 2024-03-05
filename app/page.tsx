import Image from "next/image";
import FotoPerfil from "@/public/humbernieto.jpeg";
import Skills from "./components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className="dark:bg-black bg-white  min-h-screen">
      <div className="px-6 lg:px-12 max-w-3xl py-16 mx-auto">
        <Image
          alt="Humber Nieto"
          height={100}
          width={100}
          src={FotoPerfil}
          priority
          className="rounded-md grayscale hover:grayscale-0 duration-300 transition-all"
        />
        <h1 className="text-3xl font-bold mt-6 text-black dark:text-white">
          Humber Nieto
        </h1>
        <div className="mt-1 flex items-center text-black dark:text-white font-light">
          Founder of&nbsp;&nbsp;
          <Link
            className="text-[#e81055] hover:underline duration-300 transition-all font-medium"
            href={"https://nietux.com/"}
            target="_blank"
          >
            Nietux
          </Link>
        </div>
        <div className="lg:flex items-center gap-x-8">
          <p className="text-black dark:text-white mt-4 font-light">
            Soy un apasionado por la tecnología con experiencia en el desarrollo
            de soluciones innovadoras y accesibles para empresas y usuarios.
            Utilizo tecnologías modernas y metodologías ágiles para obtener los
            mejores resultados.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 mt-16">
          <Skills />

          <div className="mt-6 lg:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-rose-500 animate-pulse absolute m-2 z-30"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="rounded-lg lg:rounded-l-none lg:rounded-r-lg"
            >
              <source src="/halley-dev.mp4" type="video/mp4" />
              Su navegador no soporta la etiqueta de vídeo.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
