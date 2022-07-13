import PaymentBar from './PaymentBar';

export default function ShippingOrder() {
  return (
    <section className="shipping-order container mt-4 mt-lg-5 pb-5">
      <header className="shipping-order-header">
        <h1>Shipping</h1>
      </header>

      <section className="payment-bar">
        <PaymentBar></PaymentBar>
      </section>

      <section className="shipping-info">
        <div className="shipping-info-inner ms-5 pb-5">
          <section className="shipping-client-info">
            <form>
              <fieldset>
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  className="input"
                  name="title"
                  id="title"
                  placeholder="Title"
                  required
                ></input>

                <label htmlFor="name">First name *</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  id="name"
                  placeholder="First name"
                  required
                ></input>

                <label htmlFor="surname">Last name *</label>
                <input
                  type="text"
                  className="input"
                  name="surname"
                  id="surname"
                  placeholder="Last name"
                  required
                ></input>

                <label htmlFor="country">Country *</label>
                <select name="country" id="country" required>
                  <option value="">--Select your country--</option>
                  <option value="romania">Romania</option>
                  <option value="france">France</option>
                  <option value="italy">Italy</option>
                  <option value="sweden">Sweden</option>
                  <option value="germany">Germany</option>
                  <option value="poland">Poland</option>
                  <option value="bulgaria">Bulgaria</option>
                  <option value="finland">Finland</option>
                </select>

                <label htmlFor="address1">Address Line 1 *</label>
                <input
                  type="text"
                  className="input"
                  name="address1"
                  id="address1"
                  placeholder="Address Line 1"
                  required
                ></input>

                <label htmlFor="address2">Address Line 2</label>
                <input
                  type="text"
                  className="input"
                  name="address2"
                  id="address2"
                  placeholder="Address Line 2"
                ></input>

                <label htmlFor="city">City *</label>
                <select name="city" id="city" required>
                  <option value="">--Select your city--</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                  <option value="city4">City 4</option>
                  <option value="city5">City 5</option>
                  <option value="city6">City 6</option>
                  <option value="city7">City 7</option>
                  <option value="city8">City 8</option>
                </select>

                <label htmlFor="county">County / province</label>
                <input
                  type="text"
                  className="input"
                  name="county"
                  id="county"
                  placeholder="County / province"
                ></input>

                <label htmlFor="postcode">Postcode / zip *</label>
                <input
                  type="text"
                  className="input"
                  name="postcode"
                  id="postcode"
                  placeholder="Postcode / zip"
                  required
                ></input>

                <label htmlFor="phone">Phone number *</label>
                <input
                  type="text"
                  className="input"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  required
                ></input>

                <span>* required fields</span>

                <input
                  type="radio"
                  className="input"
                  name="shipping-address"
                  id="same-address"
                  value="same-address"
                  required
                ></input>
                <label htmlFor="same-address">
                  Use shipping address as billing address
                </label>

                <input
                  type="radio"
                  className="input"
                  name="shipping-address"
                  id="different-address"
                  value="different-address"
                  required
                ></input>
                <label htmlFor="different-address">
                  Enter separate billing address
                </label>

                <button type="submit" className="dark-button" title="Continue">
                  Continue
                </button>
              </fieldset>
            </form>

            <section className="shipping-details">
              <header className="shipping-details-header">
                <h1>Shipping details</h1>
              </header>

              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. builder of.
              </p>

              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. builder of.
              </p>
            </section>
          </section>
        </div>
      </section>
    </section>
  );
}
