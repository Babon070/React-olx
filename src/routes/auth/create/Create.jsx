import React from "react";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../../../firebase/firebase";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import instance from "../../../api/instance";


const Create = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://sun1-56.userapi.com/s/v1/ig1/eiKBiufKrF2lYLTeSjGYTLHlwDczW5qAUT0Fi8VXDWR2JK3gtkyZRmnABnfAOU0HdXVnE6Ri.jpg?size=400x400&quality=96&crop=99,99,793,793&ava=1",
  });
  const history = useHistory();

  const signWidthGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        dispatch(
            {
                email: result.user.multiFactor.user.displayName,
                type: "CREATE_NAME_WITH_GOOGLE"
            }
        )
        
        if (result) history.push("/");
        console.log(result.user.multiFactor.user.displayName);
        // console.log(result.user.multiFactor.user);

      })
      .catch(function (error) {
        console.error(error);
      });
    };
    
  const ceateUserWithEmail = (e) => {
    e.preventDefault();
    instance
      .post("/users", formData)
      .then((response) => {
        if (response.data.email) {
          dispatch(
            { 
                email: response.data.email, 
                type: "CREATE_USER",
            });
            console.log(response);
            history.push('/')
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(formData);

  return (
    <div className="auth__create">
      <button onClick={signWidthGoogle} className="auth__google">
        {" "}
        <FcGoogle /> Google bilan hisob yaratish!
      </button>
      <form className="form__auth" onSubmit={ceateUserWithEmail}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {/* <input
          type="url"
          placeholder="Avatar"
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
        /> */}
        <button>Xisob yaratish</button>
      </form>
    </div>
  );
};

export default Create;
