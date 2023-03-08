import Image from 'next/image'

export default function HeroSection() {
  return (
    <main
      className='lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:gap-5 lg:h-screen lg:px-[100px] md:flex md:flex-col-reverse md:justify-center 
      md:items-center md:py-8 md:gap-8 md:px-10 sm:flex sm:flex-col-reverse sm:justify-center sm:items-center sm:py-8 sm:gap-8 sm:px-10  '
    >
      <section className='flex flex-col gap-8 lg:justify-start lg:items-start md:justify-center md:items-center sm:items-center sm:justify-center'>
        <h1 className='lg:text-[5rem] lg:leading-none lg:w-[550px] md:text-[3rem] sm:text-[2rem] font-bold '>
          {' '}
          Make remote work{' '}
        </h1>
        <p className='opacity-80 lg:w-[350px] lg:text-left md:w-[400px] md:text-center sm:w-[350px] sm:text-center font-medium '>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className='bg-black text-white rounded-xl hover:bg-transparent hover:border-[2px] hover:text-black w-[120px] h-[40px] '>
          {' '}
          Learn more{' '}
        </button>

        <div className='flex justify-between items-center lg:gap-4 md:gap-7 sm:gap-5 '>
          <Image
            src={`/client-databiz.svg`}
            alt='Sponsors'
            width={100}
            height={100}
            className='lg:w-[100px] lg:h-[30px] md:w-[60px] md:h-[30px] sm:w-[50px] sm:h-[15px] '
          />
          <Image
            src={`/client-audiophile.svg`}
            alt='Sponsors'
            width={100}
            height={100}
            className='lg:w-[100px] lg:h-[30px] md:w-[60px] md:h-[30px] sm:w-[50px] sm:h-[15px] '
          />
          <Image
            src={`/client-meet.svg`}
            alt='Sponsors'
            width={100}
            height={100}
            className='lg:w-[100px] lg:h-[30px] md:w-[60px] md:h-[30px] sm:w-[50px] sm:h-[15px] '
          />
          <Image
            src={`/client-maker.svg`}
            alt='Sponsors'
            width={100}
            height={100}
            className='lg:w-[100px] lg:h-[30px] md:w-[60px] md:h-[30px] sm:w-[50px] sm:h-[15px] '
          />
        </div>
      </section>
      <section>
        <Image
          src={`/image-hero-desktop.png`}
          alt='hero illustration'
          width={500}
          height={500}
        />
      </section>
    </main>
  )
}
