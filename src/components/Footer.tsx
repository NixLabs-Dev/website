import Image from "next/image";
import Logo from "@/res/logo.png"

export default function Footer() {
  return (
    <div className="navbar pb-8 mt-32 w-screen hidden lg:block flex flex-row" id="Navbar">
        <div className="mx-16 my-2 flex flex-row" >
                <div className="mr-auto">
                    <div className="flex flex-row gap-2">
                        <a href="/">
                            <Image src={Logo} alt="NixLabs Logo" className="h-8 w-8 mr-auto" id="Navbar.Container.Logo"/>
                        </a>
                        <h1 className="text-2xl font-semibold">NixLabs Networks</h1>
                    </div>

                    <p className="mt-2">Boldly powering your favorite projects, one server at a time.</p>
                </div>
                <div className="ml-auto mt-auto flex flex-row text-zinc-400 gap-12">
                        <a href="/legal/terms">Terms of Service</a>
                        <a href="/company/about">Our Company</a>
                        <a href="https://lg.nixlabs.dev">Looking Glass</a>
                </div>
        </div>
    </div>
    );
}
