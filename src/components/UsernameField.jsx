import React, { useRef } from "react";

//utility functions
import { getClassName, getIcon } from "../utilis/utils.form";

const checkUsername = (username) => {
  return username.trim().length >= 6 && !username.match(/\s+/);
};

export default function UsernameField({ status, setStatus }) {
  //destructuring {} => if not destructring user (props)
  let username = useRef("");

  return (
    <div className="form_input">
      <label htmlFor="username" className="small">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="Username"
        onChange={(e) => {
          username.current = e.target.value;
          if (checkUsername(username.current)) {
            return setStatus("valid");
          } else {
            return setStatus("");
          }
        }}
      />
      <div className={getClassName(status)}>
        {getIcon(status)}
        <span>At least 6 character</span>
      </div>
    </div>
  );
}
