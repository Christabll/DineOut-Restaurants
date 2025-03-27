import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='bg-black text-white h-[600px] md:h-[650px] relative overflow-hidden'>
        {/* Image on right side */}
        <div className='absolute top-0 right-0 bottom-0 w-full md:w-[81%]'>
          <Image
            src='/images/homepage/hero-bg-desktop.jpg'
            alt='Exquisite dish'
            fill
            className='object-cover object-left'
            priority
          />
        </div>

        {/* Content that overlaps the image */}
        <div className='container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center'>
          <div className='max-w-md py-16 pl-4 md:pl-8 lg:pl-16'>
            <h1 className='text-3xl font-extrabold mb-10'>dine</h1>
            <h2 className='text-5xl md:text-6xl font-light mb-6 leading-tight'>
              Exquisite dining since 1989
            </h2>
            <p className='text-base mb-10 text-gray-300 max-w-sm'>
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </p>
            <Button
              variant='outline'
              className='border border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest'
            >
              Book a table
            </Button>
          </div>
        </div>

        {/* Dark overlay for text readability on mobile */}
        <div className='absolute inset-0 bg-black opacity-60 md:opacity-0 md:w-0'></div>
      </section>

      {/* Enjoyable Place Section */}
      <section className='bg-white py-16 md:py-24 relative'>
        {/* Gray background element for image with top-right border radius */}
        <div className='absolute left-0 w-3/4 md:w-[60%] h-[300px] bg-[#5C6779]/10 top-[20%] rounded-tr-[6.25rem] hidden md:block'></div>

        <div className='container mx-auto px-4 md:px-6 relative'>
          <div className='grid md:grid-cols-12 gap-1'>
            {/* Image column - spans 6 columns on md screens */}
            <div className='md:col-span-6 relative'>
              {/* Image with negative margin to overlap with hero section */}
              <div className='relative md:-mt-32 z-10'>
                <Image
                  src='/images/homepage/enjoyable-place-desktop.jpg'
                  alt='Nature landscape'
                  width={540}
                  height={500}
                  className='object-cover w-full h-full'
                />
              </div>
            </div>

            {/* Empty column for spacing */}
            <div className='hidden md:block md:col-span-1'></div>

            {/* Text column - spans 5 columns and positioned to the right */}
            <div className='md:col-span-5'>
              <div className='md:mt-16'>
                {/* Decorative element */}
                <div className='flex items-center mb-8'>
                  <div className='w-2 h-2 rounded-full bg-amber-500'></div>
                  <div className='w-16 h-px bg-amber-500 ml-2'></div>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                  Enjoyable place for all the family
                </h2>
                <p className='text-gray-600 mb-4'>
                  Our relaxed surroundings make dining with us a great
                  experience for everyone. We can even arrange a tour of the
                  farm before your meal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locally Sourced Section */}
      <section className='bg-white py-16 md:py-24 relative'>
        {/* Gray background element for text with bottom-left border radius */}
        <div className='absolute right-0 w-3/4 md:w-[60%] h-[300px] bg-[#5C6779]/10 top-[70%] rounded-tl-[6.25rem] hidden md:block'></div>

        <div className='container mx-auto px-4 md:px-6 relative'>
          <div className='grid md:grid-cols-12 gap-1'>
            {/* Text column - spans 5 columns */}
            <div className='md:col-span-5 relative z-10'>
              <div className='md:mt-[28rem]'>
                {/* Decorative element */}
                <div className='flex items-center mb-8'>
                  <div className='w-2 h-2 rounded-full bg-amber-500'></div>
                  <div className='w-16 h-px bg-amber-500 ml-2'></div>
                </div>

                <h2 className='text-3xl md:text-4xl font-bold mb-6 text-gray-900'>
                  The most locally sourced food
                </h2>
                <p className='text-gray-600 mb-4'>
                  All our ingredients come directly from our farm or local
                  fishery. So you can be sure that you&#39;re eating the
                  freshest, most sustainable food.
                </p>
              </div>
            </div>

            {/* Empty column for spacing */}
            <div className='hidden md:block md:col-span-1'></div>

            {/* Image column - spans 6 columns */}
            <div className='md:col-span-6 relative'>
              <div className='relative z-20 md:mb-[-150px]'>
                <Image
                  src='/images/homepage/locally-sourced-desktop.jpg'
                  alt='Chef preparing food'
                  width={540}
                  height={500}
                  className='object-cover w-full h-full'
                />

                {/* Decorative stripes element */}
                <div className='absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block'>
                  <div className='space-y-2'>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className='h-[6px] w-40 bg-[#9E7F66]'></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className='bg-black text-white py-16 md:py-24 relative'>
        {/* Add padding to the top to account for the overlapping image */}
        <div className='container mx-auto px-4 md:px-6 relative pt-[80px] md:pt-[120px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16'>
            {/* Left column - heading and intro text */}
            <div className='mb-12 md:mb-0'>
              {/* Decorative element */}
              <div className='flex items-center mb-8'>
                <div className='w-2 h-2 rounded-full bg-amber-500'></div>
                <div className='w-16 h-px bg-amber-500 ml-2'></div>
              </div>

              <h2 className='text-3xl md:text-5xl font-bold mb-8'>
                A few highlights from our menu
              </h2>
              <p className='text-gray-400 max-w-md'>
                We cater for all dietary requirements, but here&#39;s a glimpse at
                some of our diner&#39;s favourites. Our menu is revamped every
                season.
              </p>
            </div>

            {/* Right column - menu items */}
            <div className='space-y-8'>
              {menuItems.map((item, index) => (
                <div key={index}>
                  <div className='flex items-start gap-4'>
                    <div className='flex-shrink-0'>
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        width={100}
                        height={100}
                        className='object-cover w-[100px] h-[100px]'
                      />
                    </div>

                    <div className='flex items-center gap-4 mt-2'>
                      <div className='w-8 h-px bg-amber-500'></div>

                      <div>
                        <h3 className='text-xl font-bold mb-2'>
                          {item.title}
                        </h3>
                        <p className='text-gray-400 text-sm'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {index < menuItems.length - 1 && (
                    <Separator className='bg-gray-800 mt-8' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Family Gathering Section */}
      <section className='bg-white py-16 md:py-24 relative'>
        {/* Gray background element for image */}
        <div className='absolute left-0 w-[35%] md:w-[35%] h-80 bg-gray-100 top-[0%] rounded-tr-[6.25rem] hidden md:block'></div>

        <div className='container mx-auto px-4 md:px-6 relative'>
          <div className='grid md:grid-cols-12 gap-8'>
            {/* Image column - spans 6 columns */}
            <div className='md:col-span-6 relative'>
              <div className='relative z-10'>
                <Image
                  src='/images/homepage/family-gathering-desktop.jpg'
                  alt='Family dining together'
                  width={540}
                  height={600}
                  className='object-cover w-full h-full'
                />

                {/* Decorative stripes element */}
                <div className='absolute left-4 top-8 hidden md:block'>
                  <div className='space-y-2'>
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className='h-1 w-40 bg-[#9E7F66]'></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Empty column for spacing */}
            <div className='hidden md:block md:col-span-1'></div>

            {/* Text column - spans 5 columns */}
            <div className='md:col-span-5'>
              <div className='md:mt-16'>
                <h2 className='text-3xl md:text-5xl font-bold mb-6 text-gray-900'>
                  Family Gathering
                </h2>
                <p className='text-gray-600 mb-8'>
                  We love catering for entire families. So please bring everyone
                  along for a special meal with your loved ones. We&#39;ll
                  provide a memorable experience for all.
                </p>

                <Button className='bg-black text-white hover:bg-gray-800 uppercase tracking-widest'>
                  Book a table
                </Button>

                <div className='mt-12'>
                  <div className='flex items-center mb-4'>
                    <div className='w-16 h-px bg-amber-500 mr-4'></div>
                    <span className='text-sm font-medium text-gray-900'>
                      FAMILY GATHERING
                    </span>
                  </div>
                  <p className='text-sm text-gray-500 mb-2'>SPECIAL EVENTS</p>
                  <p className='text-sm text-gray-500'>SOCIAL EVENTS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className='relative bg-black text-white py-16'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/homepage/ready-bg-desktop.jpg'
            alt='Food background'
            fill
            className='object-cover opacity-40'
          />
        </div>
        <div className='container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row justify-around items-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6 md:mb-0'>
            Ready to make a reservation?
          </h2>
          <Button
            variant='outline'
            className='border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors'
          >
            BOOK A TABLE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col md:flex-row justify-evenly items-start md:items-center'>
            <div className='mb-6 md:mb-0'>
              <h2 className='text-2xl font-extrabold mb-4'>dine</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 tracking-[0.125rem]'>
              <div>
                <p className='text-gray-400 text-sm mb-1'>
                  MARTHWAITE, SEDBERGH
                </p>
                <p className='text-gray-400 text-sm'>CUMBRIA</p>
                <p className='text-gray-400 text-sm'>+00 44 123 4567</p>
              </div>
              <div>
                <p className='text-gray-400 text-sm mb-1'>OPEN TIMES</p>
                <p className='text-gray-400 text-sm'>
                  MON - FRI: 09:00 AM - 10:00 PM
                </p>
                <p className='text-gray-400 text-sm'>
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

const menuItems = [
  {
    title: 'Seared Salmon Fillet',
    description:
      'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
    image: '/images/homepage/salmon-desktop-tablet.jpg',
  },
  {
    title: 'Rosemary Filet Mignon',
    description:
      'Our prime beef served to your taste with a delicious choice of seasonal sides.',
    image: '/images/homepage/beef-desktop-tablet.jpg',
  },
  {
    title: 'Summer Fruit Chocolate Mousse',
    description:
      'Creamy mousse combined with seasonal fruit and dark chocolate shavings.',
    image: '/images/homepage/chocolate-desktop-tablet.jpg',
  },
]
