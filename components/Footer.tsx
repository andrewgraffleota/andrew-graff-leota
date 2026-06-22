import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-gray-500">
        <p>© 2026 Andrew Graff Leota.</p>

        <Link href="/" className="text-lg font-black tracking-widest text-white hover:text-blue-400 transition">
          AGL.
        </Link>
      </div>
    </footer>
  );
}