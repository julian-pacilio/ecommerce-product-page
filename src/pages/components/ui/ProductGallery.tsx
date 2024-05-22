import Image from "next/image"
import ProductModal from "./ProductModal"

import arrowNext from "../../../../public/icon-next.svg"
import arrowPrev from "../../../../public/icon-previous.svg"
import { useState } from "react";

type ImagesSrc = {
    images: string[]
}

export default function ProductGallery({ images } : ImagesSrc) {

    const imageSrc = images;
    const [src, setSrc] = useState(imageSrc[0])
    const [modal, setModal] = useState(false)

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

    function handleOpenModal() {
        setModal(true)
    }

    function handleStyling(e : any) {
        const selectedImage = e.currentTarget;
        document.querySelectorAll("picture[data-selected]").forEach(item => { 
            item.setAttribute("data-selected", "false");
            item.children[0].classList.remove('opacity-30');
            item.classList.remove('outline', 'outline-orange', 'outline-[3px]')
            item.children[0].classList.add('hover:opacity-60');
        })
        selectedImage.setAttribute("data-selected", "true")

        if(selectedImage.getAttribute("data-selected") == "true") {
            selectedImage.children[0].classList.add('opacity-30');
            selectedImage.children[0].classList.remove('hover:opacity-60');
            selectedImage.classList.add('outline', 'outline-orange', 'outline-[3px]')
        }
    }

    function selectImage(source : string, e: React.MouseEvent<HTMLPictureElement>) {
        setSrc(source)
        handleStyling(e)
    }

    return (
        <>
            {
                modal &&
                <ProductModal srcs={src} images={images} handleCloseModal={setModal}/>
            }
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
                <picture className="col-span-4 row-span-6"
                         onClick={handleOpenModal}
                >
                    <Image
                        className="rounded-2xl"
                        src={`/images/${src}`}
                        width={600}
                        height={600}
                        alt="photo"
                    />
                </picture>
                {
                    imageSrc.map((image, index) => (
                        <>
                            {
                                index == 0 &&
                                    <picture key={index} 
                                            data-selected="true"
                                            className="cursor-pointer rounded-2xl outline outline-orange outline-[3px]" 
                                            onClick={(e) => selectImage(image, e)}
                                    >
                                        <Image
                                            className="rounded-2xl opacity-30"
                                            src={`/images/${image}`}
                                            width={600}
                                            height={600}
                                            alt="photo"
                                        />
                                    </picture>
                            }
                            {
                                index != 0 &&
                                    <picture key={index} 
                                            data-selected="false"
                                            className="cursor-pointer rounded-2xl" 
                                            onClick={(e) => selectImage(image, e)}
                                    >
                                        <Image
                                            className="rounded-2xl hover:opacity-60"
                                            src={`/images/${image}`}
                                            width={600}
                                            height={600}
                                            alt="photo"
                                        />
                                    </picture>
                            }
                        </>
                    ))
                }
            </div>
        </>
    )
}