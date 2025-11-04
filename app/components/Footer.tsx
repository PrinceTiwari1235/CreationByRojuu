export default function Footer() {
  return (
    <footer className="w-full border-t bg-white/40" aria-label="Site Footer">
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-6 text-sm text-zinc-600">
        <span>
          © {new Date().getFullYear()} CreationForYou. Handcrafted artisan products. Built with Next.js.
        </span>
      </div>
    </footer>
  );
}
