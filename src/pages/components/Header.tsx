import { Kumbh_Sans } from "next/font/google";
import Image from "next/image"

import iconCart from "../../../public/icon-cart.svg"
import avatar from "../../../public/images/image-avatar.png"

const kumbh_sans = Kumbh_Sans({ subsets: ["latin"] });

function toggleMenuAndBlur() {

    const menu  = document.querySelector('#menu')
    const blur  = document.querySelector('#blur')

    if(menu?.classList.contains('hidden')) {
        blur?.classList.remove('hidden')
        blur?.classList.add('block')
        menu.classList.remove('hidden')
        menu.classList.add('flex')
    } else {
        blur?.classList.remove('flex')
        blur?.classList.add('hidden')
        menu?.classList.remove('block')
        menu?.classList.add('hidden')
    }
}   

export default function Header() {
    return(
        <header className={`${kumbh_sans.className} p-6 lg:max-w-[1080px] mx-auto`}>
            <nav className="flex items-center flex-wrap h-full justify-between gap-4 lg:gap-0 lg:border-b lg:border-b-dark-grayish-blue lg:pb-10 lg:pt-6">
                <a href="#"
                    className="flex items-center gap-4 lg:w-1/5">
                    <span className="block h-[20px] menu-open lg:hidden"
                          onClick={toggleMenuAndBlur}
                    ></span>
                    <span className="block h-[30px] text-4xl tracking-tighter leading-[20px] font-bold"
                    >sneakers</span>
                </a>
                <div className="flex gap-4 lg:w-1/5 lg:justify-end lg:order-2">
                    <a href="#" className="block">
                    <Image
                        width="30"
                        height="30"
                        src={iconCart}
                        alt="open-cart-icon"
                    />
                    </a>
                    <a href="#" className="block">
                    <Image
                        width="30"
                        height="30"
                        src={avatar}
                        alt="avatar-profile"
                    /> 
                    </a>
                </div>
                <ul id="menu" 
                    className="hidden p-6 bg-white flex-col gap-4 absolute top-0 left-0 z-20 w-[65%] h-screen font-bold
                    lg:gap-8 lg:p-0 lg:static lg:flex lg:flex-row lg:h-auto lg:w-3/5 lg:order-1 lg:font-normal">
                    <li className="h-[20px] menu-close mb-8 lg:hidden"
                        onClick={toggleMenuAndBlur}
                    ></li>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div id="blur" className="hidden absolute top-0 left-0 z-10 w-screen h-screen"></div>
            </nav>
        </header>
    )
}