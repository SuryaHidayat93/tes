"use client";

import React, { useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";  // Import motion dari framer-motion
import Image from "next/image";

export function Dashboard() {
    const words = ["Frontend Developer", "Software Engineer"];

    useEffect(() => {
        console.log("Dashboard component mounted");
    }, []);

    return (
        <div className="relative flex flex-col md:flex-row bg-background min-h-screen overflow-hidden">
            <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" fill="white" />

            {/* Teks dengan animasi pergerakan dari kiri */}
            <motion.div
                className="flex flex-col items-end justify-center w-full md:w-1/2 p-8 z-10"
                initial={{ x: -200, opacity: 0 }}  // Mulai dari posisi kiri
                animate={{ x: 0, opacity: 1 }}    // Akhirnya di posisi normal
                transition={{ duration: 1 }}       // Durasi animasi
            >
                <div className="flex flex-col items-start justify-start max-w-md">
                    <p className="font-outfit text-slate-300">Hello world, Im</p>
                    <h1 className="text-3xl md:text-4xl font-outfit text-white font-bold mt-2">
                        Surya Hidayatullah Firdaus
                    </h1>
                    <FlipWords words={words} className="font-outfit font-bold text-white text-lg md:text-xl mt-2" />
                    <p className="text-slate-400 font-outfit mt-4">Welcome to my portfolio website</p>
                </div>
            </motion.div>

            {/* Gambar dengan animasi pergerakan dari kanan */}
            <motion.div
                className="flex flex-col items-start justify-center w-full md:w-1/2 p-8"
                initial={{ x: 200, opacity: 0 }}  // Mulai dari posisi kanan
                animate={{ x: 0, opacity: 1 }}    // Akhirnya di posisi normal
                transition={{ duration: 1 }}       // Durasi animasi
            >
                <Image
                    src="/images/Foto2.png"
                    alt="Surya Hidayatullah Firdaus"
                    className="max-w-full h-auto rounded-lg shadow-lg"
                    width={500}  // Set the width of the image
                    height={500}
                />
            </motion.div>
        </div>
    );
}
