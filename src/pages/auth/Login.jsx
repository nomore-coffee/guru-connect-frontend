import React, { useState } from "react";
import "./Login.scss";
import { FaUserSecret, FaMailBulk } from "react-icons/fa";
import get_logininfo from "../../services/api";
import { useDispatch } from "react-redux";
import { loginToggle, tokenDataToggle } from "../../Redux/Actions/dataAction";
// import CustomToast from '../../assets/CustomToast';
import CustomLoadingAnimation from '../../assets/CustomToast/CustomLoadingAnimation';

const initialValue = {
  email: "",
  password: "",
};
const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(initialValue);
  const { email, password } = user;
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login_user = async () => {
    try {
      setLoading(true);
      console.log("DSD>>", user);
      const res = await get_logininfo(user);
      console.log("ASDSDSAD",res)
      if(res.StatusCode=404){
        console.log("ERRRE")
      }else{
        let orgData = {
          emailId: res.data.idToken.payload.emailId,
          organisationId: res.data.idToken.payload.nickname,
          name: res.data.idToken.payload.name,
          role: res.data.idToken.payload["custom:Role"],
        };
        let tokenData = {
          accessToken: { jwtToken: res.data.accessToken.jwtToken },
          idToken: { jwtToken: res.data.idToken.jwtToken },
        };
        console.log("ORGDATA", orgData);
        console.log("tokenData", tokenData);
  
        dispatch(loginToggle(orgData));
        console.log("Successfully login");
        dispatch(tokenDataToggle(tokenData));

      }
    } catch (error) {}
    // history.push("/admin/testStatus");
    setLoading(false);
  };
  return (
    <div>
      <div className="login">
        <div className="box">
          <div className="image center_items">
            <img src="/images/img-01.png" alt="IMG" />
          </div>
          <div className="form center_items">
            <span className="title">LOGIN</span>
            <form className="login-form">
              <div className="email-main">
                <input
                  onChange={(e) => onValueChange(e)}
                  className="email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={email}
                />
                {/* <span className="focus-input"></span>  */}
                <span className="symbol-input">
                  <FaMailBulk />
                </span>
              </div>
              <div className="password-main">
                <input
                  onChange={(e) => onValueChange(e)}
                  className="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                />
                <span className="symbol-input">
                  <FaUserSecret />
                </span>
              </div>
              <div className="sumit">
                <button
                  onClick={() => login_user()}
                  type="submit"
                  value="Login"
                  className="sumit-button"
                >
                  LOGIN
                </button>
              </div>
              <div className="forget">
                <a href="www.google.com" className="foret-text">
                  FORGET USERNAME/PASSWORD
                </a>
              </div>
            </form>
            <div className="create">
              <a href="www.goole.com" className="create-text">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <CustomLoadingAnimation isLoading={loading} />   */}

    </div>
  );
};

export default Login;
