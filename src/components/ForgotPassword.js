import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSendCode = async (e) => {
    e.preventDefault();
    setIsCodeSent(true);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Forgot Password</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleSendCode}>
              Send Verification Code
            </button>
          </div>
          {isCodeSent && (
            <div className="form-group mt-3">
              <label>Verification Code</label>
              <div className="d-flex justify-content-between">
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
                <input type="text" className="form-control" maxLength="1" style={{ width: "50px" }} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
