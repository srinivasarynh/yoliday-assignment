import "./sidebar.css"
import logo from "../../assets/Group.svg";
import bellsvg from "../../assets/iconoir_bell.svg";
import profileimg from "../../assets/5358b1c4de8696613bd0b067440bec38.jpeg";
import downarrow from "../../assets/lets-icons_arrow-drop-down.svg";
import dashsvg from "../../assets/pajamas_overview.svg";
import campaignsvg from "../../assets/material-symbols_campaign.svg";
import inputsvg from "../../assets/material-symbols_design-services-outline-sharp.svg"
import contactssvg from "../../assets/material-symbols_contacts.svg"
import homesvg from "../../assets/Home svg@2x.svg"
import portfoliasvg from "../../assets/Portfolia svg.svg"
import inpsvg from "../../assets/Input svg.svg"
import profilesvg from "../../assets/Profile svg.svg"
import Header from "../header/Header";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="topbar">
                <div className="topbar_bell">
                    <img src={bellsvg} alt="bell icon" />
                </div>
                <div className="topbar_profile">
                    <img src={profileimg} alt="profile img" />
                    <div className="profile_text">
                        <p >Lorem ips</p>
                        <p>manager</p>
                    </div>
                </div>
                <div className="topbar_arrow">
                    <img src={downarrow} alt="svg" />
                </div>
            </div>
            <div className="sidenav">
                <div className="logobox">
                    <img src={logo} alt="logo" />
                    <p>LOGO</p>
                </div>
                <nav className="sidebar-nav--res">
                    <ul className="side-nav--res">
                        <li><a href="#"><img src={homesvg} alt="svg" /><span>Home</span></a></li>
                        <li><a className="side-nav--res-active" href="#"><img src={portfoliasvg} alt="svg" /><span>Portfolio</span></a></li>
                        <li><a href="#"><img src={inpsvg} alt="svg" /><span>input</span></a></li>
                        <li><a href="#"><img src={profilesvg} alt="svg" /><span>Profile</span></a></li>
                    </ul>
                </nav>
                <nav className="sidebar-nav">
                    <ul className="side-nav">
                        <li className="side-nav__item ">
                            <a href="#" className="side-nav__link">
                                <img className="side-nav__icon" src={dashsvg} alt="dash svg" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="side-nav__item side-nav__item--active">
                            <a href="#" className="side-nav__link">
                                <img className="side-nav__icon" src={campaignsvg} alt="dash svg" />

                                <span>Portfolio</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <img className="side-nav__icon" src={inputsvg} alt="dash svg" />

                                <span>Inputs</span>
                            </a>
                        </li>
                        <li className="side-nav__item">
                            <a href="#" className="side-nav__link">
                                <img className="side-nav__icon" src={contactssvg} alt="dash svg" />

                                <span>Profile</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="content">
                <Header />
            </div>

        </div>
    )
}

export default Sidebar;