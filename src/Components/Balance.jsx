export function Balance({amount}) {

  return(
    <div className="text-black font-bold mt-10 ml-16 w-60 text-xl leading-9 align-middle">
      Your balance : 
      <span className="text-2xl"> &#8377;{amount}</span>
    </div>
  )
}