import LandingPageNavPart from "@/ui/components/parts/nav/LandingPageNavPart";

export default function LandingPageNav() {

  return (
    <header
      id="header"
      className="flex w-full justify-between items-center px-5 py-3 sm:px-7 md:px-10 lg:px-14 lg:py-4 relative"
    >
      <h1 className="semibold text-md sm:text-l lg:text-xl">
        HappyPositiveNews
      </h1>
      <LandingPageNavPart />
    </header>
  )
}
