import React from 'react'

export default function Employee() {
    const [data, setData] = React.useState({
        "firstName": "John",
        "lastName": "Doe",
    });
    const handleFirstName = (e) => {
        setData({
            ...data,
            firstName: e.target.value
        });
    }
    const handleLastName = (e) => {
        setData({
            ...data,
            lastName: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form submitted with data: ", data);
        // You can add further processing here, like sending data to an API
    }
  return (
    <div className='employee-form-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={data.firstName}
          onChange={handleFirstName}
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={data.lastName}
          onChange={handleLastName}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
