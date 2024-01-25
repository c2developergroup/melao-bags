import "../css/app.css";

export const App = () => {
  return (
    <>
      <div className="mt-[6.60rem]"></div>
      <section
        id="inicio"
        className="bg-[url('/modellandingpage.png')] bg-cover bg-bottom min-h-[100vh]"
      >
        <div className="w-10/12 m-auto pt-20 md:pt-56">
          <div className="relative z-10 text-white dark:text-white 3xl:text-4xl xl:text-7xl text-6xl resp:text-6xl transition duration-300 drop-shadow-xl shadow-black">
            <h2 className="md:block hidden">
              Explora la nueva colección <br /> de Melao Bags
            </h2>
          </div>
          <a href="/">
            <button className="slide-in-blurred-left hover:bg-neutral-400 hover:bg-opacity-25 cursor-pointer transition duration-300 border-[0.005rem] md:mt-6 mt-3 border-white text-white font-['Bebas_Neue'] 4xl:text-4xl md:text-2xl text-xl md:px-5 px-3 md:py-3 py-2 rounded-full mb-20">
              Ver ahora
            </button>
          </a>
        </div>
      </section>
      <section>
        <div className="w-full flex">
          <div className="bg-[url('/carteras.png')] w-6/12 h-[50rem] bg-cover bg-right flex items-end p-7">
            <div className="">
              <h2 className="text-4xl text-white shadow-black drop-shadow-md">
                Carteras
              </h2>
              <p className="text-white text-2xl shadow-black drop-shadow-md underline cursor-pointer">
                Ver mas {">"}
              </p>
            </div>
          </div>
          <div className="bg-[url('/clutchs.png')] w-6/12 h-[50rem] bg-cover bg-right flex items-end p-7">
            <div className="">
              <h2 className="text-4xl text-white shadow-black drop-shadow-md">
                Clutchs
              </h2>
              <p className="text-white text-2xl shadow-black drop-shadow-md underline cursor-pointer">
                Ver mas {">"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="bg-[url('/straps.png')] w-6/12 h-[50rem] bg-cover bg-right flex items-end p-7">
            <div className="">
              <h2 className="text-4xl text-white shadow-black drop-shadow-md">
                Straps
              </h2>
              <p className="text-white text-2xl shadow-black drop-shadow-md underline cursor-pointer">
                Ver mas {">"}
              </p>
            </div>
          </div>
          <div className="bg-[url('/combos.png')] w-6/12 h-[50rem] bg-cover bg-right flex items-end p-7">
            <div className="">
              <h2 className="text-4xl text-white shadow-black drop-shadow-md">
                Combos
              </h2>
              <p className="text-white text-2xl shadow-black drop-shadow-md underline cursor-pointer">
                Ver mas {">"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-7xl mb-16 text-center">Las más destacadas</h2>
        <img src="/landingpage1.jpg" className="w-[70rem] m-auto" />
        <div className="flex justify-center w-full my-5">
          <button className="w-40 border border-black hover:border-red-600 text-black hover:text-red-600 transition duration-300 rounded-full p-3 text-xl">
            Explorar
          </button>
        </div>
      </section>
      <section></section>
    </>
  );
};
