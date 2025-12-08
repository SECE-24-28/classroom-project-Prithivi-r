import React, { useState } from "react";
import { FormContainer } from "./use-state-style";

const UsestateformComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <FormContainer>
      <h1>
        Aptitude Guru Hem <span>LMS</span>
      </h1>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select College</label>
            <select>
              <option value="">Select College</option>
              <option>AGH B2C</option>
              <option>IIT Delhi</option>
              <option>IIT Bombay</option>
              <option>NIT Trichy</option>
              <option>BITS Pilani</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Passout Year</label>
            <select>
              <option value="">Select Passout Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Department</label>
            <select>
              <option value="">Select Department</option>
              <option>CSE</option>
              <option>ECE</option>
              <option>EEE</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ug or Pg</label>
            <select>
              <option value="">Select UG/PG</option>
              <option>UG</option>
              <option>PG</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <div className="mobile-group">
              <select>
                <option>IND</option>
              </select>
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter the password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁 Show
            </button>
          </div>
          <div className="form-group password-group">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter the confirm password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁 Show
            </button>
          </div>
        </div>

        <ul className="password-requirements">
          <li>minimum 8 character</li>
          <li>one lowercase character</li>
          <li>one special character</li>
          <li>one uppercase character</li>
          <li>one number</li>
        </ul>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </FormContainer>
  );
};

export default UsestateformComponent;