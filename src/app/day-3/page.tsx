const MORSE_MAPPING = {
  A: [Dot, Bar],
  B: [Bar, Dot, Dot, Dot],
  C: [Bar, Dot, Bar, Dot],
  D: [Bar, Dot, Dot],
  E: [Dot],
  F: [Dot, Dot, Bar, Dot],
  G: [Bar, Bar, Dot],
  H: [Dot, Dot, Dot, Dot],
  I: [Dot, Dot],
  J: [Dot, Bar, Bar, Bar],
  K: [Bar, Dot, Bar],
  L: [Dot, Bar, Dot, Dot],
  M: [Bar, Bar],
  N: [Bar, Dot],
  O: [Bar, Bar, Bar],
  P: [Dot, Bar, Bar, Dot],
  Q: [Bar, Bar, Dot, Bar],
  R: [Dot, Bar, Dot],
  S: [Dot, Dot, Dot],
  T: [Bar],
  U: [Dot, Dot, Bar],
  V: [Dot, Dot, Dot, Bar],
  W: [Dot, Bar, Bar],
  X: [Bar, Dot, Dot, Bar],
  Y: [Bar, Dot, Bar, Bar],
  Z: [Bar, Bar, Dot, Dot],
  1: [Dot, Bar, Bar, Bar, Bar],
  2: [Dot, Dot, Bar, Bar, Bar],
  3: [Dot, Dot, Dot, Bar, Bar],
  4: [Dot, Dot, Dot, Dot, Bar],
  5: [Dot, Dot, Dot, Dot, Dot],
  6: [Bar, Dot, Dot, Dot, Dot],
  7: [Bar, Bar, Dot, Dot, Dot],
  8: [Bar, Bar, Bar, Dot, Dot],
  9: [Bar, Bar, Bar, Bar, Dot],
  0: [Bar, Bar, Bar, Bar, Bar],
};

function Bar() {
  return <div className="w-2 h-1 bg-black" />;
}

function Dot() {
  return <div className="w-1 h-1 rounded-full bg-black" />;
}

const regexp = /[\w\']+|\s|,\s/g;

function Morse({ text }: { text: string }) {
  const matches: string[] = [];
  let match: RegExpExecArray | null = null;
  while ((match = regexp.exec(text))) {
    matches.push(match[0]);
  }

  if (matches.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
      {matches.map((match: string, index: number) => {
        if (match === " ") {
          return <MorseWordSpacing key={index} />;
        }
        if (match === ", ") {
          return <MorsePunctuation key={index} />;
        }
        return <MorseWord word={match} key={index} />;
      })}
    </div>
  );
}

function MorseWordSpacing() {
  return <div className="w-2 h-2" />;
}

function MorsePunctuation() {
  return <div className="mr-2">,</div>;
}

function MorseWord({ word }: { word: string }) {
  return (
    <div className="flex flex-row gap-2">
      {Array.from(word).map((char: string, i: number) => (
        <MorseLetter key={i} char={char} />
      ))}
    </div>
  );
}

function MorseLetter({ char }: { char: string }) {
  const upperChar = char.toUpperCase();
  if (!(upperChar in MORSE_MAPPING)) {
    return null;
  }

  return (
    <div className="flex flex-row gap-1 mr-2 text-black">
      {MORSE_MAPPING[upperChar as keyof typeof MORSE_MAPPING].map(
        (Element, i) => (
          <Element key={i} />
        )
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 place-items-center">
      <div className="text-4xl italic w-fit">Day 3</div>
      <div className="bg-white p-4 rounded-lg flex flex-col gap-4">
        <Morse text="Malgre tous tes efforts pour me voir le moins possible, j'ai passe un bon moment" />
        <div className="w-fit self-end">
          <Morse text="28 janvier 2022, 00h05" />
        </div>
      </div>
    </div>
  );
}
