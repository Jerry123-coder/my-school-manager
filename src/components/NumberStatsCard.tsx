import React from 'react'
// import { IconType } from 'react-icons';

interface NumberStatsCardProps {
  // icon: IconType; // You can also use IconType instead of ReactNode if React Icons is used exclusively
  iconColor: string,
  cardColor: string;
  cardItem: string;
  number: number;
}

// ({ icon: Icon, cardItem, number })
const NumberStatsCard: React.FC<NumberStatsCardProps> = ({ iconColor, cardColor, cardItem, number })  => {
  return (
    <div className='flex items-center  px-10 gap-10 w-full h-[10rem] bg-white rounded-lg shadow-lg shadow-slate-500/60 '>
        <div 
         style={{
          backgroundColor: cardColor,
          color: iconColor
          // Use your desired colors
        }}
        className={`flex items-center justify-center font-bold text-2xl h-[6rem] w-[6rem] rounded-full`}>
          {/* <Icon /> */} icon
          </div>
        
        <div className='flex flex-col justify-center gap-0 border-l-2 border-l-[#070d33] pl-4 leading-3'>
            <p className='py-0 text-slate-500/70 font-semibold'>{cardItem}</p>
            <p className='text-3xl font-bold py-0 text-[#070d33]'>{number}</p>
        </div>
    </div>
  )
}

export default NumberStatsCard