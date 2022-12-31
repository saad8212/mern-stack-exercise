import React, { useContext} from "react";
import "./layout.css";
import { globalState } from "../pages/home";
import Activity from "./activity";
function Card() {
  const { apiData } = useContext(globalState);
  let activities = ['walking','running', 'swimming', 'hiking', 'jumping', 'swimming']
  return (
    <div className="jumbotron all-activities">
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 activities-heading text-center">
            <h1>Activities Statistics</h1>
            <p>Includes data from start until now</p>
          </div>
        </div>
          <div className="d-flex justify-content-between flex-wrap">
            {activities?.map((res) => {
              return <>
                <Activity data={apiData} type = {res}/>
              </>
            })}
      </div>
      </div>
    </div>
  );
}

export default Card;
