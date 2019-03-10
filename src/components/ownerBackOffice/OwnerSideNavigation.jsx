import React from "react";

/**
 * @class OwnerSideNavigation
 */
class OwnerSideNavigation extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const ownerSideNavigation = (
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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#device_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="server" />
                    </span>
                    <span className="nav-link-text">Devices</span>
                  </a>
                  <ul
                    id="device_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            POSPlus
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            IGRPay
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            BVN
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            NIMC
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Mobile
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
                    data-target="#agent_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="user" />
                    </span>
                    <span className="nav-link-text">Master Agents</span>
                  </a>
                  <ul
                    id="agent_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Register Master Agent
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Find Master Agent
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Block Master Agent
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
                    data-target="#services_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="aperture" />
                    </span>
                    <span className="nav-link-text">Services</span>
                  </a>
                  <ul
                    id="services_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            Naira.Com
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            POSPlus
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Innstapay
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="credit-card" />
                    </span>
                    <span className="nav-link-text">NairaPlus Wallet</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="credit-card" />
                    </span>
                    <span className="nav-link-text">
                      NairaPlus Virtual &amp; Plastic Card
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="javascript:void(0);"
                    data-toggle="collapse"
                    data-target="#fund_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="download" />
                    </span>
                    <span className="nav-link-text">Fund Wallet</span>
                  </a>
                  <ul
                    id="fund_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            NairaPlus
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Naira.Com
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Innstapay
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            POSPlus
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
                    data-target="#transfer_drp"
                  >
                    <span className="feather-icon">
                      <i data-feather="arrow-right" />
                    </span>
                    <span className="nav-link-text">Transfer</span>
                  </a>
                  <ul
                    id="transfer_drp"
                    className="nav flex-column collapse collapse-level-1"
                  >
                    <li className="nav-item">
                      <ul className="nav flex-column">
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            NairaPlus
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Naira.Com
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Innstapay
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            POSPlus
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="corner-left-down" />
                    </span>
                    <span className="nav-link-text">Savings</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="corner-right-up" />
                    </span>
                    <span className="nav-link-text">Loans</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="clipboard" />
                    </span>
                    <span className="nav-link-text">Reports</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="settings" />
                    </span>
                    <span className="nav-link-text">Settings</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="feather-icon">
                      <i data-feather="log-out" />
                    </span>
                    <span className="nav-link-text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="hk_nav_backdrop" className="hk-nav-backdrop" />
      </div>
    );
    return <div>{ownerSideNavigation}</div>;
  }
}

export default OwnerSideNavigation;
