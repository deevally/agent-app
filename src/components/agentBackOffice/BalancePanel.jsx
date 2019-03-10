import React from 'react';

/**
 * @class BalancePanel
 */
class BalancePanel extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const balancePanel = (
      <div className="hk-pg-header align-items-top">
        <div className="card w-100">
          <div
            className="card-header d-flex justify-content-between align-items-center"
            style={{ height: '120px' }}
          >
            <h6>Balance : </h6>
            <div className="d-flex h-70 display-4 justify-content-between align-items-center">
              <span className="badge badge-info pb-30 pt-30">
                <img
                  className="icon"
                  src="https://img.icons8.com/ios/30/ffffff/wallet.png"
                  alt="user"
                />
{" "}
                &#8358;100000.00
{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{balancePanel}</div>;
  }
}

export default BalancePanel;
