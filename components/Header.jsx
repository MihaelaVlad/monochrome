import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';

export default function Header() {
  return (
    <header className="header">
      <HeaderSecondary className=" mt-lg-3"></HeaderSecondary>

      <HeaderPrimary></HeaderPrimary>
    </header>
  );
}
