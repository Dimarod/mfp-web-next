"use client";

import Image from "next/image";
import { merriweather, updock } from "@/ui/fonts";
import Slider from "@/ui/slider";
import Layout from "@/components/Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full h-[79vh]">
          <div className="w-full flex flex-col items-center justify-around h-4/5">
            <h1
              className={`${merriweather.className} antialiased text-3xl md:text-5xl text-maintxt w-[75%] md:w-[40%]`}
            >
              Bienvenidos a
              <span
                className={`${updock.className} antialiased w-[95%] flex justify-end text-5xl md:text-7xl text-maintxt`}
              >
                my footprint
              </span>
            </h1>
            <div className="md:w-4/5 flex items-center justify-around py-4" id="home">
              <p className="w-1/2 text-xs md:text-lg text-maintxt">
                Somos un centro terapéutico integral dedicado a cuidar tu
                bienestar físico y emocional. Nuestro equipo multidisciplinario
                te ofrece tratamientos personalizados en salud mental,
                nutrición, cuidado de la piel y estética. Da el paso hacia una
                mejor versión de ti mismo. Tu bienestar es nuestra misión, y
                juntos haremos realidad tus sueños.
              </p>
              <Image
                src="/main2.jpeg"
                alt="main-foto"
                width={3024}
                height={4032}
                className="w-32 md:w-64 rounded-lg"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
