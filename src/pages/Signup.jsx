import { useNavigate } from "react-router-dom";
import { Heading } from "../Components/Heading";
import { Subheading } from "../Components/Subheading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";

export function Signup() {
  const navigate = useNavigate();

  function dataHandler() {
    navigate("/signin");
  }

  return (
    <div //main
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div //card
        style={{
          /* display: "flex",
          justifyContent: "center", */
          marginTop: "150px",
          borderRadius: "20px",
          backgroundColor: "black",
          color: "#f7f6f5",
          width: "380px",
          height: "650px",
          paddingLeft: "40px",
          paddingRight: "40px",
          paddingTop: "30px",
          paddingBottom: "20px"
        }}
      >
        <Heading label={"Sign Up"} />
        <Subheading label={"Enter your credentials to Create your account"} />
        <InputBox label={"First Name"} placeholder={"Aditya"} />
        <InputBox label={"Last Name"} placeholder={"Sharma"} />
        <InputBox label={"Email"} placeholder={"adityasharma@example.com"} />
        <InputBox label={"Password"} />
        <Button onClick={dataHandler} label={"Sign up"} />
        <BottomWarning
          label={"Already have an account? "}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}
