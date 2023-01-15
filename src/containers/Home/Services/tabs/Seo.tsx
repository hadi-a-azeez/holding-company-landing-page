import { serviceItemInterface, servicesData } from '@/constant/homeData';
import TabItem from './tabItem';

const Seo = () => {
  return (
    <div className='flex min-h-[200px] w-full flex-col rounded-2xl bg-darkViolet py-6 px-10'>
      {servicesData.seo.map((item: serviceItemInterface) => (
        <TabItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Seo;
