import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavElements";

// import Newsdata from "./data"

const Header = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Relevance News</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                        
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>   
           
           </>
    )
}

export default Header;
