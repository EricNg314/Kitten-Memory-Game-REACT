import React from "react";
import "./Footer.css";
import githubLogo from "../../images/github.png";
import linkedInLogo from "../../images/linkedin.png";

const imgStyle = {
    width: '30%'
}


const Footer = () => {

    return (

        <footer className="sticky-bottom pb-0 footerContent" >
            <div className="">
                <h4 className="font-weight-bold text-center w-100 border-bottom">
                    Let's Connect!
            </h4>
            </div>
            <div className="d-flex justify-content-center mx-0">
                <div className="mx-auto text-center">
                    <a className="" href="https://github.com/EricNg314">
                        <img className="img-fluid w-25 hvr-grow m-1" src={githubLogo} alt="Github Logo"  />
                    </a>
                    <a className="" href="https://www.linkedin.com/in/ng-eric/">
                        <img className="img-fluid w-25 hvr-grow m-1" src={linkedInLogo} alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
        </footer>
    )

}
export default Footer;