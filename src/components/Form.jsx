import React from "react";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import EmailField from "./EmailField";

export default function Form() {
  return (
    <form>
      <div className="form_header">
        <h2>Sign Up</h2>
      </div>
      <div className="form_body">
        <UsernameField />
        <EmailField />
        <PasswordField />
      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
    </form>
  );
}
