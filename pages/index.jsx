import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <header className="header mt-5 ms-5">
        <h1>Monochrome</h1>
      </header>

      <main className="content mt-5 ms-5">
        <i className="fa-brands fa-youtube-square me-5"></i>

        <button className="category-cta" title="View all">
          View all
        </button>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}
