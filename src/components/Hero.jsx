import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-2 items-center">
        <img className="rounded full w-80 h-80" src="/favicon.png" alt="logo" />
        <p>Commit.</p>
        <h1 className="uppercase font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-7xl">
          Life’s tough.<span className="text-blue-400">Get fit.</span>{" "}
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I acknowledge that I may achieve serious gains and accept all associated
        risks, including potential body image concerns and changes to my
        physical appearance, as I pursue my fitness goals.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
