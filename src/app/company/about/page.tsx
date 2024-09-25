import Image from "next/image";
import OwenImage from "@/res/people/owen.jpg"
import MichaelImage from "@/res/people/michael.jpg"
import NathanImage from "@/res/people/nathan.jpg"
import MinemanImage from "@/res/people/mineman.jpg"
import Seperator from "@/components/Seperator";

export default function HostingPage() {
    return (
    <>
        <div className="header">
            <div className="xl:w-3/4">
                <h1 className="title">Our Company</h1>
                <h3 className="subtitle">Dedicated to providing the best solutions to those who need them most.</h3>
                <p className="body">Since its inception in late 2022, NixLabs has been providing top-notch hosting services to a large amount of open-source developers. The core of our team began in similar fassions within the homelab community. Because of this, we want to keep a special place for homelabbers, learners, tinkerers, and more by providing services designed to fit the budgets of those individuals. At the core of our mission is providing services to those who need it most.</p>
            </div>
        </div>
        <Seperator/>
        <div className="flex flex-col 2xl:flex-row gap-6 justify-center section w-full">
            <div className="2xl:w-1/3">
                <h1 className="title">Meet Our Team</h1>
                <h3 className="subtitle">Our amazing team of talented individuals ready to help you make your next step</h3>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col items-center">
                    <Image src={OwenImage} alt="Owen Rummage Headshot" className="w-1/3 xl:w-24 rounded-full mb-2"/>
                    <h1 className="text-white    text-3xl xl:text-xl font-bold">Owen Rummage</h1>
                    <h2 className="text-zinc-400 text-lg  xl:text-sm">Chief Executive Officer</h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={MichaelImage} alt="Owen Rummage Headshot" className="w-1/3 xl:w-24 rounded-full mb-2"/>
                    <h1 className="text-white    text-3xl xl:text-xl font-bold">Michael Garofalo</h1>
                    <h2 className="text-zinc-400 text-lg  xl:text-sm">Systems Administrator</h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={NathanImage} alt="Owen Rummage Headshot" className="w-1/3 xl:w-24 rounded-full mb-2"/>
                    <h1 className="text-white    text-3xl xl:text-xl font-bold">Nathan Roberts</h1>
                    <h2 className="text-zinc-400 text-lg  xl:text-sm">Support</h2>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={MinemanImage} alt="Owen Rummage Headshot" className="w-1/3 xl:w-24 rounded-full mb-2"/>
                    <h1 className="text-white    text-3xl xl:text-xl font-bold">Mineman</h1>
                    <h2 className="text-zinc-400 text-lg  xl:text-sm">Support</h2>
                </div>
            </div>
        </div>
        <Seperator/>
        <div className="flex flex-row w-full">
            <div className="mr-auto">
                <h1 className="title">Contact us</h1>
                <h3 className="subtitle">Need help? Our trained support specialists can help!</h3>
                <div className="flex flex-col text-xl xl:text-base xl:flex-row xl:gap-12 mt-4">
                    <a href="mailto:sales@nixlabs.dev">sales@nixlabs.dev</a>
                    <a href="mailto:security@nixlabs.dev">security@nixlabs.dev</a>
                    <a href="mailto:noc@nixlabs.dev">noc@nixlabs.dev</a>
                </div>
            </div>

        </div>
        <Seperator/>
        <div className="questions">
            <h1 className="title">Frequently Asked Questions</h1>
            <ul className="questionList">
                <li className="question">
                    <h3 className="title">What makes you different?</h3>
                    <p>We believe the difference-maker with us is the unparalleled friendliness and willingness to work with you. From a homelabber, to a large business all of our members have once been in your shoes. We pride ourselves in never giving larger customers different treatment than the little guy. </p>    
                </li>
                <li className="question">
                    <h3 className="title">Why should I trust such a small company?</h3>
                    <p>We are small, but we are moving fast. Everyone starts somewhere, and we dont think you'll regret getting in on ground-zero of this operation.</p>
                </li>      
            </ul>
        </div>
        <div className="mb-24 xl:mb-0"/>
    </>  
    );
  }
  