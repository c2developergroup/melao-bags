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
      <section className="mt-20">
        <img src="/landingpage1.jpg" className="w-[70rem] m-auto" />
        <div className="flex justify-center w-full my-5">
          <button className="w-40 border border-black hover:border-red-600 text-black hover:text-red-600 transition duration-300 rounded-full p-3 text-xl">
            Explorar
          </button>
        </div>
      </section>
      <div className="w-screen">
        <div className="flex justify-center w-full my-5">
          <button className=" w-40 border border-neutral-100 hover:border-white text-neutral-100 hover:text-white hover:bg-neutral-400 hover:bg-opacity-25 transition duration-300 rounded-full p-3 text-xl absolute z-50 mt-[38rem]">
            Personalizar
          </button>
        </div>
      </div>
    </>
  );
};
