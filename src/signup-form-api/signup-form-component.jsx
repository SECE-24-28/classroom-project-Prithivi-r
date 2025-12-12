import React from "react";

const SignupFormComponent = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.target.firstname.value,
      email: e.target.email.value,
      secondName: e.target.secondname.value,
      mobile: e.target.mobile.value,
      password: e.target.password.value,
    };
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: '20px', color: '#000080', fontSize: '16px' }}>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
        <input type="text" id="email" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <label htmlFor="firstname" style={{ fontWeight: 'bold' }}>First name</label>
        <input type="text" id="firstname" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <label htmlFor="secondname" style={{ fontWeight: 'bold' }}>Second name</label>
        <input type="text" id="secondname" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <label htmlFor="mobile" style={{ fontWeight: 'bold' }}>Mobile number</label>
        <input type="number" id="mobile" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label>
        <input type="password" id="password" style={{ padding: '8px', backgroundColor: '#f0f0f0', border: '2px solid #ccc', color: '#000' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};
export default SignupFormComponent;