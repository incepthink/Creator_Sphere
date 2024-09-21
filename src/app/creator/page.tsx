import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const CreatorPage = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center">
        <TextGenerateEffect words="Design & Configure your Community Experience." />
        <form className="w-full max-w-lg border-2 backdrop-blur-md border-white p-8 rounded-xl shadow-md text-white mt-[7rem]">
          <div className="mb-4">
            <Label
              htmlFor="title"
              className="block text-white text-lg font-bold mb-2"
            >
              Username
            </Label>
            <Input
              id="title"
              type="text"
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
              placeholder="Enter description"
              className="w-full px-4 py-3 border rounded"
            />
          </div>
          <div className="mb-4">
            <Label
              htmlFor="title"
              className="block text-white text-lg font-bold mb-2"
            >
              Picture
            </Label>
            <Input id="title" type="file" className="w-full  border rounded" />
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
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default CreatorPage;
