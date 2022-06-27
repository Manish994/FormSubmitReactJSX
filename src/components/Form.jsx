import React, { useState } from "react";
//components
import UsernameField from "./UsernameField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";

export default function Form() {
  //status
  const [usernameStatus, setUsernameStatus] = useState("");
  const [emailStatus, setEmailStatus] = useState("");
  //i'm showing 4 different error msg in password so use object instead
  const [passwordStatus, setPasswordStatus] = useState({});
  const [confirmPasswordStatus, setConfirmPasswordStatus] = useState("");
  return (
    <form>
      <div className="form_header">
        <h2>Sign Up</h2>
      </div>
      <div className="form_body">
        <UsernameField status={usernameStatus} setStatus={setUsernameStatus} />
        <EmailField status={emailStatus} setStatus={setEmailStatus} />
        <PasswordField
          status={passwordStatus}
          setStatus={setPasswordStatus}
          confirmStatus={confirmPasswordStatus}
          setConfirmStatus={setConfirmPasswordStatus}
        />
      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
    </form>
  );
}
