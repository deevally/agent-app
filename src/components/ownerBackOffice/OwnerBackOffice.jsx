import React from "react";
import StatisticPanel from "./StatisticPanel";
import OwnerServicePanel from "./OwnerServicePanel";
import Footer from "../Footer";

/**
 * @class OwnerBackOffice
 */
class OwnerBackOffice extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const ownerBackOffice = (
      <div>
        <div className="hk-pg-wrapper">
          <div className="container mt-xl-50 mt-sm-30 mt-15">
            <StatisticPanel />
            <OwnerServicePanel />
            <Footer />
          </div>
        </div>
      </div>
    );
    return <div>{ownerBackOffice}</div>;
  }
}

export default OwnerBackOffice;
