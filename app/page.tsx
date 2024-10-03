export default function Home() {
  return (
    <div
      className="flex items-center justify-center relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered content */}
      <div className="bg-gradient-to-r from-gray-400 to-white  p-10 rounded-lg shadow-lg max-w-md text-center relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 hover:text-gray-600">
          Dynamic Routing Assignment
        </h1>
        <h3 className="text-4xl font-bold text-gray-800 mb-4 hover:text-gray-600">
          Class 4
        </h3>
        <p className="text-lg text-gray-600 hover:text-gray-800">
          Created by Saman Siddiqui
        </p>
      </div>
    </div>
  );
}
