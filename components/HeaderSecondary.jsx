export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-secondary-inner container">
        <section className="header-connect mt-lg-5 d-none d-lg-block">
          <ul>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Youtube channel"
              >
                <i className="fa-brands fa-youtube-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Twitter account"
              >
                <i className="fa-brands fa-twitter-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Facebook account"
              >
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Monochrome Instagram account"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>

            <li>
              <a href="tel:+4401023456789" title="Call us">
                Call us: +44 010 2345 6789
              </a>
            </li>
          </ul>
        </section>

        <section className="header-controls mt-lg-5">
          <header className="d-block d-lg-none">
            <h1 className="header-title">Monochrome</h1>
          </header>

          <form className="header-search d-none d-lg-block">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              required
            ></input>

            <button type="submit" name="search" id="search" title="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <ul className="user-controls">
            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="User account"
              >
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Wishlist"
              >
                <i className="fa-solid fa-heart"></i>
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Shopping bag"
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
