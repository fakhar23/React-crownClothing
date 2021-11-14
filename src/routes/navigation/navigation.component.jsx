import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/car-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { onSignOutStart } from "../../store/user/user.saga";

import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles";
import { singOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  // runs whenever a state updates
  const currentUser = useSelector(selectCurrentUser);
  // console.log(currentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(singOutStart());

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
