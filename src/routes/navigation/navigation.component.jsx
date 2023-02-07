import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, LogoContainer,NavLinkContainer,NavLink } from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const   currentUser   = useSelector(selectCurrentUser);
  const {isCartOpen} = useContext(CartContext)
  console.log(currentUser);

  const signOuthandler = async () =>{
    
     await signOutUser(); 
     console.log("s");
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer   to="/"> 
            <CrwnLogo  /> 
        </LogoContainer>
        <NavLinkContainer>
          <NavLink   to="/shop">
            Shop
          </NavLink>

          {currentUser ? (
            <NavLink as='span'  onClick={signOuthandler}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
       {isCartOpen && <CartDropdown/> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
