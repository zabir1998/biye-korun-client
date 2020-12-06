import React, { useContext, useState } from "react";
import Modal from "react-modal";
import google from "../../../images/google.png";
import fb from "../../../images/fb.png";
import apple from "../../../images/apple.png";
import { useGoogleLogin } from "react-google-login";

import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { refreshTokenSetup } from "../../../utils/refreshTokenSetup";
import { UserContext } from "../../../App";

const clientId =
  "39435938639-2kvqil8o2l3sj1esmdldqrm9mrsnublm.apps.googleusercontent.com";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  borderRadius: "100px",
};

Modal.setAppElement("#root");

const Login = ({ modalIsOpen, closeModal }) => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  // const { loggedInUser, setLoggedInUser } = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    console.log("ACCESS TOKEN:", res.accessToken);
    console.log("Response", res);
    console.log("Token", res.tokenId);

    refreshTokenSetup(res);
    const signedInUser = {
      name: res.profileObj.name,
      email: res.profileObj.name,
      accessToken: res.accessToken,
    };
    setLoggedInUser(signedInUser);
    storeAuthToken();
    closeModal();

    history.replace(from);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢`);
  };

  const storeAuthToken = () => {
    // console.log(loggedInUser.accessToken);
    // console.log(loggedInUser.email);
    localStorage.setItem("token", loggedInUser.accessToken);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  // const handleGoogleSignIn = () => {
  //     fetch("https://biyekorun-staging.techserve4u.com/google")
  //       .then((response) => response.json())
  //       .then((response) => console.log(response));
  //   fetch("https://biyekorun-staging.techserve4u.com/google", {
  //     method: "GET",
  //     headers: {
  //       Authorization: "{Bearer Token}",
  //     },
  //   }) //token without '{}'
  //     .then((response) => console.log(response.access_token));
  // };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="row d-flex  mr-2 justify-content-end">
          <button className="btn btn-primary closing-btn " onClick={closeModal}>
            X
          </button>
        </div>
        <h2 className="text-center brand-text mb-3">BiyeKorun</h2>
        <p className="text-center brand-text mb-3">
          Log in to Your Biye Korun Account
        </p>

        <Link onClick={signIn} className="social-link">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3 ">
              <img className="social-icon" src={google} alt="google"></img>
            </div>
            <div>Continue with Google</div>
          </div>
        </Link>
        <Link className="social-link" to="/">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3">
              <img className="social-icon" src={apple} alt="apple"></img>
            </div>
            <div className="">Continue with Apple</div>
          </div>
        </Link>
        <Link className="social-link" to="/">
          <div className="row social-row mb-3 shadow d-flex justify-content-center align-items-center">
            <div className="flex-left mr-3">
              <img className="social-icon" src={fb} alt="fb"></img>
            </div>
            <div className="">Continue with Facebook</div>
          </div>
        </Link>
      </Modal>
    </div>
  );
};

export default Login;
