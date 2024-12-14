import React from 'react';

function Header() {
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img src="assets/images/logo.png" alt="Chain App Dev" />
              </a>
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#services">Services</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
                <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
                <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><i className="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
              </ul>        
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
