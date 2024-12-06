import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
      <div className="text-4xl italic w-fit">Day 6</div>
      <div className="bg-white text-black text-center p-4 rounded-lg flex flex-col items-center gap-4">
        <Image
          src="/img/kygo.png"
          width={64}
          height={64}
          alt="Kygo"
          className="rounded-full border-black border"
        />
        <p>
          Avec le concert de Kygo qui arrive à grand pas, quoi de mieux pour
          s&apos;échauffer qu&apos;une petite playlist personalisée de nos
          chansons favorites ensemble ?!
        </p>
        <p>
          À écouter sans modération lors de nos road trips à travers le BW et le
          Namurois.
        </p>
        <Button className="w-fit">
          <a href="https://open.spotify.com/playlist/0tnigD06FDi96LK2J42jzP?si=82dc018a057944a2">
            Ouvrir sur Spotify
          </a>
        </Button>
      </div>
    </div>
  );
}
