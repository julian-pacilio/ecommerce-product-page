import Image from "next/image"

import arrowNext from "../../../../public/icon-next.svg"
import arrowPrev from "../../../../public/icon-previous.svg"
import { useState } from "react";

type ImagesSrc = {
    images: string[]
}

export default function ProductGallery({ images } : ImagesSrc) {

    const imageSrc = images;

    const [src, setSrc] = useState(imageSrc[0])

    function nextImage() {
        const getIndex = imageSrc.findIndex(image => image == src)
        if(imageSrc.indexOf(imageSrc[getIndex + 1]) != -1) {
            setSrc(imageSrc[getIndex + 1])
        }
    }

    function prevImage() {
        const getIndex = imageSrc.findIndex(image => image == src)
        if(imageSrc.indexOf(imageSrc[getIndex - 1]) != -1) {
            setSrc(imageSrc[getIndex - 1])
        }
    }

    return (
        <>
            <picture className="block relative mx-auto lg:hidden">
                <a onClick={prevImage}
                className="flex justify-center items-center absolute left-4 top-1/2 bg-white rounded-full w-[40px] h-[40px]" href="javascript:void(0)">
                    <Image
                        src={arrowPrev}
                        width={10} 
                        alt="next-photo"
                    />
                </a>
                <Image
                    className="main-picture"
                    src={`/images/${src}`}
                    width={600}
                    height={600}
                    alt="photo"
                />
                <a onClick={nextImage}
                className="flex justify-center items-center absolute right-4 top-1/2 bg-white rounded-full w-[40px] h-[40px]" 
                href="javascript:void(0)">
                    <Image 
                        src={arrowNext} 
                        width={10}
                        alt="previous-photo" 
                    />
                </a>
            </picture>
            <div className="hidden relative mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-6 lg:w-1/2">
                <picture className="col-span-4 row-span-6">
                    <Image
                        className="rounded-2xl"
                        src={`/images/${src}`}
                        width={600}
                        height={600}
                        alt="photo"
                    />
                </picture>
                <picture>
                        <Image
                            className="rounded-2xl"
                            src={`/images/${imageSrc[0]}`}
                            width={600}
                            height={600}
                            alt="photo"
                        />
                </picture>
                <picture>
                        <Image
                            className="rounded-2xl"
                            src={`/images/${imageSrc[1]}`}
                            width={600}
                            height={600}
                            alt="photo"
                        />
                </picture>
                <picture>
                        <Image
                            className="rounded-2xl"
                            src={`/images/${imageSrc[2]}`}
                            width={600}
                            height={600}
                            alt="photo"
                        />
                </picture>
                <picture>
                        <Image
                            className="rounded-2xl"
                            src={`/images/${imageSrc[3]}`}
                            width={600}
                            height={600}
                            alt="photo"
                        />
                </picture>
            </div>
        </>
    )
}