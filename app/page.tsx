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

        {/* <div className="mt-12">
          <h3 className="font-medium">Mi motivación ❤️</h3>
          <video
            autoPlay
            loop
            playsInline
            preload="auto"
            className="w-44 rounded-md mt-2"
          >
            <source src="/motivacion_humber.mp4" type="video/mp4" />
            Su navegador no soporta la etiqueta de vídeo.
          </video>
        </div> */}
      </div>
    </main>
  );
}
