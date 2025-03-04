import Image from "next/image";
import { GiTornado } from "react-icons/gi"
import items from '/cards.js'
import Card from "@/components/Card";
export default function Home() {
  console.log(items)
  return (
    <>
      <main className="bg-zinc-200">
        <section className="min-h-screen  text-6xl font-bold text-zinc-800 grid grid-cols-4 shadow-lg">
           <article className="col-span-2 text-center bg-linear-to-t from-sky-500 to-indigo-500 flex items-center justify-center flex-col text-slate-50">
           <p>Countless Iterations,<br/> Stored in One Place.</p>
           <span className="flex gap-2 text-zinc-950"> <GiTornado/> Nado Drive <GiTornado/></span>
           </article>
           <div className="col-span-1 bg-amber-300 rounded-lg m-5"> 
            
           </div>
           <div className="col-span-1 bg-zinc-400 m-30 rounded-xl h-60 text-xl">
            Hooplagh
           </div>
        </section>
        <section className="min-h-[90vh] grid grid-cols-3 p-10 grid-rows-[50px_100px_1fr] ">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text  text-transparent col-span-3 text-center ">
            Store Your Files All IN One Place
          </h2>
          <p className="col-span-3 text-center mx-[25%] my-10 text-zinc-800">
            NadoDrive focuses on delivering a seamless experience while you focus on working with your own files. We offer a variety of features that will help you stay busy with what really matters
          </p>
          <section className="col-span-3 grid grid-cols-3  content-center ">
            {items.items?.map( (i)=>{
              return(
              <Card key={i.title}
                title={i.title} desc = {i.desc} icon={i.icon}
              />)
            })}
          </section>
        </section>
    </main>
    </>

  );
}
