import React from "react";
//import swal from 'sweetalert2'

//import Logo from '../assets/images/logo.png'
import Users from '../assets/images/icons/user-icon.png'
import '../assets/styles/components/Header.css'

function Header(){
  
  return (
    <header className="header">
      <img
        className="header_logo"
        src=""
        alt="Logo Matflix"
      />
      <div className="menu">
        <div className="profile-conteiner">
          <img src={Users} id="avatar" alt="ImagenProfile" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>
          <li>
              <a id="button-sign">Ingresar</a>
          </li>
        </ul>
      </div>
    </header>
  )
};

export default Header;
