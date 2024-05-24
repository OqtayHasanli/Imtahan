import React from "react";
import "./footer.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mainfooter">
      <div className="containerfooter">
        <div className="topside">
          <div className="footerrange">
            <div className="basliq">About Us</div>
            <div className="footertext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </div>
          </div>
          <div className="footerrange">
            <div className="basliq">Quick Links</div>
            <div className="footeruldiv">
              <ul className="footerul">
                <li>Sell online</li>
                <li>Features</li>
                <li>Shopping cart</li>
                <li>Store builder</li>
              </ul>
              <ul className="footerul">
                <li>Mobile commerce</li>
                <li>Dropshipping</li>
                <li>Website development</li>
              </ul>
              <ul className="footerul">
                <li>Point of sale</li>
                <li>Hardware</li>
                <li>Software</li>
              </ul>
            </div>
            <div></div>
          </div>
          <div className="footerrange">
            <div className="basliq">Quick Links</div>
            <div className="footeruldiv">
              <ul className="footerul">
                <li>
                  <FaMapMarkerAlt />
                  Sell online
                </li>
                <li>
                  <FaPhoneAlt />
                  +2 392 3929 210
                </li>
                <li>
                  <IoMdMail /> emailaddress@domain.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomside">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</div>
      </div>
    </div>
  );
};

export default Footer;
