import { IoMdHeartEmpty } from "react-icons/io";

export const ProductoEspecifico = () => {
    return (
      <>
        <div className="flex">
          <img
            src="../../public/ProductoEspecifico.png"
            className="h-[38rem] w-[38rem] mt-40 ml-24 cursor-pointer"
          />
          <div className="descripcion mt-56 flex flex-col"> 
            <h2 className="text-4xl px-20">Cartera Reversible Roja/Negra <br /> $25</h2>
            <p className="text-xl py-10 px-20"> Descubre la elegancia versátil con nuestra cartera reversible. Este accesorio único ofrece dos opciones de estilo en uno: rojo vibrante por un lado y negro clásico por el otro. Perfecta para adaptarse a cualquier ocasión, esta cartera combina practicidad con un toque de color. ¡Elige tu look según tu estado de ánimo y estilo del día con esta cartera reversible!</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <p className="text-xl py-8 px-20">Cantidad</p>
                <select className="ml-20 p-2 rounded border border-gray-300 w-20">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <button className="border border-gray-300 rounded-full p-2 mr-96">Agregar a la bolsa</button>
            </div>
              <button className="flex justify-center border border-gray-300 rounded-full  p-2 m-auto"> <IoMdHeartEmpty/>Añadir a favoritos</button>
          </div>
        </div>
      </>
    );
  };
  