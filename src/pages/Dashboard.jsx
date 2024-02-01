import { Appbar } from "../Components/Appbar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";


export function Dashboard() {

  return (
    <div>
      <Appbar userName={"Nihal"} />
      <Balance amount={"5000"} />
      <Users />
    </div>
  );
}
