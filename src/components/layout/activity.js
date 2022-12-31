import React from "react";
import { BiSwim, BiRun } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { GiHiking, GiJumpAcross } from "react-icons/gi";
import { IoMdWalk, IoMdBicycle } from "react-icons/io";
import CountUp from "react-countup";
function Activity({data, type}) {
 
   

 

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let newDate = new Date();
  let date =newDate.getDate() +"-" +monthNames[newDate.getMonth()] +"-" +newDate.getFullYear();
  let day = days[newDate.getDay()];
  return (
 
        <div className="card rounded">
          <div className="card-body">
            <div className="row">
              <div className="col-3 icon-wrapper">
                {type === 'cycling'?<IoMdBicycle className="icon"/>:type === 'hiking'?<GiHiking className="icon"/>:type ==='running'?<BiRun className="icon"/>:type ==='swimming'?<BiSwim className="icon"/>:type ==='walking'?<IoMdWalk className="icon"/>:type ==='jumping'?<GiJumpAcross className="icon"/>:''}
              </div>
              <div className="col-6 card-item activity-name">{type}</div>
              <div className="col-3 card-item">

              </div>
            </div>
            <div className="row">
              <h2 className="col-6 offset-3 card-heading">
                <FaFlagCheckered className="text-secondary" />
                <CountUp start={0} end={100} delay={1}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className="text-primary" />
                    </div>
                  )}
                </CountUp>
              </h2>
            </div>
            <div className="row">
              <div className="col-6 card-item">{date}</div>
              <div className="col-3 offset-2 card-item">{day}</div>
            </div>
          </div>
        </div>
 
  );
}

export default Activity;
