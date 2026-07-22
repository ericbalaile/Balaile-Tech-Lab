function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold">Global Work and Travel</h2>

          <p className="mt-4 text-sm text-gray-300">
            Connecting people with international work, travel, and career
            opportunities.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Opportunities</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Services</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Work Abroad</li>
            <li>Study Abroad</li>
            <li>Travel Support</li>
            <li>Career Guidance</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Email: info@example.com</li>
            <li>Phone: +255 XXX XXX XXX</li>
            <li>Location: Tanzania</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 px-6 py-6 text-center text-sm text-gray-400">
        © 2026 Global Work and Travel Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
