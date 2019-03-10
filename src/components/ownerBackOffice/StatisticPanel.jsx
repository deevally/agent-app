import React from "react";

/**
 *  className MasterAgentSideNavigation
 */
class StatisticPanel extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const statisticPanel = (
      <div>
        <div className="hk-pg-header align-items-top">
          <div>
            <h2 className="hk-pg-title font-weight-600 mb-10">
              Customer Management
            </h2>
            <p>
              Questions about onboarding lead data?
              <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="hk-row">
              <div className="col-sm-12">
                <div className="card-group hk-dash-type-2">
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-5">
                        <div>
                          <span className="d-block font-15 text-dark font-weight-500">
                            Users
                          </span>
                        </div>
                        <div>
                          <span className="text-success font-14 font-weight-500">
                            +10%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="d-block display-4 text-dark mb-5">
                          168M
                        </span>
                        <small className="d-block">172,458 Target Users</small>
                      </div>
                    </div>
                  </div>

                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-5">
                        <div>
                          <span className="d-block font-15 text-dark font-weight-500">
                            Campaign Leads
                          </span>
                        </div>
                        <div>
                          <span className="text-success font-14 font-weight-500">
                            +12.5%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="d-block display-4 text-dark mb-5">
                          <span className="counter-anim">168,856</span>
                        </span>
                        <small className="d-block">472,458 Targeted</small>
                      </div>
                    </div>
                  </div>

                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-5">
                        <div>
                          <span className="d-block font-15 text-dark font-weight-500">
                            New Contacts
                          </span>
                        </div>
                        <div>
                          <span className="text-warning font-14 font-weight-500">
                            -2.8%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="d-block display-4 text-dark mb-5">
                          73
                        </span>
                        <small className="d-block">100 Targeted</small>
                      </div>
                    </div>
                  </div>

                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-5">
                        <div>
                          <span className="d-block font-15 text-dark font-weight-500">
                            Win/Loss Ratio
                          </span>
                        </div>
                        <div>
                          <span className="text-danger font-14 font-weight-500">
                            -75%
                          </span>
                        </div>
                      </div>
                      <div>
                        <span className="d-block display-4 text-dark mb-5">
                          48:65
                        </span>
                        <small className="d-block">42:32 Targeted</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{statisticPanel}</div>;
  }
}

export default StatisticPanel;
