import { useState } from 'react';
import Images from '@/constant/images';
import NextImage from '@/components/NextImage';

interface TabItemPropsInterface {
  id: any;
  title: string;
  description: string;
  isExpand?: boolean;
  isLast?: boolean;
}

const TabItem = ({
  title,
  description,
  isExpand = false,
}: TabItemPropsInterface) => {
  const [isExpanded, setIsExpand] = useState(isExpand);
  return (
    <div className='grid w-full grid-cols-fill-auto gap-2 py-6'>
      <div
        className='flex cursor-pointer flex-col gap-2 text-white'
        onClick={() => {
          setIsExpand(!isExpanded);
        }}
      >
        <h1 className='text-2xl font-semibold'>{title}</h1>
        {isExpanded && (
          <>
            <p className='text-lg font-normal text-offWhite'>{description}</p>
            <div className='flex flex-row gap-4'>
              <button className='rounded-full bg-white py-1 px-4 text-gray'>
                Talk to Us
              </button>
              <button className='rounded-offWhite rounded-full border-[1px] border-white py-1 px-4'>
                Read More
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        <NextImage
          src={isExpanded ? Images.arrowup : Images.arrowdown}
          alt=''
          width={20}
          height={20}
          onClick={() => {
            setIsExpand(!isExpanded);
          }}
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default TabItem;
