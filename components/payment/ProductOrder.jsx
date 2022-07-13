import Link from 'next/link';

export default function ProductOrder() {
  return (
    <article className="product-order pt-3">
      <div className="product-order-container mx-lg-5">
        <section className="product-order-image">
          <Link href="/product">
            <a>
              <img
                src="/images/image1.png"
                alt="Monochrome Watch"
                title="Monochrome Watch"
              ></img>
            </a>
          </Link>
        </section>

        <section className="product-order-qty">
          <span>1</span>
        </section>

        <section className="product-order-unit-price">
          <span className="price">$425</span>
        </section>

        <section className="product-order-vat">
          <span className="price">$25</span>
        </section>

        <section className="product-order-shipping">
          <span className="price">$15</span>
        </section>
      </div>
    </article>
  );
}
