import React, { useRef } from "react";

//import utility function
import { getClassName, getIcon } from "../utilis/utils.form";
export default function PasswordField({
  status,
  setStatus,
  confirmStatus,
  setConfirmStatus,
}) {
  const password = useRef("");
  const confirmPassword = useRef("");
  return (
    <>
      <div className="form_input mt-3">
        <label htmlFor="password" className="small">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter Password"
        />
      </div>
      <div className="form_input mt-3">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name="confirm-password"
        />
        <div className={getClassName(confirmStatus)}>
          {getIcon(confirmStatus)}
          <span>Password match</span>
        </div>
      </div>
    </>
  );
}
