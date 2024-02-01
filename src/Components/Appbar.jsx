export function Appbar({userName}) {

  return (
    <div className="flex flex-row justify-end py-[10px] items-center shadow shadow-white text-white bg-black">
      <div className="mr-[700px] font-bold text-3xl items-center">WisePay</div>
      <div className="flex justify-end mr-16 text-md items-center">
        <label className="mr-4">Hello, {userName}</label>
        <div className="rounded-[20px] bg-background w-[40px] h-[40px] text-center py-[5px] text-black text-xl">
          {userName.slice(0, 1).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
