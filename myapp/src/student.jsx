import React from 'react'

export default function student() {
    const [data, setData] = React.useState({
        "firstName": "Digvijay",
        "lastName": "Chaudhary",
        "age": 20,
        "course": "ReactJS",
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
const handleAge = (e) => {
    setData({
        ...data,
        age: e.target.value
    });
}
const handleCourse = (e) => {
    setData({
        ...data,
        course : e.target.value
    });
  }
  
const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", data);
}
  return (
    <div>
      
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

        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={data.age}
          onChange={handleAge}
          />

        <label htmlFor="course">Course: </label>
        <input
          type="text"
            name="course"
            id="course"
            value={data.course}
            onChange={handleCourse}
        />

        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
