import React, { useRef } from "react";

//utility function
import { getClassName, getIcon } from "../utilis/utils.form";

const checkEmail = (email) => {
  let regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
  return email.match(regexp);
};

export default function EmailField({ status, setStatus }) {
  let email = useRef("");
  return (
    <div className="form_input">
      <pre>{JSON.stringify(email)}</pre>
      <label htmlFor="email" className="mt-3">
        Email:
      </label>
      <input
        type="text"
        className="form-control"
        name="email"
        placeholder="example@example.com"
        onChange={(e) => {
          email.current = e.target.value;
          if (checkEmail(email.current)) {
            return setStatus("valid");
          }
          return setStatus("");
        }}
      />
      <div className={getClassName(status)}>
        {getIcon(status)}
        <span>Email is valid</span>
      </div>
    </div>
  );
}
