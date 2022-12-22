import React from "react";

import {useStyle} from '../components/styleContext'

import Item from './principle_item'

const Principle = () => {
  const style = useStyle()
  return (
    <section className={`principle bg-green ${style.px} md:py-20`} id='principles'>
    <h2 className={` ${style.text.h2} py-10`}>Our Principles </h2>
    <div className="items">
      <div className=" lg:flex items-start">
        <div className="lg:w-2/3  lg:mr-28"> 
      <Item name="Principle1" textStyle={style.text} itemStyle="lg:flex lg:w-full items-start " picTextStyle="lg:w-1/2  lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-2/3"/>
      <Item name="Principle2" textStyle={style.text} itemStyle="lg:flex lg:w-4/5 lg:ml-0" picTextStyle="lg:w-2/3 lg:-mt-20 lg:-ml-20 " mainTextStyle="lg:w-2/3"/>
        </div>
      <Item name="Principle3" textStyle={style.text} itemStyle=" lg:w-1/3" picTextStyle=" lg:w-full lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-full"/>
      </div>
      <Item name="Principle4" textStyle={style.text} itemStyle=" lg:flex flex-row-reverse -mt-4  lg:w-full " picTextStyle=" lg:w-2/5 lg:-mt-48 lg:-mr-20" mainTextStyle="lg:w-1/2"/>
<div>

</div>

<div className=" lg:flex items-start">
        <div className="lg:w-2/3  lg:mr-28"> 
      <Item name="Principle5" textStyle={style.text} itemStyle="lg:flex lg:w-full items-start " picTextStyle="lg:w-1/2  lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-2/3"/>
      <Item name="Principle6" textStyle={style.text} itemStyle="lg:flex lg:w-full lg:ml-0" picTextStyle="lg:w-2/3 lg:-mt-20 lg:-ml-20 " mainTextStyle="lg:w-2/3"/>
        </div>
      <Item name="Principle7" textStyle={style.text} itemStyle=" lg:w-1/3" picTextStyle=" lg:w-full lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-full"/>
      </div>
      <Item name="Principle8" textStyle={style.text} itemStyle=" lg:flex flex-row-reverse -mt-4  lg:w-3/4 mr-0" picTextStyle=" lg:w-2/5 lg:-mt-64 lg:-mr-20" mainTextStyle="lg:w-1/2"/>
    </div>
    </section>
  );
};

export default Principle;
