import Image from "next/image"

import cartIcon from "../../../public/icon-cart.svg"
import plusIcon from "../../../public/icon-plus.svg"
import minusIcon from "../../../public/icon-minus.svg"

import ProductGallery from "./ui/ProductGallery"

const imagesSrc = [
    'image-product-1.jpg', 
    'image-product-2.jpg', 
    'image-product-3.jpg', 
    'image-product-4.jpg'
];

export default function Product() {
    return(
        <section className="flex flex-col mx-auto max-w-[600px] lg:gap-20 lg:p-6 lg:flex-row lg:items-center lg:max-w-[1080px]">
            <ProductGallery images={imagesSrc}/>
            <div className="flex flex-col gap-5 p-6 lg:w-1/2">
                <span className="block uppercase font-bold text-orange">Sneaker Company</span>
                <h2 className="text-3xl font-bold
                ">Fall Limited Edition Sneakers</h2>
                <p className="text-dark-grayish-blue mb-5">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a 
                    durable rubber outer sole, they’ll withstand everything the weather can offer.              
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center lg:flex-col lg:items-start">
                        <div className="flex items-center gap-4">
                            <span className="text-3xl block font-bold">$125.00</span>
                            <span className="block font-bold text-orange bg-pale-orange rounded-md px-2 py-1">50%</span>
                        </div>
                        <span className="block font-bold text-dark-grayish-blue line-through">$250.00</span>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-3">
                        <div className="flex items-center justify-between bg-ligth-grayish-blue rounded-md py-3 px-6 w-full lg:w-[40%]">
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
                        <button className="flex justify-center gap-3 items-center font-semibold text-white bg-orange rounded-md py-3 w-full lg:w-[60%]">
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