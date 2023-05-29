import React, {useState} from 'react';
import classes from './Navbar.module.scss'
import Logo from "../Logo/Logo";
import Callback from "../Callback/Callback";
import ModalForm from "../../Modal/Modal";
import Burger from "../Burger/Burger";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


const Navbar = () => {

    const [burgerIsOpen, setBurgerIsOpen] = useState(false)

    const toggleBurger = () => {
        setBurgerIsOpen(prevState => !prevState)
    }

    return (
        <div className="container">
        <div className={classes.navbar_wrapper}>
            <Logo/>
            <Callback/>
            <ModalForm />
                <Burger open={burgerIsOpen} burger={toggleBurger}/>
                <BurgerMenu menuOpen={burgerIsOpen}/>
        </div>
        </div>
    );
};

export default Navbar;