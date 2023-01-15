import Images from '@/constant/images';
import Services from './Services';

const HomeContainer = () => {
  return (
    <div
      className='min-h-screen w-full bg-darkBlue'
      style={{
        backgroundImage: `url(${Images.confetti.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='grid w-full place-content-center py-28 text-center'>
        <h1 className='text-8xl font-bold text-white'>
          We <span className='text-green'>Build</span> Products,
        </h1>
        <h1 className='text-8xl font-bold text-white'>
          <span className='text-green'>Grow</span> brands
        </h1>
        <h1 className='text-8xl font-bold text-white'>
          <span className='text-green'>Solve</span> business problems
        </h1>
      </div>
      <Services />
    </div>
  );
};

export default HomeContainer;
