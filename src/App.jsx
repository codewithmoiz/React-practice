import React from 'react'

const App = () => {
  return (
    <>
    <div className="bg-black">
      <h1 className='text-white text-center text-3xl p-1 font-serif'>DAWN</h1>
    </div>
    <div>
    <h1 className='text-center text-5xl p-1 font-serif font-medium'>Israel's Gaza invasion - Day 267</h1>
    </div>
    <div className="main w-[92%] mx-auto flex justify-center gap-3">
    <div className="left w-[23%]">
      <div className="top-box bg-black  pt-2">
        <h1 className='text-[#FF0000] px-1 text-center text-6xl p-1 font-serif'>Fatalities</h1>
        <h1 className='text-white px-1 text-center text-3xl p-1 font-sans'>Palestinians <span className='text-[#FF0000]'>37,765</span> Israelis <span className='text-[#FF0000]'>1163</span></h1>
        <p className='text-white px-2 text-[8px] p-1 font-sans'>As of June 27, 5:12pm — AFP/Reuters/Al Jazeera/State of Palestine MFA</p>
        
        <div className="bg-white flex items-center justify-end">
        <img className='w-3' src="https://public.flourish.studio/resources/bosh.svg"/>
        <p className='text-gray-500 text-[11px] font-bold p-1 font-sans text-right'>A Flourish data visualization</p>
          
          </div>
      </div>
      <div className="bottom-box w-full font-serif">
        <ul className='list-disc list-inside flex flex-col gap-4 text-base'>
          <li>Israel’s siege of Gaza Strip, sparked by Hamas’ Oct 7 attack, enters ninth month</li>
          <li>Israeli strikes have laid waste to much of Gaza strip and caused <a className='text-[#901f1f] underline' href="https://www.reuters.com/world/middle-east/gaza-conflict-has-caused-major-environmental-damage-un-says-2024-06-18/">major environmental damage</a></li>
          <li>Starving Palestinians surviving on <a className='text-[#901f1f] underline' href="https://www.dawn.com/news/1840837">67pc</a> of water, sanitation infrastructure destroyed</li>
          <li>More than 250 killed in <a className='text-[#901f1f] underline' href="https://www.dawn.com/news/1838296">strike on UN school</a> killed at least 35</li>
          <li>Truce not secured despite UNSC <a className='text-[#901f1f] underline' href="https://www.dawn.com/news/1839137/unsc-adopts-us-drafted-resolution-on-gaza-ceasefire">adopting</a> resolution based on <a className='text-[#901f1f] underline' href="https://www.dawn.com/news/1837039">ceasefire plan</a> announced by Biden</li>
        </ul>
      </div>
    </div>
    <div className="right h-screen w-[70%] bg-red-500">
      <img className='w-full h-full object-cover' src="https://i.dawn.com/large/2024/06/29091152e75ff2e.jpg?r=091159"/>
    </div>
    </div>
    </>
  )
}

export default App