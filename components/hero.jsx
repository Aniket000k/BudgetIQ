"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSecrion = () => {
  return (
    <div className="pb-20 px-4 ">
      <div className="container mx-auto p-6 pt-20 text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px]  mb-6">
          Your Personal Finance Assistant <br /> Powered by AI
        </h1>
        <p>
          BudgetIQ helps you track your spending, plan your savings, and stay in
          control of your money — all with the power of AI. Whether you're
          managing daily expenses or setting long-term goals, our smart tools
          make finance easy and stress-free.
        </p>
        <div>
          <Link href="/dashboard">
            <Button size={"lg"} className="px-8">
              Get Started
            </Button>
          </Link>
        </div>
        <div>
          <div>
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
