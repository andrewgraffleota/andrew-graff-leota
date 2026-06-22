import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-black tracking-widest text-white">
          AGL.
        </Link>

        <div className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/ai" className="hover:text-white">AI</Link>
          <Link href="/content" className="hover:text-white">Content</Link>
          <Link href="/contact" className="rounded-full bg-white px-4 py-2 font-medium text-black hover:bg-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}