import { useState } from 'react';

import Seo from '@/containers/Home/Services/tabs/Seo';

import { tabItemInterface, tabs } from '@/constant/homeData';

import DigitalMarketing from './tabs/DigitalMarketing';
import WebDevelopment from './tabs/webDevelopment';

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className='w-full md:px-14'>
      <div className='flex min-h-[400px] w-full flex-col items-center gap-8 rounded-2xl bg-offWhite py-12 px-4 md:px-12'>
        <h1 className='text-2xl font-bold text-gray md:text-5xl'>
          OUR <span className='text-pink'>SERVICES.</span>
        </h1>
        <div className='flex flex-row gap-3'>
          {tabs.map((tab: tabItemInterface) => (
            <div
              key={tab.id}
              className={`flex cursor-pointer flex-row gap-1 rounded-full px-2 py-1 text-sm md:px-5 md:text-lg ${
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
