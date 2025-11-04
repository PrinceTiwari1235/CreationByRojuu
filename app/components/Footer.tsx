export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/40">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-6 text-sm text-zinc-600">
        © {new Date().getFullYear()} CreationForYou. Built with Next.js.
      </div>
    </footer>
  );
}
