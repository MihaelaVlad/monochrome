export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a
            href="https://monochrome-mihaela-vlad.netlify.app/"
            title="Machine black watch"
          >
            <img src="/images/image1.png" alt="Machine black watch"></img>
          </a>
        </div>

        <a href="https://monochrome-mihaela-vlad.netlify.app/" title="Wishlist">
          <i className="fa-solid fa-shield-heart"></i>
        </a>

        <div>
          <h1 className="product-tile-title">
            <a
              href="https://monochrome-mihaela-vlad.netlify.app/"
              title="Monochrome"
            >
              Monochrome
            </a>
          </h1>
        </div>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>
    </article>
  );
}
