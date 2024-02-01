import { useNavigate } from "react-router-dom";
import { Heading } from "../Components/Heading";
import { Subheading } from "../Components/Subheading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";

export function Signup() {
  const navigate = useNavigate();

  /* const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function dataHandler() {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      {
        username: email,
        password: password,
        firstName : firstName,
        lastName: lastName
      });
    console.log(res.data);
    if (res.status === 200) {
      navigate("/signin");
      localStorage.setItem("authToken", res.data.token);
    } else if (res.status === 411) {
      console.log(res.data);
    }
  } */

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
        <Button /* onClick={dataHandler} */ label={"Sign up"} />
        <BottomWarning
          label={"Already have an account? "}
          buttonText={"Sign in"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}
