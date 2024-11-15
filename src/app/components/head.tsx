import Image from "next/image";

export default function Head(){
    return(
        <div className=" flex mt-2 border p-10 w-6/12 bg-black content-center">
        <div className="w-6/12">
        <Image className="rounded-[10px]" src="/p1.jpeg" alt="My image" height="150" width="150"></Image>
        <h1 className="font-extrabold text-white">Muhammad Faizan</h1>
        </div>
        <div className=" text-white float-right w-6/12">
          <p className="float-right">
          CNIC: 42201-234234323-1 <br />
          Email: faizan@gmail.com <br />
          Contact: 0331-232131234 <br />
          Address: H#C/121 Abc Road <br />
          </p>
        </div>
      </div>
    )
}