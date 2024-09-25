import Image from "next/image";
import RackImage from "@/res/rack.jpg"
import CallToAction from "@/components/CallToAction";
import Seperator from "@/components/Seperator";

export default function CarrierPage() {
    return (
    <>
        <div className="header">
            <div className="xl:w-3/4">
                <h1 className="title">Carrier Network Services</h1>
                <h3 className="subtitle">Carrier-grade IP networks to get your packets delivered on-time, un-sniffed, and intact.</h3>
                <p className="bodu">When we set out to build our network, our vision extended far beyond speed. Identified as AS216268, our high-performance infrastructure was engineered with the future in mind, placing reliability and low-latency connectivity at the forefront. Every detail, from architectural design to routing strategies, was carefully crafted to ensure optimal uptime and peak performance. This is more than just a network—it’s the foundation of our unwavering commitment to delivering high-availability services that our customers can depend on, day in and day out. In a competitive industry, we don’t just keep pace, we lead.</p>
            </div>
            <Image src={RackImage} alt="Test" className="rounded-md hidden xl:block w-1/3"/>
        </div>
        <Seperator/>
        <div id="Content.ServicesDisplayContainers" className="w-full flex flex-col xl:flex-row gap-6">
            <div className="xl:w-2/5 xl:mr-auto">
                <h1 className="title">IP Transit</h1>
                <h3 className="subtitle">Get fast connectivity and IP addresses anywhere your business works.</h3>

            </div>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Direct Transit</h1>
                    <h2 className="text-sm text-zinc-400">Customized direct connectivity in any of our POP's</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Direct cross-connects to our hardware</li>
                        <li>Customizable port sizes</li>
                        <li>Tailiored network commits</li>
                        <li>Buy IPs from us, or advertise your own!</li>
                    </ul>
                </div>
            </div>
            <div  className=" border-r border-white hidden xl:block"/>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Remote Transit</h1>
                    <h2 className="text-sm text-zinc-400">Connectivity for remote sites, regardless of location.</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Tunnel directly to you via GRE or Wireguard</li>
                        <li>Tailiored network commits</li>
                        <li>Fully remote, no POP required.</li>
                        <li>Buy IPs from us, or advertise your own!</li>
                    </ul>
                </div>
            </div>
        </div>
        <Seperator/>
        <div className="questions">
            <h1 className="title">Frequently Asked Questions</h1>
            <ul className="questionList">
                <li className="question">
                    <h3 className="title">What is latency?</h3>
                    <p>Latency is the delay between a user’s action and the response to that action from a website or an application – in networking terms, the total round-trip time (RTT) it takes for a data packet to travel. It is measured in milliseconds and Internet quality depends on it – the lower the latency, the better the user experience.</p>    
                </li>
                <li className="question">
                    <h3 className="title">What is transit, and how is it different from peering?</h3>
                    <p>IP transit is a service where a network pays another network for Internet access (or transit), also known as upstream. Peering is when networks exchange traffic between each other freely (settlement-free), and for their mutual benefit.</p>
                </li>
                <li className="question">
                    <h3 className="title">How do I get an ASN?</h3>
                    <p>To peer at an Internet Exchange, you need an ASN, which you can request at one of five regional Internet registries.</p>
                </li>        
            </ul>
        </div>
        <Seperator/>
        <CallToAction />
    </>  
    );
  }
  