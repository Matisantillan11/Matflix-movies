import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Search from "./Search";
//firebase
import firebase from "firebase/app";
import 'firebase/auth'
//sweetalert
import Swal from 'sweetalert2'
//import Logo from '../assets/images/logo.png'
import Users from '../assets/images/icons/user-icon.png'
import '../assets/styles/components/Header.css'
class Header extends Component{

  componentDidMount(){
    
      firebase.auth().onAuthStateChanged(user =>{
        const avatar = document.getElementById('avatar')
        const loginbutton = document.getElementById('login');
        if(user){
          avatar.src = user.photoURL
          loginbutton.innerText="Salir"
          loginbutton.onclick = this.LogOut
        }else{
          avatar.src = Users
          loginbutton.innerText="Ingresar"
          loginbutton.onclick = this.loginWithGoogle
          avatar.style = "border-radius: 25px"
        }
      })
  }

  LogOut(){
    firebase.auth().signOut().then(() => {
        const avatar = document.getElementById('avatar');
        avatar.src=Users
        Swal.fire({
          icon:"success",
          text: 'Has cerrado sesión correctamente'
        }).then(result =>{
          if(result.isConfirmed){
            window.location.href = window.location.href
          }
        })
        
      }).catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  };
  
  loginWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
          const avatar = document.getElementById('avatar');
          avatar.src=result.user.photoURL
          avatar.style = "border-radius: 25px"
          Swal.fire({
            icon: 'success',
            text: `Bienvenido ${result.user.displayName} 😎 que disfrutes de todos nuestras peliculas`
          })
      }).catch((error) => console.log(error.message));
  };

  render(){
  return (
    <header className="header">
      <Link to="/"
        className="header_logo"
      ></Link>
      <Search send={this.props.sendInfo}
      onChange= {this.props.onChange}
      search={this.props.search}
       />
      <div className="menu">
        <div className="profile-conteiner">
          <img src={Users} id="avatar" alt="ImagenProfile" />
        </div>
        <ul>
          <li><a>Mis favoritos</a></li>
          <li id="login">Ingresar</li>
        </ul>
      </div>
    </header>
  )
}
};

export default Header;
