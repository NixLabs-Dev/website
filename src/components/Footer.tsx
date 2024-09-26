import Image from "next/image";
import Logo from "@public/logo.png"

export default function Footer() {
  return (
    <div className="navbar pb-8 mt-32 w-screen hidden lg:block flex flex-row" id="Navbar">
        <div className="mx-16 my-2 flex flex-row" >
                <div className="mr-auto">
                    <a href="/" className="flex flex-row gap-2 cursor-pointer hover:opacity-90" >
                        <p>
                         <Image src={Logo} alt="NixLabs Logo" className="h-8 w-8 mr-auto" id="Navbar.Container.Logo"/>
                        </p>
                        <h1 className="text-2xl font-semibold">NixLabs Networks</h1>
                    </a>

                    <p className="mt-2">Boldly powering your favorite projects, one server at a time.</p>
                </div>
                <div className="ml-auto mt-auto flex flex-row text-zinc-400 gap-12">
                        <a href="/legal/terms" className="hover:text-zinc-500">Terms of Service</a>
                        <a href="/company/about" className="hover:text-zinc-500">Our Company</a>
                        <a href="https://lg.nixlabs.dev" className="hover:text-zinc-500">Looking Glass</a>
                </div>
        </div>
    </div>
    );
}
