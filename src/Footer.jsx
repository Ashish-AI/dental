import React from "react";
import {Link} from "react-router-dom";

const Footer=()=>{
    return (
        <>
          <footer className="footer-container">
              <div className="logo">
              <i class="fab fa-google-plus-square"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram-square"></i>

              </div>
              <div className="copy">
                  <p>&copy; lifecarehospital.com</p>
              </div>
              <div className="developer">
                Developer: <Link href="https://www.linkedin.com/in/ashish-chaubey-934b1b190/"><i className="fab  class1 fa-linkedin"></i></Link>
              </div>

          </footer>

        </>
    )
}


export default Footer;
