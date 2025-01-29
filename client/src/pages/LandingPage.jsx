import Header from "@/components/commen/Header/Header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarGroup } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";
import dashBoard from "../../image/dashBoardImage.png";

function LandingPage() {
  const avatarImages = [
    {
      imageUrl: "https://github.com/shadcn.png",
      altText: "CN",
    },
    {
      imageUrl: "https://github.com/shadcn.png",
      altText: "CN",
    },
    {
      imageUrl: "https://github.com/shadcn.png",
      altText: "CN",
    },
    {
      imageUrl: "https://github.com/shadcn.png",
      altText: "CN",
    },
  ];

  return (
    <>
      <div className="container">
        <header className="">
          <Header />
        </header>
        <main>
          <div>
            <div className="flex flex-col gap-10 mt-10 justify-center items-center">
              <div className="flex gap-4">
                <div className="flex">
                  <AvatarGroup spacing="small">
                    {avatarImages.map((image) => (
                      <Avatar
                        key={new Date() * Math.random()}
                        src={image.imageUrl}
                        alt={image.altText}
                      ></Avatar>
                    ))}
                  </AvatarGroup>
                </div>
                <div>
                  <div className="flex ">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p>
                    Join <span className="font-bold">100+</span> business
                  </p>
                </div>
              </div>
              <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight	">
                Streamline Your Business with Fusion ERP
              </h1>
              <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
                Unlock Efficiency and Growth with Fusion ERP
              </p>
              <div className="flex gap-4">
                <Button
                  variant="Btn3"
                  className="border-solid border-2 border-gray-400"
                >
                  Learn More
                </Button>
                <Button variant="Btn2" className="rounded text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default LandingPage;
