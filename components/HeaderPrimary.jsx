export default function HeaderPrimary() {
  return (
    <section className="header-primary">
      <div className="header-primary-inner">
        <div className="header-search d-block d-lg-none container">
          <ul>
            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Menu"
              >
                <i className="fa-solid fa-bars"></i>
              </a>
            </li>

            <li>
              <form className="search-form">
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
            </li>
          </ul>
        </div>

        <nav className="header-nav d-none d-lg-block container">
          <ul>
            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="New arrivals"
              >
                New arrivals
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Brands"
              >
                Brands
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Men's"
              >
                Men&apos;s
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Women's"
              >
                Women&apos;s
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Accessories"
              >
                Accessories
              </a>
            </li>

            <li>
              <a
                href="https://monochrome-mihaela-vlad.netlify.app/"
                title="Lookbook"
              >
                Lookbook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
