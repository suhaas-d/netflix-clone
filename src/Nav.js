import React,{useState, useEffect} from 'react'
import "./Nav.css";
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
            window.addEventListener("scroll",() =>{
                if(window.scrollY>100){
                    handleShow(true);
                
                } else handleShow(false);
            });
            return () => {
                window.removeEventListener("scroll");
            };
    },[]);

    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <img
            className = "nav_logo"
            src = "https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png"
            alt = "Netflix Logo"
            />
            <img 
            className="nav-avatar"
            src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt = "Avatar"
            />
        </div>
    )
}

export default Nav
