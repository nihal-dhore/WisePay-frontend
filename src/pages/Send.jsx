import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/InputBox";


export function Send() {
  return (
    <div className="flex justify-center my-[290px] h-[470]">
      <div className="w-[380px] px-[40px] pt-[50px] pb-[35px] rounded-[20px] bg-black text-white">
        <Heading label={"Pay Now"} />
        <div className="flex justify-start items-center mt-6">
          <div className="mr-4 font-bold w-10 h-10 rounded-full bg-white text-center pt-[5px] text-[22px] text-black align-middle mt-0">
            N
          </div>
          <div className="font-bold">Nihal</div>
        </div>
        <InputBox label={"Amount in Rs"} placeholder={"Enter Amount"} />
        <Button label={"Proceed"} />
      </div>
    </div>
  );
}
