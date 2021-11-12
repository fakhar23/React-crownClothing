import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/car-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { userContext } from "../../contexts/user.context";
import { CartContext, CartProvider } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(userContext);
  // console.log(currentUser);

  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    const res = await signOutUser();

    console.log(res);
  };
  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <span as="span" className="nav-link" onClick={signOutHandler}>
              {" "}
              {/* as is given by stled compoenets and it gives us option to render html objects */}
              SIGN OUT
            </span>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      {/* Outlet is like a placeholder react, here differetn paes like home/shope will be rendered */}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
