import React from "react";

/**
 * @class MasterAgentSideNavigation
 */
class MasterAgentSideNavigation extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const sideNavigation = (
      <div>
        <nav className="hk-nav hk-nav-light">
          <a
            href="javascript:void(0);"
            id="hk_nav_close"
            className="hk-nav-close"
          >
            <span className="feather-icon">
              <i data-feather="x" />
            </span>
          </a>
          <div className="nicescroll-bar">
            <div className="navbar-nav-wrap">
              <hr className="nav-separator" />
              <div className="nav-header">
                <span>User Interface</span>
                <span>UI</span>
              </div>
              <ul className="navbar-nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="grid" />
                    </span>
                    <span className="nav-link-text">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="user" />
                    </span>
                    <span className="nav-link-text">Find An Agent</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#cash_in"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-down-circle" />
                    </span>
                    <span className="nav-link-text">Cash In / Transfer</span>
                  </a>
                  <ul
                    id="cash_in"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Wallet
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Card
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#cash_out"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-down-circle" />
                    </span>
                    <span className="nav-link-text">Cash Out / Withdraw</span>
                  </a>
                  <ul
                    id="cash_out"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Wallet
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Card
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#save_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="download" />
                    </span>
                    <span className="nav-link-text">Save</span>
                  </a>
                  <ul
                    id="save_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Enrol
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Pay
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#invest"
                  >
                    <span className="feather-icon">
                      <i data-feather="award" />
                    </span>
                    <span className="nav-link-text">Invest</span>
                  </a>
                  <ul
                    id="invest"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Enrol
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Pay
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#get_loan"
                  >
                    <span className="feather-icon">
                      <i data-feather="corner-left-down" />
                    </span>
                    <span className="nav-link-text">Get Loan</span>
                  </a>
                  <ul
                    id="get_loan"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Apply
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Approve
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Disburse
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="shield" />
                    </span>
                    <span className="nav-link-text">Get Insured</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#bvn"
                  >
                    <span className="feather-icon">
                      <i data-feather="bookmark" />
                    </span>
                    <span className="nav-link-text">BVN</span>
                  </a>
                  <ul
                    id="bvn"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Register
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Verify
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Print
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#nimc"
                  >
                    <span className="feather-icon">
                      <i data-feather="code" />
                    </span>
                    <span className="nav-link-text">NIMC</span>
                  </a>
                  <ul
                    id="nimc"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Register
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Verify
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Print
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#topup"
                  >
                    <span className="feather-icon">
                      <i data-feather="upload" />
                    </span>
                    <span className="nav-link-text">TopUp</span>
                  </a>
                  <ul
                    id="topup"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Airtime
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Data
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#pay_bill"
                  >
                    <span className="feather-icon">
                      <i data-feather="aperture" />
                    </span>
                    <span className="nav-link-text">Pay Bill</span>
                  </a>
                  <ul
                    id="pay_bill"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            TV
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Utilities
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#finc_hypermarket"
                  >
                    <span className="feather-icon">
                      <i data-feather="download" />
                    </span>
                    <span className="nav-link-text">Financial HyperMarket</span>
                  </a>
                  <ul
                    id="finc_hypermarket"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            IGRPay
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Assurance
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            MicroPension
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Moni4Moni
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr className="nav-separator" />
              <div className="nav-header">
                <span>User Interface</span>
                <span>UI</span>
              </div>
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#register"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-right" />
                    </span>
                    <span className="nav-link-text">Register</span>
                  </a>
                  <ul
                    id="register"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            NHIS
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            NSTIF
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Anchor Borrower
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            TraderMoni
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#vendor"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-right" />
                    </span>
                    <span className="nav-link-text">Vendor</span>
                  </a>
                  <ul
                    id="vendor"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            JAMB
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            WAEC
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Transport Ticket
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Other Tickets
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#subscribe"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-right" />
                    </span>
                    <span className="nav-link-text">Subscribe</span>
                  </a>
                  <ul
                    id="subscribe"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Programs
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Projects &amp; Philanthropies
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Clubs
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="hk_nav_backdrop" className="hk-nav-backdrop" />
      </div>
    );
    return <div>{sideNavigation}</div>;
  }
}

export default MasterAgentSideNavigation;
