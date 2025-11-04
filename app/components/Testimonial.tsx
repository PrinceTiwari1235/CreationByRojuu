export default function Testimonial() {
  return (
    <section className="py-8 px-4 md:px-0" id="testimonials" aria-label="Customer Testimonials">
      <h3 className="text-xl md:text-2xl font-semibold">Customer Testimonials</h3>
      <div className="mt-4 space-y-4">
        <blockquote className="rounded border p-4 text-zinc-700" cite="https://creationbyroju.example">
          “Lovely quality and fast shipping. I buy from here every season.” — Alex
        </blockquote>
        <blockquote className="rounded border p-4 text-zinc-700" cite="https://creationbyroju.example">
          “Exceeded expectations — beautiful packaging and product.” — Jamie
        </blockquote>
      </div>
    </section>
  );
}
