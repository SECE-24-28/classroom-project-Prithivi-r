import React, { useState } from "react";
import axios from "axios";
const UserFetchViaEmail = () => {
  const [userDetails, setUserDetails] = useState([]);
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;
    console.log("The email value frontend:", email);

    try {
      const pushDetails = await axios.get(
        `http://localhost:21000/api/v1/User/getUserDetails/${email}/${mobile}`
      );
      // console.log("The push details:", pushDetails);

      if (pushDetails.data.success === true) {
        //console.log("The process is successful");
        setUserDetails(pushDetails.data.data);
      } else {
        console.log("Error occured");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };
  console.log("The email DETAILS:", userDetails);

  return (
    <div style={{ padding: '20px', fontSize: '16px' }}>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <label htmlFor="email" style={{ fontWeight: 'bold', color: '#000' }}>Email</label>
        <input type="email" id="email" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <label htmlFor="mobile" style={{ fontWeight: 'bold', color: '#000' }}>Mobile</label>
        <input type="number" id="mobile" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#fff', color: '#000', border: '2px solid #000', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};
export default UserFetchViaEmail;