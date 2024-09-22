import { ethers } from "ethers";
import { CreatorSBT } from "./CreatorSBT"


const creatorSBTAddress = "0x562db143B891D2D05A9e8B72c7DA59077E66A081";
const provider = new ethers.providers.JsonRpcProvider("https://network.ambrosus.io/");
const privateKey = "71d9afd17cc286059a89ecdef942e661febb7fdd578868eee7e26617ccf2c970";
const signer = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(creatorSBTAddress, CreatorSBT, signer);


async function mintSBT(address: string) {
    try {
    const tx = await contract.mintSBT(address);
    await tx.wait();
    console.log(tx.hash);
    console.log("SBT minted");
    } catch (error) {
    console.error("Error:", error);
    }
}

async function hasSBT(address: string) {
    try {
        const hasSBT = await contract.hasToken(address);
        console.log(hasSBT);
    } catch (error) {
        console.error("Error:", error);
    }
}

export { mintSBT, hasSBT };
