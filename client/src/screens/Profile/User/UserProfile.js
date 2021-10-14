import React, { useState, useEffect } from "react";
import Details from "./Details";
import Addresses from "./Addresses";
import Orders from "./Orders";
import { logout } from "../../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import Request from "./Request";
import { Container } from "react-bootstrap";
import classes from "../../ProductScreen/ProductScreen.module.css";

const UserProfile = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const [selection, setSelection] = useState("1");

  const changeSelection = (e) => {
    setSelection(e.target.getAttribute("data-selection"));
  };

  let selectionShow;
  if (selection === "1") {
    selectionShow = <Details></Details>;
  } else if (selection === "2") {
    selectionShow = <Addresses />;
  } else if (selection === "3") {
    selectionShow = <Orders />;
  } else if (selection === "4") {
    selectionShow = <Request />;
  }

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <Container>
      <div className={classes["selection-container"]}>
        <ul className={classes.navSelection}>
          <li
            className={classes.navItem}
            data-selection="1"
            onClick={changeSelection}
          >
            User Profile
          </li>
          <li
            className={classes.navItem}
            data-selection="2"
            onClick={changeSelection}
          >
            User Addresses
          </li>

          <li
            className={classes.navItem}
            data-selection="3"
            onClick={changeSelection}
          >
            User Order
          </li>
          <li
            className={classes.navItem}
            data-selection="4"
            onClick={changeSelection}
          >
            User Request
          </li>
        </ul>
        {selectionShow}
      </div>
    </Container>
  );
};

export default UserProfile;
