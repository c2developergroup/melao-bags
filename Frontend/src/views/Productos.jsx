import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

export const Productos = () => {
  return (
    <>
      <section className="pt-[9.9rem] flex">
        <div className="bg-[url('/lonuevo.png')] bg-cover bg-center w-[28.1rem] h-[36.5rem]">
          <h2 className="text-red-600 text-5xl pt-6 pl-6">Lo nuevo</h2>
        </div>
        <div>
          <div className="grid grid-cols-3 px-20 py-10">
            {/* Modelo para replicar en props */}
            <div>
              <div className="bg-[url('/cartera.png')] bg-cover bg-center w-60 h-60">
                <div className="flex justify-end mt-2 mr-2">
                  <IoMdHeartEmpty className="cursor-pointer text-white text-2xl" />
                </div>
              </div>
              <div className="flex p-2 items-center gap-2">
                <h2>Cartera Blanca y Roja</h2>
                <div className="flex gap-1">
                  <div className="rounded-full w-4 h-4 border border-1 border-black bg-white"></div>
                  <div className="rounded-full w-4 h-4 border border-1 border-black bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-3xl text-center">$25</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between">
        <div>PROPS</div>
        <div className="bg-[url('/lasmasvendidas.png')] bg-cover bg-center w-[28.1rem] h-[36.5rem]">
          <h2 className="text-red-600 text-[2.5rem] pt-6 pl-6">Las más vendidas</h2>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="bg-[url('/clutchssection.png')] bg-cover bg-center w-[28.1rem] h-[36.5rem]">
          <h2 className="text-red-600 text-5xl pt-6 pl-6">Clutchs</h2>
        </div>
        <div>PROPS</div>
      </section>
      <section className="flex justify-between">
        <div>PROPS</div>
        <div className="bg-[url('/koalas.png')] bg-cover bg-center w-[28.1rem] h-[36.5rem]">
          <h2 className="text-red-600 text-[2.5rem] pt-6 pl-6">Las más vendidas</h2>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="bg-[url('/combossection.png')] bg-cover bg-center w-[28.1rem] h-[36.5rem]">
          <h2 className="text-red-600 text-5xl pt-6 pl-6">Clutchs</h2>
        </div>
        <div>PROPS</div>
      </section>
    </>
  );
};
