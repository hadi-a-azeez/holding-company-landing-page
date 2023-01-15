import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { tabItemInterface, tabs } from '@/constant/homeData';
import Images from '@/constant/images';
import { useState } from 'react';
import DigitalMarketing from './tabs/DigitalMarketing';
import WebDevelopment from './tabs/webDevelopment';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className='w-full px-14'>
      <div className='flex min-h-[400px] w-full flex-col items-center gap-8 rounded-2xl bg-offWhite py-12 px-12'>
        <h1 className='text-5xl font-bold text-gray'>
          OUR <span className='text-pink'>SERVICES.</span>
        </h1>
        <div className='flex flex-row gap-3'>
          {tabs.map((tab: tabItemInterface) => (
            <div
              key={tab.id}
              className={`flex cursor-pointer flex-row gap-1 rounded-full px-5 py-1 text-lg ${
                selectedTab === tab.id
                  ? 'bg-gray text-white'
                  : 'border-[1px] border-gray text-gray'
              }`}
              onClick={() => {
                setSelectedTab(tab.id);
              }}
            >
              {/* <NextImage
                      src={Images.codeicon}
                      width={18}
                      height={18}
                      alt='codeicon'
                    /> */}
              {tab.title}
            </div>
          ))}
        </div>
        {selectedTab === 1 ? <WebDevelopment /> : <></>}
        {selectedTab === 2 ? <DigitalMarketing /> : <></>}
        {selectedTab === 3 ? <Seo /> : <></>}
      </div>
    </div>
  );
};

export default Services;
