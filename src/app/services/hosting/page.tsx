import Image from "next/image";
import ServerImage from "@/res/server.jpg"
import CallToAction from "@/components/CallToAction";
import Seperator from "@/components/Seperator";

export default function HostingPage() {
    return (
      <>
        <div className="header">
            <div className="xl:w-3/4">
                <h1 className="title">Premium Hosting Services</h1>
                <h3 className="subtitle">Cost-effective dedicated, virtualizaed, and physical solutions to take you to the next level.</h3>
                <p className="body">Built on the shouldiers of giants, our datacenter is comprised of quality Dell servers running tried and tested Debian Linux with VirtFusion as our hypervisor on top. Every server is backed by SSD storage, DDR4 RAM and high-frequency Xeon processors designed to give you optimal performance without breaking the bank. Our dedicated line is completely managed-hardware. You install your workload, and we do the rest.</p>
            </div>
            <Image src={ServerImage} alt="Test" className="rounded-md hidden xl:block w-1/3"/>
        </div>
        <div className="h-seperator"/>
        <div id="Content.ServicesDisplayContainers" className="w-full flex flex-col xl:flex-row gap-6">
            <div className="xl:w-2/5 xl:mr-auto">
                <h1 className="title">Managed by us</h1>
                <h3 className="subtitle">Dont have hardware? Our Virtual and Dedicated compute options give you the flexibility to run any workload you need.</h3>

            </div>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Virtual Cloud</h1>
                    <h2 className="text-sm text-zinc-400">Instantly available cloud compute.</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Instant deploy.</li>
                        <li>20+ OS Templates</li>
                        <li>Powered by Intel Xeons with DDR4</li>
                        <li>Blazing fast RAID5 SSD backed storage</li>
                        <li>Backed by our 40G redundant core</li>
                    </ul>
                </div>
            </div>
            <div  className="border-r border-white"/>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Dedicated Systems</h1>
                    <h2 className="text-sm text-zinc-400">Fully dedicated hardware, down to the physical box.</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Fully dedicated resources</li>
                        <li>24/7 Access to IPMI!</li>
                        <li>Premium hardware built to last</li>
                        <li>No hardware worries, just install and go!</li>
                        <li>Backed by our 40G redundant core</li>
                    </ul>
                </div>
            </div>
        </div>
        <Seperator/>
        <div id="Content.ServicesDisplayContainers" className="w-full flex flex-col xl:flex-row gap-6">
        <div className="xl:w-2/5 xl:mr-auto">
                <h1 className="title">Managed by you</h1>
                <h3 className="subtitle">Have your own hardware? Bring it to us! We will rack, stack, and get you ready to attack your workloads!</h3>

            </div>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Single Server Colocation</h1>
                    <h2 className="text-sm text-zinc-400">1U-4U single server, for hobbyists and SMB customers</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>Full IPMI access</li>
                        <li>10G Uplink ports</li>
                        <li>1A/u @208v A+B power</li>
                        <li>Cross connects available</li>
                        <li>Full IP blocks available</li>
                    </ul>
                </div>
            </div>
            <div  className=" border-r border-white"/>
            <div className="xl:w-2/5 rounded-xl flex flex-col gap-4">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Rack Colocation</h1>
                    <h2 className="text-sm text-zinc-400">Powering you from a 1/4 cabinet, to 20 cabinets!</h2>
                </div>
                <div>
                    <ul className="list-disc list-inside">
                        <li>1/4, 1/2, and 1+ cabinets</li>
                        <li>Configurable Uplinks from 10G to 40G</li>
                        <li>Configurable Traffic Commits</li>
                        <li>Configurable Power!</li>
                        <li>Configurable IP space and Cross connects</li>
                    </ul>
                </div>
            </div>
        </div>
        <Seperator/>
        <div className="questions">
            <h1 className="title">Frequently Asked Questions</h1>
            <ul className="questionList">
                <li className="question">
                    <h3 className="title">What is colocation?</h3>
                    <p>Colocation is a service where businesses can rent space for their servers and other computing hardware in a third-party data centre. This allows companies to benefit from enterprise-grade facilities without the cost of building and maintaining their own data centre.</p>    
                </li>
                <li className="question">
                    <h3 className="title">Whats the difference from running in my house?</h3>
                    <p>When running systems in your house you might not have access to benifits like Redundant Power, IP Addresses, BGP Peering, or Cross-Connects to large carriers. But if you do, then just keep them at home ;)</p>
                </li>
                <li className="question">
                    <h3 className="title">What happens if I need more space or power?</h3>
                    <p>You can request additional space or power at any time. Our team will work with you to accommodate your growing needs and ensure a smooth transition to the expanded capacity.</p>
                </li> 
                <li className="question">
                    <h3 className="title">Are there any contractual obligations?</h3>
                    <p>Our single-server colocation services are contract-free! Our larger custom solutions typically involve a contract with agreed-upon terms for space, power, and support. Details will be outlined to you.</p>
                </li>   
      
            </ul>
        </div>
        <Seperator/>
        <CallToAction />
    </>  
    );
  }
  