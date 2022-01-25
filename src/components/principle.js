import React from "react";
import Item from './principle_item'

const Principle = (props) => {
  return (
    <section className={`principle bg-green ${props.pxStyle}`} id='principle'>
    <h2 className={` ${props.textStyle.h2} py-10`}>Our Principles </h2>
    <div className="items">
      <div className=" lg:flex items-start">
        <div className="lg:w-2/3  lg:mr-28"> 
      <Item name="1" textStyle={props.textStyle} itemStyle="lg:flex lg:w-full items-start " picTextStyle="lg:w-1/2  lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-2/3"/>
      <Item name="2" textStyle={props.textStyle} itemStyle="lg:flex lg:w-4/5 lg:ml-0" picTextStyle="lg:w-2/3 lg:-mt-20 lg:-ml-20 " mainTextStyle="lg:w-2/3"/>
        </div>
      <Item name="3" textStyle={props.textStyle} itemStyle=" lg:w-1/3" picTextStyle=" lg:w-full lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-full"/>
      </div>
      <Item name="4" textStyle={props.textStyle} itemStyle=" lg:flex flex-row-reverse -mt-4  lg:w-full " picTextStyle=" lg:w-2/5 lg:-mt-48 lg:-mr-20" mainTextStyle="lg:w-1/2"/>
<div>

</div>

<div className=" lg:flex items-start">
        <div className="lg:w-2/3  lg:mr-28"> 
      <Item name="5" textStyle={props.textStyle} itemStyle="lg:flex lg:w-full items-start " picTextStyle="lg:w-1/2  lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-2/3"/>
      <Item name="6" textStyle={props.textStyle} itemStyle="lg:flex lg:w-full lg:ml-0" picTextStyle="lg:w-2/3 lg:-mt-20 lg:-ml-20 " mainTextStyle="lg:w-2/3"/>
        </div>
      <Item name="7" textStyle={props.textStyle} itemStyle=" lg:w-1/3" picTextStyle=" lg:w-full lg:-mt-20 lg:-ml-20" mainTextStyle="lg:w-full"/>
      </div>
      <Item name="8" textStyle={props.textStyle} itemStyle=" lg:flex flex-row-reverse -mt-4  lg:w-3/4 mr-0" picTextStyle=" lg:w-2/5 lg:-mt-64 lg:-mr-20" mainTextStyle="lg:w-1/2"/>
    </div>
    </section>
  );
};

export default Principle;
