/* import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <main className=" grid h-[771px] justify-around   bg-slate-700 ">
      <div className="bg-slate-300 grid ">
        <div className=" grid  max-w-xl m-6 ">
          <h4 className="bg-slate-400  items-center  grid p-4 rounded-3xl text-center">
            gjernerjgn erjgoerg rjehgbjergor jrngerngorngoerngrognoer
            rgornegoierng hbsdjsjdfsdfj sdhbfsbdfjbf gjernerjgn erjgoerg
            rjehgbjergor jrngerngorngoerngrognoer rgornegoierng hbsdjsjdfsdfj
            sdhbfsbdfjbf gjernerjgn erjgoerg rjehgbjergor
            jrngerngorngoerngrognoer rgornegoierng hbsdjsjdfsdfj sdhbfsbdfjbf
          </h4>
        </div>
        <div className=" grid  bg-slate-200  grid-rows-2 justify-self-center gap-x-24 p-16 rounded-t-3xl  items-center  grid-cols-2">
          <h3 className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            A: Svar på frågan
          </h3>
          <h3 className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            B: Svar på frågan
          </h3>
          <h3 className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            C: Svar på frågan
          </h3>
          <h3 className="bg-slate-400 justify-self-center grid p-4 rounded-3xl m-1 w-fit font-bold items-center">
            D: Svar på frågan
          </h3>
        </div>
      </div>
    </main>
  );
}
