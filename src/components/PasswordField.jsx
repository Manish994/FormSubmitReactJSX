import React, { useRef } from "react";

//import utility function
import { getClassName, getIcon } from "../utilis/utils.form";

const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

const checkPassword = (password) => {
  let charRegexp = new RegExp(/[a-z]+/, "i");
  let numRegexp = new RegExp(/\d+/);
  let symRegexp = new RegExp(/\w+/);
  let spaceRegexp = new RegExp(/\s+/);

  let output = {
    validChar: password.match(charRegexp),
    validNum: password.match(numRegexp),
    validSym: password.match(symRegexp),
    validSpace: !password.match(spaceRegexp),
    validLength: password.trim().length >= 8,
  };

  return output;
};

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
          onChange={(e) => {
            password.current = e.target.value;
            let check = checkPassword(password.current);

            let _status = {
              charCheck: check.validChar ? "valid" : "",
              numCheck: check.validNum ? "valid" : "",
              symCheck: check.validSym ? "valid" : "",
              spaceCheck: check.validSpace ? "valid" : "",
              lencheck: check.validLength ? "valid" : "",
            };

            if (!_status.spaceCheck) return;

            setStatus(_status);

            if (
              confirmPassword.current !== "" &&
              !checkPasswordMatch(password.current, confirmPassword.current)
            ) {
              setConfirmStatus("");
            } else if (
              confirmPassword.current !== "" &&
              checkPasswordMatch(password.current, confirmPassword.current)
            ) {
              setConfirmStatus("valid");
            }
          }}
        />
        <div className={getClassName(status.lencheck)}>
          {getIcon(status.lencheck)}
          <span>At least 8 character</span>
        </div>
        <div className={getClassName(status.charCheck)}>
          {getIcon(status.charCheck)}
          <span>Must Contain Letter</span>
        </div>
        <div className={getClassName(status.numCheck)}>
          {getIcon(status.numCheck)}
          <span>Must Contain Numbers</span>
        </div>
        <div className={getClassName(status.symCheck)}>
          {getIcon(status.symCheck)}
          <span>Must Contain Symbol</span>
        </div>
      </div>
      <div className="form_input mt-3">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name="confirm-password"
          onChange={(e) => {
            confirmPassword.current = e.target.value;
            if (checkPasswordMatch(password.current, confirmPassword.current)) {
              return setConfirmStatus("valid");
            }
            return setConfirmStatus("");
          }}
        />
        <div className={getClassName(confirmStatus)}>
          {getIcon(confirmStatus)}
          <span>Password match</span>
        </div>
      </div>
    </>
  );
}
