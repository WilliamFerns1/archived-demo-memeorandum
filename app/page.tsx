import { LandingPageNav } from "@/ui/components";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <LandingPageNav />
      <section className="flex flex-col justify-center h-[80vh] items-center px-2 py-3 sm:px-0 sm:py-0">
        <h1 className="text-3xl text-center bold text-yellow-400 lg:text-[3.5rem] sm:leading-none">Empower Your Day with Positivity</h1>
        <p className="text-center sm:w-3/5 w-4/5 mt-2 text-[12px] hidden lg:block">Seeking positivity in a negative world? Discover HappyPositiveNews, where you can find uplifting stories in various categories to brighten your day.</p>
        <p className="text-center sm:w-3/5 w-4/5 mt-2 text-[12px] block lg:hidden">Discover HappyPositiveNews, where you can find uplifting stories in various categories to brighten your day.</p>
        <button className="btn-primary mt-4">Start today</button>
      </section>
    </main>
  );
}

