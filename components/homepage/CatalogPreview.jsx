import ProductTile from '../catalog/ProductTile';

export default function CatalogPreview() {
  return (
    <>
      <section className="catalog-preview my-3 my-lg-4 container">
        <div className="catalog-preview-inner">
          <header className="catalog-preview-header">
            <h1>New Stuff</h1>
          </header>

          <section className="product-tiles">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>

            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>

          <footer className="catalog-preview-ctas mt-5">
            <a title="View all" className="button ">
              View all
            </a>
          </footer>
        </div>
      </section>
    </>
  );
}
