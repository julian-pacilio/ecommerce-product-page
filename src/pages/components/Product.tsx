import Image from "next/image"

import arrowNext from "../../../public/icon-next.svg"
import arrowPrev from "../../../public/icon-previous.svg"
import cartIcon from "../../../public/icon-cart.svg"
import plusIcon from "../../../public/icon-plus.svg"
import minusIcon from "../../../public/icon-minus.svg"

import path from "../../../public/images/image-product-1.jpg"

export default function Product() {
    return(
        <section className="flex flex-col">
            <picture className="block relative">
                <a className="flex justify-center items-center absolute left-4 top-1/2 bg-white rounded-full w-[40px] h-[40px]" href="javascript:void(0)">
                    <Image
                        src={arrowPrev}
                        width={10} 
                        alt="next-photo"
                    />
                </a>
                <Image
                    src={path}
                    width={425}
                    height={425}
                    alt="next-photo"
                />
                <a className="flex justify-center items-center absolute right-4 top-1/2 bg-white rounded-full w-[40px] h-[40px]" 
                href="javascript:void(0)">
                    <Image 
                        src={arrowNext} 
                        width={10}
                        alt="previous-photo" 
                    />
                </a>
            </picture>
            <div className="flex flex-col gap-5 p-6">
                <span className="block uppercase font-bold text-orange">Sneaker Company</span>
                <h2 className="text-3xl font-bold
                ">Fall Limited Edition Sneakers</h2>
                <p className="text-dark-grayish-blue mb-5">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.              
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl block font-bold">$125.00</span>
                            <span className="block font-bold text-orange bg-pale-orange rounded-md px-2 py-1">50%</span>
                        </div>
                        <span className="block font-bold text-dark-grayish-blue line-through">$250.00</span>
                    </div>
                    <div className="buttons">
                        <div className="flex items-center justify-between bg-ligth-grayish-blue rounded-md py-3 px-6">
                            <a href="#">
                            <Image
                                src={minusIcon}
                                width={12}
                                height={12}
                                alt="minus"
                            />
                            </a>
                            <span>0</span>
                            <a href="#">
                            <Image
                                src={plusIcon}
                                width={12}
                                height={12}
                                alt="plus"
                            />
                            </a>
                        </div>
                        <button className="flex justify-center gap-3 items-center font-semibold text-white bg-orange rounded-md py-3 mt-3 w-full">
                            <Image
                                src={cartIcon}
                                width={18}
                                height={18}
                                alt="add-to-cart"
                            />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}