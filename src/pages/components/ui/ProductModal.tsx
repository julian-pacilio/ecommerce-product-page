import Image from "next/image"

import arrowNext from "../../../../public/icon-next.svg"
import arrowPrev from "../../../../public/icon-previous.svg"
import iconClose from "../../../../public/icon-close.svg"

import { useState } from "react"

type ModalProps = {
    srcs: string,
    images: string[],
    handleCloseModal: Function
}

export default function ProductModal({srcs, images, handleCloseModal} : ModalProps)  {

    const imageSrc = images.indexOf(srcs);

    const [src, setSrc] = useState(images[imageSrc])

    function nextImage() {
        const getIndex = images.findIndex(image => image == src)
        if(images.indexOf(images[getIndex + 1]) != -1) {
            setSrc(images[getIndex + 1])
        }
    }

    function prevImage() {
        const getIndex = images.findIndex(image => image == src)
        if(images.indexOf(images[getIndex - 1]) != -1) {
            setSrc(images[getIndex - 1])
        }
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

    function setModal() {
        handleCloseModal(false)
    }

    return(
        <div className="absolute top-0 left-0 min-w-full min-h-screen bg-shadow z-50 flex justify-center items-center">
            <div className="relative mx-auto lg:grid lg:grid-cols-4 lg:grid-rows-6 lg:gap-6 lg:w-1/2 max-w-[600px]">
                <a href="javascript:void(0)" 
                    onClick={setModal} 
                    className="absolute -top-9 right-0 z-60 block cursor-pointer">
                        <Image
                            className="rounded-2xl"
                            src={iconClose}
                            width={20}
                            height={20}
                            alt="photo"
                        />
                </a>
                <picture className="col-span-4 row-span-6 relative"
                >
                    <a onClick={prevImage}
                        className="flex justify-center items-center absolute -left-6 top-1/2 bg-white rounded-full w-[50px] h-[50px]" 
                        href="javascript:void(0)">
                        <Image
                            src={arrowPrev}
                            width={10} 
                            alt="next-photo"
                            />
                    </a>
                    <Image
                        className="rounded-2xl"
                        src={`/images/${src}`}
                        width={600}
                        height={600}
                        alt="photo"
                    />
                    <a onClick={nextImage}
                        className="flex justify-center items-center absolute -right-6 top-1/2 bg-white rounded-full w-[50px] h-[50px]" 
                        href="javascript:void(0)">
                            <Image 
                                src={arrowNext} 
                                width={10}
                                alt="previous-photo" 
                            />
                    </a>
                </picture>
                {
                    images.map((image, index) => (
                        <>
                            {
                                index == 0 &&
                                    <picture key={index} 
                                            data-selected="true"
                                            className="cursor-pointer rounded-2xl outline outline-orange outline-[3px] bg-ligth-grayish-blue" 
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
                                            className="cursor-pointer rounded-2xl bg-ligth-grayish-blue" 
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
        </div>
    )
}