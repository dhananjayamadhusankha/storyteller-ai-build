import Image from "next/image";
import Logo from "@/image/logo/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex flex-1">
      <section className="flex-1 grid grid-col-1 lg:grid-cols-2">
        <div className="flex flex-col space-y-5 bg-purple-500 items-center justify-center order-1 lg:-order-1 pb-10">
          <Image src={Logo} alt="logo" height={200} />
          <Button
            asChild
            className="text-lg p-9 bg-purple-700 px-20 text-white hover:bg-purple-800"
          >
            <Link href={"/stories"}>Explore Story Library</Link>
          </Button>
        </div>

        <StoryWriter />
      </section>
    </main>
  );
}
