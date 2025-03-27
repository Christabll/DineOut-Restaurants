import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function BookingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/booking/hero-bg-desktop.jpg"
          alt="Reservations Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* "dine" heading */}
        <div
          className="absolute z-20"
          style={{
            top: '100px',  
            left: '160px', 
          }}
        >
          <h2 className="text-3xl font-extrabold text-white">dine</h2>
        </div>

        {/* Reservations + Paragraph */}
        <div
          className="absolute z-20 max-w-sm"
          style={{
            top: '290px',  
            left: '160px',
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Reservations
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-2">
            We can’t wait to host you. If you have any special requirements,
            please feel free to call us on the phone number below. We’ll be
            happy to accommodate you.
          </p>
        </div>
      </section>

      {/* BOOKING FORM SECTION */}

      <section className="relative -mt-24 md:-mt-28 z-20 mb-8">
        <div className="container mx-auto px-4 md:px-6 flex justify-end">
          <div className="relative bg-white p-6 md:p-8 shadow-xl rounded-xl w-[480px]">

            <div className="absolute -bottom-4 -left-14 z-[-1]">
              <Image
                src="/images/patterns/pattern-lines.svg"
                alt="Decorative lines"
                width={120}
                height={60}
              />
            </div>

            <form className="space-y-6">
              {/* Name */}
              <div className="border-b border-gray-300 focus-within:border-black">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent py-2 px-0 placeholder-gray-500 text-gray-900 focus:outline-none"
                />
              </div>
              {/* Email */}
              <div className="border-b border-gray-300 focus-within:border-black">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent py-2 px-0 placeholder-gray-500 text-gray-900 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Pick a date</div>
                <div className="flex gap-2">
                  {['MM', 'DD', 'YYYY'].map((placeholder) => (
                    <div
                      key={placeholder}
                      className="border-b border-gray-300 w-[60px] focus-within:border-black"
                    >
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full bg-transparent py-1 px-0 text-center placeholder-gray-500 text-gray-900 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Pick a time</div>
                <div className="flex gap-2 items-center">

                  <div className="border-b border-gray-300 w-[40px] focus-within:border-black">
                    <input
                      type="text"
                      placeholder="09"
                      className="w-full bg-transparent py-1 px-0 text-center placeholder-gray-500 text-gray-900 focus:outline-none"
                    />
                  </div>
                  <span className="text-gray-500">:</span>

                  <div className="border-b border-gray-300 w-[40px] focus-within:border-black">
                    <input
                      type="text"
                      placeholder="00"
                      className="w-full bg-transparent py-1 px-0 text-center placeholder-gray-500 text-gray-900 focus:outline-none"
                    />
                  </div>

                  <div className="border-b border-gray-300 w-[50px] focus-within:border-black">
                    <select className="w-full bg-transparent py-1 px-0 text-center text-gray-900 focus:outline-none appearance-none">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">Number of People</div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-gray-900">4 people</span>
                  <button
                    type="button"
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Submit Button */}
              <Button className="bg-black text-white w-full hover:bg-gray-800 uppercase tracking-widest mt-4">
                MAKE RESERVATION
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-extrabold">dine</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 tracking-wider">
              <div>
                <p className="text-gray-400 text-sm">MARTHWAITE, SEDBERGH</p>
                <p className="text-gray-400 text-sm">CUMBRIA</p>
                <p className="text-gray-400 text-sm">+00 44 123 4567</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">
                  MON - FRI: 09:00 AM - 10:00 PM
                </p>
                <p className="text-gray-400 text-sm">
                  SAT - SUN: 09:00 AM - 11:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
