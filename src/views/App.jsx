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
      <section className="p-20 flex">
        <div className="bg-[url('/contact.png')] w-[50%] bg-cover p-20"></div>
        <div className="w-[50%] resp:w-full p-20 mobl:p-10 flex justify-center">
          <div className="w-full">
            <h2 className="md:text-5xl text-3xl text-black mb-5">
              Contáctanos
            </h2>
            <form className="font-['Smooch_Sans']">
              <input
                type="text"
                name="name"
                placeholder="Nombres y Apellidos"
                required
                maxlength="100"
                className="appearance-none border-none text-black mr-3 leading-tight focus:ring-0 focus:outline-none w-full"
              />
              <div className="border-b border-red-600 py-1 px-2 mb-5"></div>
              <input
                type="text"
                name="email"
                placeholder="Correo electrónico"
                required
                maxlength="100"
                className="appearance-none border-none text-black mr-3 leading-tight focus:ring-0 focus:outline-none w-full"
              />
              <div className="border-b border-red-600 py-1 px-2 mb-5"></div>
              <input
                type="text"
                name="number"
                placeholder="Número de teléfono"
                required
                maxlength="100"
                className="appearance-none border-none text-black mr-3 leading-tight focus:ring-0 focus:outline-none w-full"
              />
              <div className="border-b border-red-600 py-1 px-2 mb-5"></div>
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                required
                maxlength="100"
                className="appearance-none border-none text-black mr-3 leading-tight focus:ring-0 focus:outline-none w-full"
              />
              <div className="border-b border-red-600 py-1 px-2 mb-8"></div>
              <div className="mt-5 flex flex-col border rounded-lg border-red-600 p-2 mb-10">
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  className="appearance-none border-none text-black mr-3 leading-tight focus:ring-0 focus:outline-none resize-none"
                  required
                  maxlength="1000"
                  rows="6"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-red-600 rounded-full w-5 h-5 p-[0.2rem] flex justify-center items-center hover:bg-blue-700 cursor-pointer transition duration-300">
                    <img src="send.svg" class="ml-[0.1rem] w-[80%] h-auto" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
