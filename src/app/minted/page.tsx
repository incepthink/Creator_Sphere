import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import Animation from "@/app/assets/Animation.gif";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const MintedPage = () => {
  return (
    <BackgroundBeamsWithCollision>
      <TextGenerateEffect words="Congratulations! Your NFT has been minted." />
      <div className="flex items-center justify-center">
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
            <h1 className="text-3xl text-center font-bold mt-2">0xMyname</h1>
          </CardBody>
        </CardContainer>
      </div>
      <div className="my-12 text-3xl font-bold tracking-wide underline underline-offset-4">
        Complete the further task to earn tokens
      </div>
      <div className="flex flex-col gap-y-8 justify-center items-start w-full">
        <div className="flex items-center justify-center w-full gap-x-28">
          <p className="text-2xl font-bold">Task-1</p>
          <Link href={"https://x.com/"} className="text-2xl">
            Post a Tweet
          </Link>
          <p className="text-2xl text-gray-400 font-bold">20 Loyalty Points</p>
        </div>
        <div className="flex items-center justify-center w-full gap-x-[98px]">
          <p className="text-2xl font-bold">Task-2</p>
          <Link href={"https://x.com/compose/post"} className="text-2xl">
            Follow on Twitter
          </Link>
          <p className="text-2xl text-gray-400 font-bold">20 Loyalty Points</p>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default MintedPage;
