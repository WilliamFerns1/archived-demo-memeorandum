export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <header className="flex w-full justify-between items-center px-16 py-4">
        <h1 className="semibold text-xl">HappyPositiveNews</h1>
        <nav className="flex items-center gap-4">
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/contact">Contact</a>
          <a className="nav-link" href="/home">Home</a>
        </nav>
        <div className="flex items-center gap-4">
          <a className="nav-link" href="/login">Login</a>
          <button className="btn-primary-small">Sign Up</button>
        </div>
      </header>
      <section className="flex flex-col justify-center h-[80vh] items-center gap-4 leading-none">
        <h1 className="semibold text-[4.5rem] text-yellow-400">Read positive stories and news</h1>
        <p className="text-center w-3/5">Tired of all the negative news? Everywhere you go, people are stressed out, and unhappy. It doens't have to be that wey. HappyPositiveNews is a media platform where you can spend a small amount of time each day, reading positive news and stories, around various categories, to light up your day.</p>
        <button className="btn-primary">Start today</button>
      </section>
    </main>
  );
}
