"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSecrion = () => {
    const imageRef = useRef();

     useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="pb-20 px-4 ">
      <div className="container mx-auto p-6 pt-20 text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] gradient-title  mb-6">
          Your Personal Finance Assistant <br /> Powered by AI
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-8 max-w-2xl mx-auto">
          BudgetIQ helps you track your spending, plan your savings, and stay in
          control of your money all with the power of AI. 
        </p>
        <div >
          <Link href="/dashboard">
            <Button size={"lg"} className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image" ref={imageRef}>
            <Image
              src={"/banner.jpeg"}
              width={1280}
              height={720}
              alt="Dasboard Preview"
              className="rounded-lg shadow-2xl border mx-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecrion;
