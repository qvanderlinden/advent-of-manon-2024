"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { buttonVariants } from "@/components/ui/button";

function Component() {
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next");

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="text-4xl italic">Welcome to Advent of Manon 2024 !</div>

      {nextPath !== null && (
        <Link
          className={`${buttonVariants({ variant: "outline" })} text-black`}
          href={`/${nextPath}`}
        >
          See today&apos;s gift
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}
