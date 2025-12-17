import Link from 'next/link';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">
        <Link href="/" className="font-bold">
          Product App
        </Link>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
