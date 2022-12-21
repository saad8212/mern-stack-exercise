import React from "react";
import "./layout.css";
import { BiSwim, BiRun } from "react-icons/bi";
import { FaFlagCheckered } from "react-icons/fa";
import { GiHiking, GiJumpAcross } from "react-icons/gi";
import { IoMdWalk, IoMdBicycle } from "react-icons/io";
import CountUp from "react-countup";
function Card() {
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
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let newDate = new Date();
  let date =
    newDate.getDate() +
    "-" +
    monthNames[newDate.getMonth()] +
    "-" +
    newDate.getFullYear();
     
    let day = days[newDate.getDay()]; 
  return (
    <div className="jumbotron all-activities">
      <div className="container">
        <div className="row">
            <div className="col-6 offset-3 activities-heading text-center">
                <h1>Activities Statistics</h1>
                <p>Includes data from start until now</p>
            </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-4 col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon-wrapper">
                    <IoMdBicycle className="icon" />
                  </div>
                  <div className="col-6 card-item activity-name">Bicycle</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">
                    <FaFlagCheckered className="text-secondary"/>
                    <CountUp start={0} end={100} delay={1}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon">
                    <IoMdWalk />
                  </div>
                  <div className="col-6 card-item">Walking</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">                  
                  <FaFlagCheckered className="text-secondary"/>
                  <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon-wrapper">
                    <BiSwim className="icon" />
                  </div>
                  <div className="col-6 card-item activity-name">Swimming</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">
                  <FaFlagCheckered className="text-secondary"/>
                  <CountUp start={0} end={100} delay={1}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp>
                  </h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon-wrapper icon">
                    <BiRun />
                  </div>
                  <div className="col-6 card-item activity-name">Running</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">
                  <FaFlagCheckered className="text-secondary"/>
                    <CountUp start={0} end={100} delay={1}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp></h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon-wrapper icon">
                    <GiHiking />
                  </div>
                  <div className="col-6 card-item activity-name">Hiking</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">
                  <FaFlagCheckered className="text-secondary"/>
                    <CountUp start={0} end={100} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp></h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 pt-4">
            <div className="card activity-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-3 icon-wrapper icon">
                    <GiJumpAcross />
                  </div>
                  <div className="col-6 card-item activity-name">Jumping</div>
                  <div className="col-3 card-item">time</div>
                </div>
                <div className="row">
                  <h2 className="col-6 offset-3 card-heading">
                  <FaFlagCheckered className="text-secondary"/>
                    <CountUp start={0} end={100} delay={1}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className = "text-primary"/>
                        </div>
                      )}
                    </CountUp></h2>
                </div>
                <div className="row">
                  <div className="col-6 card-item">{date}</div>
                  <div className="col-3 offset-3 card-item">{day}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
