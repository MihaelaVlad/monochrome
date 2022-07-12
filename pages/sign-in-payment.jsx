import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderSmall from '../components/HeaderSmall';
import SignInPay from '../components/payment/SignInPay';
import Help from '../components/Help';

export default function SignInPayment() {
  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>

      <HeaderSmall></HeaderSmall>

      <main className="content">
        <SignInPay></SignInPay>

        <Help></Help>
      </main>

      <Footer></Footer>
    </div>
  );
}
