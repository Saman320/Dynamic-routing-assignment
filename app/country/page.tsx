import NavbarLi from '../component/NavbarLi';

const Country = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main content */}
      <div className="relative z-10 p-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-8 shadow-md p-4 bg-gradient-to-r from-gray-600 to-gray-400 bg-opacity-70 rounded-lg hover:text-gray-900">
          List of Countries
        </h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div className="relative inline-flex text-white bg-gradient-to-r from-gray-800 to-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-md text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-black transform hover:scale-105">
           <NavbarLi href="/country/pakistan" name="Pakistan" />
          </div>
          <div className="relative inline-flex text-white bg-gradient-to-r from-gray-800 to-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-md text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-black transform hover:scale-105">
            <NavbarLi href="/country/australia" name="Australia" />
          </div>
          <div className="relative inline-flex text-white bg-gradient-to-r from-gray-800 to-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-md text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-black transform hover:scale-105">
            <NavbarLi href="/country/canada" name="Canada" />
          </div>
          <div className="relative inline-flex text-white bg-gradient-to-r from-gray-800 to-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-md text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-black transform hover:scale-105">
            <NavbarLi href="/country/france" name="France" />
          </div>
          <div className="relative inline-flex text-white bg-gradient-to-r from-gray-800 to-white border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-md text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:text-black transform hover:scale-105">
            <NavbarLi href="/country/china" name="China" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
