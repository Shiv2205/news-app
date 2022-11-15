import logo from "../logo.png";

const Navbar = (props) => {
  let country = props.country.currentCountry;

  if (country !== null) {
    switch (country) {
      case "fr":
        country = "France";
        break;
      case "us":
        country = "United States";
        break;
      case "ca":
        country = "Canada";
        break;
      case "gb":
        country = "United Kingdom";
        break;
    }
  }

  return (
    <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => props.category("category=general")}
        >
          <img src={logo} className="h-9 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Express Headlines
          </span>
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
           
            <li>
                <ul className="flex">
                    <li className="text-lg pt-2 font-medium text-white">
                 Country:
                    </li>
                    <li className="ml-3">
                    <select onChange={(e) => props.country.switchCountry(e.target.value)}
                id="countries"
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="country=us">United States</option>
                <option value="country=ca">Canada</option>
                <option value="country=fr">France</option>
                <option value="country=gb">United Kingdom</option>
              </select>
                    </li>
                </ul>
              
              
            </li>
          </ul>
        </div>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li
              onClick={() => props.category("category=general")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Home
            </li>
            <li
              onClick={() => props.category("category=business")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Business
            </li>
            <li
              onClick={() => props.category("category=entertainment")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Entertainment
            </li>
            <li
              onClick={() => props.category("category=sports")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Sports
            </li>
            <li
              onClick={() => props.category("category=health")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Health
            </li>
            <li
              onClick={() => props.category("category=science")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Science
            </li>
            <li
              onClick={() => props.category("category=technology")}
              className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Technology
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
