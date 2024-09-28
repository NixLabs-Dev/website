import Image from "next/image";
import RackImage from "@public/rack.jpg"
import CallToAction from "@/components/CallToAction";
import Seperator from "@/components/Seperator";

export default function CarrierPage() {
    return (
    <>
        <div className="header">
            <div className="xl:w-3/4">
                <h1 className="title">Our Network</h1>
                <h3 className="subtitle">Providing carrier-grade reliability and speed at crazy-low prices.</h3>
                <p className="body">At NixLabs, our network is built on three core principles: speed, reliability, and cost-effectiveness. Designed to meet the diverse needs of our user base, we deliver carrier-grade performance at a price accessible to all—from FOSS organizations and hobbyists to businesses generating $500k annually.</p>
                <p className="body">Our fully open-source routing network, built on the foundations of FRR, BIRD, and VyOS, reflects our deep commitment to the open-source philosophy. Every tool, every API, and every system we develop in-house embodies this belief, driving both innovation and transparency. Our focus is to empower hobbyists, FOSS communities, nonprofits, and small businesses, allowing you to drive change in the world while we handle the complexities of your network.</p>
                <p className="body">We’re more than just a hosting company; we’re a community of learners, engineers, and pioneers shaping the future of technology. Our commitment extends far beyond uptime—we constantly innovate and refine to ensure your services run seamlessly, no matter the challenge. Reliability isn’t just a goal for us—it’s a promise to be there when you need us most. Because at the end of the day, we are hobbyists just like you.</p>
                <p className="w-full flex flex-row justify-center mt-8">We have never just meet the bar—we set it.</p>
            </div>
            <Image src={RackImage} alt="Test" className="rounded-md hidden xl:block w-1/3"/>
        </div>
        <Seperator/>
        <div id="Content.ServicesDisplayContainers" className="w-full flex flex-col xl:flex-row gap-6">
            <div className="xl:w-2/5 xl:mr-auto">
                <h1 className="title">Network Services</h1>
                <h3 className="subtitle">Premium network services to get your packets delivered on time, in-tact, and un-sniffed</h3>

            </div>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Direct Transit</h1>
                    <h2 className="text-sm text-zinc-400">Customized direct connectivity in Hopkinsville, KY</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Direct cross-connects to our hardware</li>
                        <li>Pick your port size (100M/1G/10G)</li>
                        <li>Tailiored network commits</li>
                        <li>Buy IPs from us, or advertise your own!</li>
                    </ul>
                </div>
            </div>
            <div  className=" border-r border-white hidden xl:block"/>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Remote Transit</h1>
                    <h2 className="text-sm text-zinc-400">Connectivity to our network, from anywhere.</h2>
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
                <li className="question">
                    <h3 className="title">You only have one site, why is that?</h3>
                    <p>We pride oursleves in our lean and mean operation. Our provider has given us some of the best prices to help us give you the services you need. We dont compete with other cloud providers in the 'prime' locations because it would raise our customers costs. We are comitted to providing datacenter-grade services at the best possible prices.</p>
                    <p>However, we do have plans to expand when demand increases for locations, site suggestions? Join our <a className="text-purple-300 hover:text-purple-500" href="https://discord.gg/phEf3q2fFF">Discord</a> and let us know!</p>
                </li>        
            </ul>
        </div>
        <Seperator/>
        <CallToAction />
    </>  
    );
  }
  