import { CountryDetails } from "@/app/types/types";
import Link from "next/link";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetails[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241.5 million",
    },
    {
      name: "Australia",
      capital: "Canberra",
      population: "26.6 million",
    },
    {
      name: "Canada",
      capital: "Ottawa",
      population: "39.8 million",
    },
    {
      name:"France",
      capital: "Paris",
      population: "68.3 million",
    },
    {
      name: "China",
      capital: "Beijing",
      population: "1.4 million",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl"> Country Not Found! </h1>
    );
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
  
  
       <div className="relative z-10 text-center mx-10 bg-gray-400 rounded-lg p-6">
        <div className="text-gray-900 text-center text-xl p-4 font-bold">
          <h1 className="m-4"> Name: {country.name}</h1>
          <h1 className="m-4"> Population: {country.population}</h1>
          <h1 className="m-4"> Capital: {country.capital}</h1>
          <Link href="/country">
            <span className="m-2 p-3 bg-gray-800 rounded-md text-base text-white inline-block cursor-pointer hover:bg-gray-700">
              Back
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
  
  
};

export default CountryName;