import React from "react";
import { FiEdit } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
function Listing() {
  return (
    <div className="list-data">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div clasNames="col-md-6 text-center mb-3 activities-heading">
            <h1 className="heading-section">User Activity Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 table-data">
              <div className="container">
            <div className="row">
                <div className="col-md-4 d-flex flex-row justify-content-between">
                  <input style={{width:'70%'}}
                    type="text"
                    className="form-control mb-4 mt-3"
                    placeholder="Search for Activity"
                  />
                  <button className="btn btn-primary mb-4 mt-3">
                    Search
                  </button>
                </div>
                <div className="col-md-4 offset-4 d-flex justify-content-end">
                  <button className="btn btn-dark mb-4 mt-3  d-flex align-items-center justify-content-between">
                    <span>Create Activity</span> 
                    <BsPlusLg className="create-icon bg-dark text-white"/>
                  </button>
                </div>
              </div>
            </div>
            <form></form>
            <div className="table-wrapper table">
              <table className="table">
                <thead className="thead bg-primary sticky-top">
                  <tr>
                    <th>Sl.</th>
                    <th>Name</th>
                    <th>Activity</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th style={{ width: "10%" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="scope">
                      .com
                    </th>
                    <td>1 Year</td>
                    <td>$70.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope">
                      .net
                    </th>
                    <td>1 Year</td>
                    <td>$75.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope">
                      .org
                    </th>
                    <td>1 Year</td>
                    <td>$65.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope">
                      .biz
                    </th>
                    <td>1 Year</td>
                    <td>$60.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope">
                      .info
                    </th>
                    <td>1 Year</td>
                    <td>$50.00</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="scope border-bottom-0">
                      .me
                    </th>
                    <td class="border-bottom-0">1 Year</td>
                    <td class="border-bottom-0">$45.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td class="border-bottom-0">$5.00</td>
                    <td className="actions-button">
                      <button className="btn">
                        <FiEdit className="action-icon text-primary" />
                      </button>
                      <button className="btn">
                        <RiDeleteBin7Line className="action-icon text-danger" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
