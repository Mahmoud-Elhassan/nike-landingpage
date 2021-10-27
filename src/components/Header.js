import { React, useState } from "react";
//
import logo from "../images/logo.svg";
import menuLogo from "../images/menu-logo.svg";

const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="menu">
                <div className="menu-content">
                    <ul>
                        <li
                            className={`li1 ${menuStatus ? "activeMenu1" : ""}`}
                        >
                            Home
                        </li>
                        <li
                            className={`li2 ${menuStatus ? "activeMenu2" : ""}`}
                        >
                            Men
                        </li>
                        <li
                            className={`li3 ${menuStatus ? "activeMenu3" : ""}`}
                        >
                            Women
                        </li>
                        <li
                            className={`li4 ${menuStatus ? "activeMenu4" : ""}`}
                        >
                            Kids
                        </li>
                    </ul>
                </div>
                <div
                    className={`menu-logo ${menuStatus ? "activeMenu5" : ""}`}
                    onClick={() => setMenuStatus(!menuStatus)}
                >
                    <img
                        className={`menu-logo-img ${
                            menuStatus ? "activeMenu6" : ""
                        }`}
                        src={menuLogo}
                        alt=""
                        onClick={() => setMenuStatus(!menuStatus)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
