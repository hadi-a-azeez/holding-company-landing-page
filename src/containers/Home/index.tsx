import NextImage from '@/components/NextImage';

import Images from '@/constant/images';

import Services from './Services';

const HomeContainer = () => {
  return (
    <div className='relative min-h-screen w-full bg-darkBlue'>
      {/* <div
        className='absolute top-0  w-full'
        style={{
          backgroundImage: `url(${Images.confetti.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      /> */}
      <div className='grid w-full place-content-center py-20 text-center md:py-28'>
        <h1 className='text-4xl font-bold text-white md:text-8xl '>
          We <span className='text-green'>Build</span> Products,
        </h1>
        <h1 className='text-4xl font-bold text-white md:text-8xl'>
          <span className='text-green'>Grow</span> brands
        </h1>
        <h1 className='text-4xl font-bold text-white md:text-8xl'>
          <span className='text-green'>Solve</span> business problems
        </h1>
        <div className='mt-8 flex w-full flex-row justify-center gap-2 text-xl md:gap-4'>
          <button className='rounded-full bg-white px-4 py-2  text-sm font-semibold text-gray md:px-6 md:text-xl'>
            Schedule a meeting
          </button>
          <button className='flex flex-row items-center justify-center gap-2 rounded-full border-[1px] border-offWhite px-2 py-2 text-sm text-white md:px-4 md:text-xl'>
            <NextImage src={Images.call} alt='call' width={22} height={22} />
            Call Now
          </button>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default HomeContainer;
