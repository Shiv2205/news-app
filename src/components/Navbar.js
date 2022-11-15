import logo from '../logo.png';

const Navbar = (props) => {
    let country = props.country.currentCountry;

    if(country !== null){
        switch(country){
            case "fr": country = "France"; break;
            case "us": country = "United States"; break;
            case "ca": country = "Canada"; break;
            case "gb": country = "United Kingdom"; break;
        }
    }
  
 return (
   
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <div className="flex items-center cursor-pointer" onClick={() => props.category("category=general")}>
        <img src={logo} className="h-9 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Express Headlines</span>
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li onClick={() => props.category("category=general")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Country: {country}
            </li>
        </ul>
    </div>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li onClick={() => props.category("category=general")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Home
        </li>
        <li onClick={() => props.category("category=business")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Business
        </li>
        <li onClick={() => props.category("category=entertainment")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Entertainment
        </li>
        <li onClick={() => props.category("category=sports")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Sports
        </li>
        <li onClick={() => props.category("category=health")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Health
        </li>
        <li onClick={() => props.category("category=science")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Science
        </li>
        <li onClick={() => props.category("category=technology")} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 cursor-pointer md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Technology
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
