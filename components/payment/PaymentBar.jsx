import Link from 'next/link';

export default function PaymentBar() {
  return (
    <section className="payment-bar">
      <ul className="payment-bar-progress">
        <li>
          <Link href="/order-sign-in">
            <a title="Sign in">
              Sign in
              <span className="step first-step step-active"></span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/shipping">
            <a title="Shipping">
              Shipping
              <span className="step second-step step-inactive"></span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/billing">
            <a title="Billing">
              Billing
              <span className="step third-step step-inactive"></span>
            </a>
          </Link>
        </li>

        <li>
          <Link href="/confirm">
            <a title="Confirm">
              Confirm
              <span className="step fourth-step step-inactive"></span>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}
