import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FiSend } from "react-icons/fi"; // use react-icons instead of lucide-react

// Helper component for accessible form fields
interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

function FormField({ id, label, type = "text", placeholder }: FormFieldProps) {
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="peer w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-800 transition-all placeholder:text-zinc-400 focus:border-[#b76b80] focus:ring-2 focus:ring-[#b76b80]/50 focus:outline-none"
        required={type === "email" || id === "name"} // Example requirement
      />
    </div>
  );
}

// Helper component for contact info items
interface ContactInfoItemProps {
  icon: any;
  title: string;
  children: any;
  href?: string;
}

function ContactInfoItem({ icon: Icon, title, children, href }: ContactInfoItemProps) {
  const Wrapper: any = href ? 'a' : 'div';
  return (
    <Wrapper href={href} className="flex items-start gap-4 group">
      <div className="flex-shrink-0 rounded-full bg-[#b76b80]/10 p-3 ring-1 ring-[#b76b80]/20">
        <Icon className="h-5 w-5 text-[#b76b80]" />
      </div>
      <div>
        <p className="font-semibold text-zinc-900">{title}</p>
        <div className="text-zinc-600 transition-colors group-hover:text-[#b76b80]">
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-zinc-50 to-white" 
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left: Contact Form */}
        <div className="flex flex-col">
          <h2 id="contact-heading" className="text-4xl sm:text-5xl font-serif font-bold text-zinc-900 mb-4">
            Let's Bring Your Idea to Life
          </h2>
          <p className="mb-8 text-lg text-zinc-600 leading-relaxed text-balance">
            Have a custom piece in mind? Fill out the form below, and our artisan will be in touch to discuss your vision.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormField id="name" label="Full Name" placeholder="Your Name" />
              <FormField id="email" label="Email Address" type="email" placeholder="Your Email" />
            </div>
            <FormField id="subject" label="Subject" placeholder="Subject (e.g., Custom Dress, Bouquet)" />
            <div className="relative">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Describe your idea, colors, size, occasion..."
                className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-800 transition-all resize-none placeholder:text-zinc-400 focus:border-[#b76b80] focus:ring-2 focus:ring-[#b76b80]/50 focus:outline-none"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#b76b80] px-8 py-3.5 text-lg text-white font-semibold shadow-lg transition-all duration-300 hover:bg-[#a05a6f] hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b76b80]"
              >
                Send Message
                <FiSend className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Right: Contact Info Card */}
        <div className="flex flex-col gap-8 rounded-3xl bg-white p-8 shadow-2xl">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Artisan studio with warm lighting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white text-xl font-serif">Our Studio</p>
          </div>

          <div className="space-y-6">
            <ContactInfoItem icon={FaMapMarkerAlt} title="Our Workshop">
              123 Meadow Lane, Portland, OR 97201
            </ContactInfoItem>
            <ContactInfoItem icon={FaPhoneAlt} title="Phone" href="tel:+15031234567">
              (503) 123-4567
            </ContactInfoItem>
            <ContactInfoItem icon={FaEnvelope} title="Email" href="mailto:hello@creationbyroju.com">
              hello@creationbyroju.com
            </ContactInfoItem>
          </div>

          <hr className="border-zinc-200" />

          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              {[
                { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
                { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
                { href: "https://pinterest.com", icon: FaPinterestP, label: "Pinterest" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="group rounded-full bg-zinc-100 p-4 text-zinc-600 transition-all hover:bg-[#b76b80] hover:text-white hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}