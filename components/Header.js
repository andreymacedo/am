import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/" ><h3>Andrey Macedo</h3></Link>
      <Link href="mailto:andrey.rm@gmail.com" className="button">
        Contact <div className="icon">→</div>
      </Link>
    </header>
  );
}