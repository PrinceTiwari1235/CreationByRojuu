export default function Contact() {
  return (
    <section className="py-8 px-4 md:px-0" id="contact" aria-label="Contact Information">
      <h3 className="text-xl md:text-2xl font-semibold">Contact Creation By Roju</h3>
      <p className="mt-2 text-zinc-700">
        Questions or custom orders? Email us at{' '}
        <a
          href="mailto:hello@creationforyou.example"
          className="text-blue-600 underline break-all"
        >
          hello@creationforyou.example
        </a>
      </p>
    </section>
  );
}
