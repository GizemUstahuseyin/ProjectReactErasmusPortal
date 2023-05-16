import { Link, Outlet } from "react-router-dom";
import React, { useState } from 'react';
import './style.css';
import { FaUserPlus } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaPaste } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { FaSignOutAlt } from "react-icons/fa";

var isLogin = sessionStorage.getItem("isLogin");

if (isLogin === "false") {
  sessionStorage.setItem("isLogin", "false");
  sessionStorage.setItem('person_info', null);

}

 function Sidebar(props) {

  const menuItems = [    
    { id: 1, title: "Anasayfa ", link: "/Anasayfa", isLoggedIn:false, icon: <FaHome style={{fontSize: "20px", marginLeft:"25px"}}/>}, 
    { id: 2, title: "Başvurular ", link: "/Basvurular", isLoggedIn:true, icon: <FaPaste style={{fontSize: "20px" , marginLeft:"25px"}}/>},   
    { id: 3, title: "Duyurular ", link: "/Duyurular", isLoggedIn:false, icon:<BsBellFill style={{fontSize: "20px" , marginLeft:"25px"}}/>},
    { id: 4, title: "İletişim ", link: "/Iletisim", isLoggedIn:false, icon:<MdHelp style={{fontSize: "20px", marginLeft:"25px"}}/>},
    { id: 5, title: "Profil ", link: "/Profil", isLoggedIn:true, icon:<FaUsers style={{fontSize: "20px", marginLeft:"25px"}}/>},
  ];

    const buttons = [
      { id: 1, title: "Kayıt Ol ", link: "/Kayit",isLoggedIn:false, icon:<FaUserPlus style={{fontSize: "20px", marginLeft:"37px"}}/>},
      { id: 2, title: "Giriş Yap ", link: "/Giris", isLoggedIn:false, icon:<FaSignInAlt style={{fontSize: "20px", marginLeft:"30px"}}/>},
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => 
    {
      setIsOpen(!isOpen);
    }

          const logOut = () => {
          var isLogin = sessionStorage.getItem("isLogin");
          isLogin = false;
          sessionStorage.setItem("isLogin", isLogin);
          document.getElementById("logout_Btn").style.display = "none";
          document.getElementById("btndiv").style.display = "inline-block";  
          window.location.href = '/Giris';
          sessionStorage.setItem("user_info", null);

      
    }

  return (
    <>
     <header className="p-3 text-bg-dark">
    <li style={{  borderBottom: "none",listStyle:"none",fontSize: "20px",color:"white",textAlign:"center"}}><BsGlobeAmericas style={{margin:"0"}}/>KADİR HAS ÜNİVERSİTESİ ERASMUS PROGRAMI</li>
       
  </header>
    <div className="container-fluid bg-dark" style={{float:"left"}}  id="back">
        <div className="row flex-nowrap"></div>
            <div className="d-flex flex-column align-items-center align-items-sm-start text-white ">
                <div className={`sidebar bg-dark ${isOpen ? 'open' : ''}` }>
                    <ul style={{textAlign:"end"}}>
                      <li style={{borderBottom: "none"}}>
                        <button 
                        type="button" 
                        className="btn btn-dark" 
                        style={{fontSize: "20px"}} 
                        onClick={toggleSidebar}>,
                        <TfiAngleDoubleRight/>
                        </button>
                      </li>
                        {menuItems.map((props) => 
                          !props.isLoggedIn || isLogin === "true" ? (
                          <li key={props.id} className="py-3">
                            <Link className="text-white text-decoration-none" to={props.link}>{props.title} {props.icon}</Link>
                            <hr />
                          </li>
                        ):null)}  
                </ul>

                <ul id="btndiv" className="mb-5 ms-0" style={{textAlign:"end"}}>
                  <li>
                  {buttons.map((button) =>
                    (button.isLoggedIn === false) && (isLogin !== "true") && (
                      <Link key={button.id} to={button.link}  className="btn btn-light" style={{margin:"5px",textAlign:"end"}} >
                        {button.title} {button.icon}
                      </Link>
                    )
                  )}
                </li></ul>     
                
                

                {isLogin === "true" && (
                  <div className="d-grid gap-2">
                    <button class="btn btn-secondary" style={{width:"55%",textAlign:"center",marginLeft:"38%"}} onClick={logOut} className="btn btn-secondary" id="logout_Btn">
                      Çıkış Yap<FaSignOutAlt style={{size:"40px",marginLeft:"22%"}}/></button>
                  </div>
                )}
              </div>
              
              <hr />

          <div className="col-10" id="outlet">
            <Outlet />
          </div>
        </div>
    </div> 
    </>
  );

  
}
export default Sidebar;