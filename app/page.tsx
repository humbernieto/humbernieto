import Image from "next/image";
import FotoPerfil from "@/public/humbernieto.jpeg";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <main className="dark:bg-zinc-950 bg-white  min-h-screen">
      <div className="px-6 lg:px-12 max-w-3xl py-16 mx-auto">
        <Image
          alt="Humber Nieto"
          height={100}
          width={100}
          src={FotoPerfil}
          priority
          className="rounded-md grayscale"
        />
        <h1 className="font-bold text-3xl mt-4">Humber Nieto</h1>
        <div className="lg:flex items-center gap-x-8">
          <p className="text-zinc-950 dark:text-zinc-300 mt-1">
            Soy un apasionado por la tecnología con experiencia en el desarrollo
            de soluciones innovadoras y accesibles para empresas y usuarios.
            Utilizo tecnologías modernas y metodologías ágiles para obtener los
            mejores resultados.
          </p>
        </div>

        <Skills />

        <div className="mt-12">
          <h3 className="text-white text-xl font-bold absolute flex items-center p-4">
            My inspiration{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                className="w-7 h-7 text-rose-500 ml-2 animate-pulse"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
          </h3>
          <video
            autoPlay
            loop
            playsInline
            preload="auto"
            className="rounded-md mt-2"
          >
            <source src="/motivacion_humber.mp4" type="video/mp4" />
            Su navegador no soporta la etiqueta de vídeo.
          </video>
        </div>
      </div>
    </main>
  );
}
