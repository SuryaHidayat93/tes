"use client";

import { useState, useEffect, useRef } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { motion } from "framer-motion";  // Import motion dari framer-motion

interface TextChar {
    char: string;
    color: string;
}

export default function About() {
    const [displayedText, setDisplayedText] = useState<TextChar[]>([]);
    const fullText = `Hello! My name is Surya Hidayat, and I am an Informatics Engineering student at Sultan Syarif Kasim State Islamic University, Riau. I have a strong passion for web and mobile development. With an academic background in Informatics Engineering, I focus on programming, particularly in Android mobile app development and modern web applications. I am always eager to learn new technologies and apply them to practical projects. Additionally, I am also interested in front-end and back-end development for web applications. I believe that technology has the power to solve various challenges in everyday life, and I am committed to continually learning and contributing to this field.`;

    const paragraphRef = useRef<HTMLParagraphElement>(null); // Perbaikan di sini
    const aboutRef = useRef(null);
    const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const initialText = fullText.split("").map((char) => ({ char, color: "text-gray-400" }));
        setDisplayedText(initialText);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setHasScrolledIntoView(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (hasScrolledIntoView) {
            const handleScroll = () => {
                if (paragraphRef.current) {
                    const rect = paragraphRef.current.getBoundingClientRect();
                    const scrollTop = window.scrollY;
                    const windowHeight = window.innerHeight;
                    const progress = Math.min(Math.max((scrollTop - rect.top + windowHeight) / (windowHeight + rect.height), 0), 1);
                    setScrollProgress(progress);
                }
            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [hasScrolledIntoView]);

    useEffect(() => {
        if (scrollProgress > 0) {
            const updatedText = fullText.split("").map((char, index) => {
                const color = index <= scrollProgress * fullText.length ? "text-white" : "text-gray-600";
                return { char, color };
            });
            setDisplayedText(updatedText);
        }
    }, [scrollProgress]);

    const testimonials = [
        {
            quote: "Participate in the frontend developer at Warung UMKM Riau",
            name: "September, 2024 - September, 2024",
            title: "Participate in the frontend developer at Warung UMKM Riau",
        },
        {
            quote: "Participate in the android developer at SAMATIF",
            name: "April, 2024 - Juni, 2024",
            title: "Participate in the android developer at SAMATIF",
        },
    ];

    const people = [
        {
            id: 1,
            name: "Next js",
            designation: "Framework",
            image: "/images/Next.js.png",
        },
        {
            id: 2,
            name: "Javascript",
            designation: "Language",
            image: "/images/JavaScript.png",
        },
        {
            id: 3,
            name: "React js",
            designation: "Framework",
            image: "/images/React.png",
        },
        {
            id: 4,
            name: "Java",
            designation: "Language",
            image: "/images/Java.png",
        },
        {
            id: 5,
            name: "Android Studio",
            designation: "IDE",
            image: "/images/Android Studio.png",
        },
    ];

    return (
        <div ref={aboutRef} className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-backgroud px-4 md:px-0">
            <div className="flex flex-col items-center md:items-end justify-center w-full md:w-1/2 h-auto md:h-[100vh] mb-8 md:mb-0">
                {/* Gambar dengan animasi pergerakan masuk saat di-scroll */}
                <motion.img
                    src="/images/a.png"
                    alt="About Me"
                    className="transition duration-300 ease-in-out transform w-64 md:w-96 h-auto hover:grayscale-0 grayscale md:mr-28"
                    initial={{ opacity: 0, x: 100 }} // Mulai dari opacity 0 dan sedikit bergeser
                    animate={{ opacity: hasScrolledIntoView ? 1 : 0, x: hasScrolledIntoView ? 0 : 100 }} // Animasi menuju posisi normal
                    transition={{ duration: 1 }} // Durasi animasi
                />
            </div>
            <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 h-auto md:h-[100vh]">
                <div className="flex flex-col items-center md:items-start md:ml-28 gap-5 w-full max-w-[500px]">
                    <div className="w-full">
                        <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-start font-outfit">About Me</h1>
                    </div>
                    <p ref={paragraphRef} className="font-outfit text-sm md:text-base text-center md:text-left">
                        {displayedText.map((item, index) => (
                            <span key={index} className={`${item.color} transition-colors duration-300`}>
                                {item.char}
                            </span>
                        ))}
                    </p>
                    <div className="w-full">
                        <h1 className="text-xl md:text-2xl font-bold text-center md:text-start text-white font-outfit mt-6">Experience</h1>
                    </div>
                    <div className="w-full max-w-[500px]">
                        <InfiniteMovingCards
                            items={testimonials}
                            direction="right"
                            speed="normal"
                            pauseOnHover={true}
                            className="w-full font-outfit text-sm md:text-base"
                        />
                        <div className="flex flex-row w-full justify-center mt-6">
                            <AnimatedTooltip items={people} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
