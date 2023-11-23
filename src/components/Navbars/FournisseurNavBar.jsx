import UserDropdown from 'components/Dropdowns/UserDropdown';
import React from 'react'
import { useHistory } from 'react-router-dom';

export const FournisseurNavBar = () => {
    const storedUser = localStorage.getItem('user');
    var user = null;
    const history= useHistory();
    if (storedUser){
      user = JSON.parse(storedUser);
    }
    else {
      history.push("/");
    }
    return (
      <>
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
          <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
            {/* Brand */}
            <a
              className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
             Fournisseurs & Produits
            </a>
            {/* Form */}
            <div className=" w-72 flex-row flex-wrap items-center lg:ml-auto mr-3 text-white font-normal">
              {/* <div className="relative flex w-full flex-wrap items-stretch"> */}
              {`Poste: ${user.poste}, Service: ${user.service}`}
            
              {/* </div> */}
            </div>
            {/* User */}
            <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
              <UserDropdown />
            </ul>
          </div>
        </nav>
        {/* End Navbar */}
      </>
    )
}

