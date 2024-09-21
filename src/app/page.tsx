"use client";
import Image from "next/image";
import {
  IDKitWidget,
  VerificationLevel,
  ISuccessResult,
} from "@worldcoin/idkit";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Creation from "./assets/cretion-img.png";
import Community from "./assets/community-img.png";

export default function Home() {
  const handleVerify = async (proof: ISuccessResult) => {
    const res = await fetch("/api/verify", {
      // route to your backend will depend on implementation
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    if (!res.ok) {
      throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    }
  };

  const onSuccess = () => {
    // This is where you should perform any actions after the modal is closed
    // Such as redirecting the user to a new page
    window.location.href = "/creator";
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h2 className="text-2xl relative z-10 md:text-4xl lg:text-7xl font-bold text-cente font-sans tracking-tight">
            The 360&deg; where Creators & Communities <br /> Connect{" "}
          </h2>
        </div>
        <div className="my-12 flex items-center justify-center gap-x-12 w-full">
          <div className="bg-white/10 backdrop-blur-md w-1/2 rounded-xl flex flex-col gap-y-4 items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white w-full text-left">
              For Creators
            </h1>
            <Image src={Creation} alt="sample" width={250} height={250} />
            <h1 className="text-4xl font-bold w-full text-left text-white">
              Build your Community{" "}
            </h1>
          </div>
          <div className="bg-white/10 backdrop-blur-md w-1/2 rounded-xl flex flex-col gap-y-4 items-center justify-center p-4">
            <h1 className="text-4xl font-bold text-white w-full text-left">
              For Creators
            </h1>
            <Image src={Community} alt="sample" width={250} height={250} />
            <h1 className="text-4xl font-bold w-full text-left text-white">
              Find your Community{" "}
            </h1>
          </div>
        </div>
        <div className="my-4 flex items-center justify-center">
          <IDKitWidget
            app_id="app_staging_85dcf7819199b4cf69958d500ba8b550"
            action="ethsingapore-test"
            onSuccess={onSuccess}
            handleVerify={handleVerify}
            verification_level={VerificationLevel.Orb}
          >
            {({ open }) => (
              // This is the button that will open the IDKit modal
              <button
                onClick={open}
                className="text-3xl rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 px-8 py-4 text-white font-bold z-10"
              >
                Verify with World ID
              </button>
            )}
          </IDKitWidget>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
