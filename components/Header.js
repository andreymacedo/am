import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <h3>Andrey Macedo</h3>
      <Link href="/contact" className="button">
        Contact
      </Link>
    </header>
  );
}