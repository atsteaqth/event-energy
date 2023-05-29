import "hamburgers/_sass/hamburgers/hamburgers.scss";
import classes from './Burger.module.scss'


const Burger = (props) => {
    return (
        <div className={classes.burger_wrapper}>
        <button onClick={props.burger}
                className={`hamburger hamburger--collapse ${props.open ? 'is-active' : ' '}  ${classes.burger}`}
                 type="button">
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
            </span>
        </button>
        </div>
    );
};

export default Burger;