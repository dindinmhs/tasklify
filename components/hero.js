import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
export function Hero() {
    return(
        <section className="w-full h-full flex flex-col justify-center items-center relative">
            <Image
                src="/hero-logo.svg"
                width={400}
                height={400}
                alt="logo tasklify"
                priority={true}
                className="mb-10"
            />
            <div className="lg:text-2xl">
                <p className="my-4">Make your days more</p>
                <ul>
                    <li><FaCheck className="inline text-green-500 my-4"/> Organized</li>
                    <li><FaCheck className="inline text-green-500 my-4"/> Productive</li>
                    <li><FaCheck className="inline text-green-500 my-4"/> Unforgettable</li>
                </ul>
            </div>
            <Image
                src="/element.svg"
                width={300}
                height={300}
                alt="element"
                priority={true}
                className="absolute right-0 bottom-0"
            />
            <Image
                src="/element.svg"
                width={300}
                height={300}
                alt="element"
                priority={true}
                className="absolute right-0 top-0 -scale-y-100"
            />
        </section>
    )
}