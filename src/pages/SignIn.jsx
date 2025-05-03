import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      const { id, firstName, email } = response.data;
      navigate("/dashboard", {
        state: { id, firstName, email },
      });
    } catch (error) {
      console.error("Error during sign in", error);
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
    <div className="bg-gray-200 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading lable={"Sign In"} />
          <SubHeading lable={"Enter your credentials to access your account"} />
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
            <Button
              onClick={async () => {
                handleSignIn();
              }}
              label={"Sign in"}
            />
            <div>
              <BottomWarning
                label={"Already have an account?"}
                buttonText={"Register"}
                to={"/register"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
