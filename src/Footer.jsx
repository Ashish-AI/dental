import React from "react";
import {Link} from "react-router-dom";


const Footer=()=>{
    return (
        <>
<footer className="page-footer font-small special-color-dark pt-4">

  <div className="container">

    <ul className="list-unstyled list-inline text-center">
      <li className="list-inline-item">
        <Link className="btn-floating btn-fb mx-1">
          <i className="fab fa-facebook-f"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-tw mx-1">
          <i className="fab fa-twitter"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-gplus mx-1">
          <i className="fab fa-google-plus-g"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-li mx-1">
          <i className="fab fa-linkedin-in"> </i>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link className="btn-floating btn-dribbble mx-1">
          <i className="fab fa-dribbble"> </i>
        </Link>
      </li>
    </ul>

  </div>

  <div className="main-footer">

  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link href="#"> lifecarehospital.com</Link>
  </div>
  <div className="developer  py-3 text-center">
        Developer: <Link href="#">  </Link>
  </div>
  </div>

</footer>

        </>
    )
}

export default Footer;