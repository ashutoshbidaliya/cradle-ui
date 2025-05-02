import React from "react";
import { useState, useNavigate } from "react";
import axios from "axios";

export const Register = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("user");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        url,
        {
          firstName,
          lastName,
          email,
          password,
          role,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        alert("Registration successful!");
        navigate("/dashboard");
      } else {
        alert("Registration failed. Please try again.", response);
      }
    } catch (error) {
      console.error("Error during signup", error);
      // Display error message or handle as needed
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  }; 
  return (
  
  );
};
