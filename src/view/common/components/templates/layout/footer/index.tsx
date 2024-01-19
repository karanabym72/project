import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-footer">
        <div className="mx-auto max-w-screen-xl sm:p-14 p-4">
          <div className="flex justify-center lg:justify-end">
            <Link
              className="inline-block rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 sm:p-3 lg:p-4"
              href="#header">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          <div className="lg:flex lg:justify-between">
            <div>
              <div className="justify-center lg:justify-start">
                <h3 className="text-white font-Classy">
                  Located 15 mins from Varanasi Airport
                </h3>
              </div>
              <div className="mx-auto mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917558.9588712271!2d81.85042969478121!3d26.059239403549235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399029002967011f%3A0xf17acd6ef622094f!2sADA%20Abode!5e0!3m2!1sen!2sin!4v1705043464220!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0", borderRadius: '16px!important' }}
                  loading="lazy"
                />
              </div>
            </div>

            <nav aria-label="Footer Nav">
              <div className="justify-center lg:justify-start address-sec">
                <ul className="block flex-wrap justify-start gap-6">
                  <li>
                    ADA ABODE <br />
                    Village Asbaranpur, <br />
                    Tehsil Keerakat, Jaunpur UP - 222136
                  </li>

                  <li>
                    T. +91 9953138012
                  </li>

                  <li>
                    E. adaabode7@gmail.com
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </footer>

      <ul className="flex flex-wrap p-4 text-black justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/"
          >
            Group Booking
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/carta"
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/reserva"
          >
            Find Reservations
          </Link>
        </li>

        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/contacto"
          >
            In-room Dining
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/contacto"
          >
            Restaurant
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-700 transition hover:text-green-500"
            href="/contacto"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}
