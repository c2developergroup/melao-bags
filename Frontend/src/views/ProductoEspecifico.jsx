import { IoMdHeartEmpty } from "react-icons/io";

export const ProductoEspecifico = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row mt-[6.6rem]">
        <div className="w-full md:w-[45vw] flex justify-center items-center py-5">
          <img
            src="ProductoEspecifico.png"
            className="cursor-pointer h-auto w-4/5 rounded"
          />
        </div>
        <div className="w-full md:w-[55vw] p-10">
          <h2 className="text-4xl">
            Cartera Reversible Roja/Negra <br /> $25
          </h2>
          <p className="text-xl py-10 ">
            Descubre la elegancia versátil con nuestra cartera reversible. Este
            accesorio único ofrece dos opciones de estilo en uno: rojo vibrante
            por un lado y negro clásico por el otro. Perfecta para adaptarse a
            cualquier ocasión, esta cartera combina practicidad con un toque de
            color. ¡Elige tu look según tu estado de ánimo y estilo del día con
            esta cartera reversible!
          </p>
          <p className="text-xl">Cantidad</p>
          <div className="grid grid-cols-12 w-72 gap-4">
            <select className="col-span-6 p-2 rounded border border-gray-300">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button className="col-span-6 border border-gray-300 rounded-full p-2">
              Agregar a la bolsa
            </button>
            <button className="flex justify-center items-center col-span-12 border border-gray-300 rounded-full p-2">
              <IoMdHeartEmpty />
              Añadir a favoritos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
