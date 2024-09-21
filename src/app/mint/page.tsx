"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import Animation from "@/app/assets/Animation.gif";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const MintPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  return (
    <BackgroundBeamsWithCollision>
      <TextGenerateEffect words="Mint a NFT token and Claim Your Loyalty Points" />
      <div className="flex items-center justify-between my-[6rem] px-[10rem] w-full">
        <form className="w-full max-w-lg text-white">
          <div className="mb-4">
            <Label
              htmlFor="title"
              aria-required="true"
              className="block text-white text-lg font-bold mb-2"
            >
              Title
            </Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Username"
              className="w-full px-4 py-3 border rounded"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="description"
              className="block text-sm font-bold mb-2"
            >
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full px-4 py-3 border rounded"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-lg rounded-lg bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 px-6 py-2 text-white font-bold"
            >
              Submit
            </button>
          </div>
        </form>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={Animation}
                alt="animation"
                width={400}
                height={400}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            <h1 className="text-3xl text-center font-bold mt-2">
              {title ? `0x${title}` : "0xMyname"}
            </h1>
          </CardBody>
        </CardContainer>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MintPage;
