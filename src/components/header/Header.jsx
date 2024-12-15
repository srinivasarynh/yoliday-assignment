import { useState, useEffect } from "react";

import './header.css';
import searchsvg from "../../assets/Group 16.svg";
import notificationsvg from "../../assets/ic_baseline-notifications.svg";
import shoppingsvg from "../../assets/ic_round-shopping-bag.svg"
import CardComponent from '../card/CardComponent';

function Header() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await fetch('https://yoliday-backend-ernv.onrender.com/api/v1/portfolio');
        const responseData = await response.json();
        setData(responseData.data.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="header">
            <div className="header_titlebox">
                <div className="header_title">
                    <p className='header_title--text'>Profile</p>
                </div>
                <div className="header_icons">
                    <img className="header_icon" src={shoppingsvg} alt="svg" />
                    <img className="header_icon" src={notificationsvg} alt="" />
                </div>
            </div>
            <div className="header_navigationbox">
                <nav className='header_nav'>
                    <ul>
                        <li className="item"><a className='aa' href="#">Project</a></li>
                        <li className="item"><a className='aa' href="#">Saved</a></li>
                        <li className="item"><a className='aa' href="#">Shared</a></li>
                        <li className="item"><a className='aa' href="#">Achievment</a></li>
                    </ul>
                </nav>
                <form className='header_search' action="#">
                    <label htmlFor="searchbar"></label>
                    <input name='searchbar' type="text" placeholder='Search a project' />
                    <img className='search_icon' src={searchsvg} alt="search icon" />
                </form>
            </div>
            <div className='headercard_contents'>

                {data.map((res) => (
                    <div className='headercard_content' key={res.id}>
                        <CardComponent data={res} />
                    </div>
                ))}

            </div>
        </div>
    )
}


export default Header;
