
import { useNavigate } from "react-router-dom";
import { Heading } from "../Components/Heading";
import { Subheading } from "../Components/Subheading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useState } from "react";

export function Signin() {

  const navigate = useNavigate();

  function dataHandler() {
    
    navigate("/dashboard");
  }

  return (
    <div className="flex justify-center my-[220px] h-[470]">
      <div className="w-[380px] px-[40px] pt-[50px] pb-[25px] rounded-[20px] bg-black text-white ">
        <Heading label={"Sign In"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox label={"Email"} placeholder={"adityasharma@example.com"}  />
        <InputBox label={"Password"}  />
        <Button label={"Sign in"} onClick={dataHandler}/>
        <BottomWarning label={"Don't have an account? "} buttonText={"Sign Up"} to={"/signup"} />
      </div>
    </div>
  );
}
