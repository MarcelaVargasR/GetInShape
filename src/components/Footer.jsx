import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div>
            <img
              className="w-auto h-8 sm:w-30 sm:h-14"
              src="/public/getinshape-logo-1.png"
              alt="logo"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Your journey to a healthier, stronger, and more confident you starts here.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Community</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Get In Shape
      </div>
    </footer>
  );
}
