'use client'
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold">Our networks power your</h1>
          <h1 className="text-4xl lg:text-5xl text-purple-500 font-bold">
            <ReactTyped
              strings={[
                'Silicon-Valley Startup', 
                'Open-Source Project',
                'Small business',
                'Homelab Journey'
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </h1>
        </div>
        <p className="text-xl 2xl:w-2/3 text-center mt-8">Boldly powering projects across the net with affordable, stable, and reliable network, cloud, and collocation services. Built by the people, for the people.</p>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <a href="/services/carrier" className="px-4 py-2 bg-purple-500 rounded-lg text-2xl xl:text-base">Carrier Services</a>
          <a href="/services/hosting" className="px-4 py-2 bg-indigo-500 rounded-lg text-2xl xl:text-base">Hosting Services</a>
        </div>
    </div>  
  );
}
