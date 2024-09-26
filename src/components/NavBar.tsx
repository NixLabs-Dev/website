import Image from "next/image";
import Logo from "@public/logo.png"

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 bg-black w-screen mb-24" id="Navbar">
        <div className="px-4 py-4 xl:px-24 flex flex-row" id="Navbar.Container">
                <a href="/">
                    <Image src={Logo} alt="NixLabs Logo" className="h-8 w-8 mr-auto" id="Navbar.Container.Logo"/>
                </a>
                <div id="Navbar.Container.LinkContainer" className="ml-auto flex flex-row items-center gap-4 text-zinc-400  text-md font-medium">
                    <a href="/services/carrier" className="hover:text-zinc-500">Carrier Services</a>
                    <a href="/services/hosting" className="hover:text-zinc-500">Hosting Services</a>
                    <a href="https://docs.nixlabs.dev" className="hover:text-zinc-500">Developers</a>
                </div>
        </div>
    </div>
    );
}
