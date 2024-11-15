import Image from "next/image"

export default function Bottom(){
    return(
        <div className="bg-black h-10 w-6/12 p-1 flex justify-center">
      <Image src="/linkedin.png" width={30} height={25} alt="lk" className="m-1 justify-center"></Image>
      <Image src="/git.jpeg" width={50} height={50} alt="lk" className="m-1 justify-center"></Image>

      </div>
      
    
    )
}