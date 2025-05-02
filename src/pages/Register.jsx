import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

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
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <div className="font-bold text-4xl pt-4 pb-2">{"Register"}</div>
          <div className="text-gray-500 text-lg pt-2 px-4 pb-3 ">
            {"Enter your infromation to create an account"}
          </div>
          <InputBox
            label={"First Name"}
            placeholder={"Ashutosh"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Bidaliya"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            label={"Email"}
            placeholder={"abc@example.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"******"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-3">
            <Button onClick={handleRegister} label={"Sign up"} />
            <div>
              <BottomWarning
                label={"Already have an account?"}
                buttonText={"Sign In"}
                to={"/signin"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
