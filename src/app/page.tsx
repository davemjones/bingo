import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Bing bong BINGO!
        </h1>
        <p className="text-lg text-center sm:text-left">
          A simple bingo game for the next generation of web developers.
        </p>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Add links to github etc here
      </footer>
    </div>
  );
}
