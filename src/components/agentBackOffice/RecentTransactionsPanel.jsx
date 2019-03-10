import React from 'react';

/**
 * @class RecentTransactionPanel
 */
class RecentTransactionPanel extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const recentTransactionPanel = (
      <div>
        <div className="d-flex align-items-center justify-content-between mt-40 mb-20">
          <h4>Recent Transactions</h4>
          <button type="button" className="btn btn-sm btn-link">view all</button>
        </div>
        <div className="card">
          <div className="card-body pa-0">
    <div className="table-wrap">
    <div className="table-responsive">
    <table className="table table-sm table-hover mb-0">
    <thead>
    <tr>
    <th>Project</th>
    <th>Company</th>
    <th>Update</th>
    <th>Budget</th>
    <th>Tasks</th>
    <th className="w-20">Status</th>
    <th>Deadline</th>
  </tr>
  </thead>
    <tbody>
    <tr>
    <td>Branding</td>
    <td>Pineapple Inc</td>
    <td>13 Nov 2018</td>
    <td><span className="badge badge-success">Completed</span></td>
    <td>
<span className="d-flex align-items-center">
<i className="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
<span>0</span>
</span>

  </td>
    <td>
    <div className="progress-wrap lb-side-left mnw-125p">
    <div className="progress-lb-wrap">
    <label className="progress-label mnw-25p">95%</label>
    <div className="progress progress-bar-xs">
    <div className="progress-bar bg-success w-95" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
  </div>
  </div>
  </div>
  </td>
    <td>10 Nov 2018</td>
  </tr>
    <tr>
    <td>Website</td>
    <td>Gooole co.</td>
    <td>30 Nov 2018</td>
    <td><span className="badge badge-primary">In Process</span></td>
    <td>
<span className="d-flex align-items-center">
<i className="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
<span>3</span>
</span>

  </td>
    <td>
    <div className="progress-wrap lb-side-left mnw-125p">
    <div className="progress-lb-wrap">
    <label className="progress-label mnw-25p">70%</label>
    <div className="progress progress-bar-xs">
    <div className="progress-bar bg-primary w-70" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
  </div>
  </div>
  </div>
  </td>
    <td>13 Dec 2018</td>
  </tr>
    <tr>
    <td>Collaterals</td>
    <td>Big Energy</td>
    <td>12 Nov 2018</td>
    <td><span className="badge badge-danger">Behind</span></td>
    <td>
<span className="d-flex align-items-center">
<i className="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
<span>14</span>
</span>

  </td>
    <td>
    <div className="progress-wrap lb-side-left mnw-125p">
    <div className="progress-lb-wrap">
    <label className="progress-label mnw-25p">35%</label>
    <div className="progress progress-bar-xs">
    <div className="progress-bar bg-danger w-35" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
  </div>
  </div>
  </div>
  </td>
    <td>21 Oct 2018</td>
  </tr>
    <tr>
    <td>Branding, Print</td>
    <td>Novotel</td>
    <td>10 Nov 2018</td>
    <td><span className="badge badge-primary">In process</span></td>
    <td>
<span className="d-flex align-items-center">
<i className="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
<span>6</span>
</span>

  </td>
    <td>
    <div className="progress-wrap lb-side-left mnw-125p">
    <div className="progress-lb-wrap">
    <label className="progress-label mnw-25p">85%</label>
    <div className="progress progress-bar-xs">
    <div className="progress-bar bg-primary w-85" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
  </div>
  </div>
  </div>
  </td>
    <td>14 Nov 2018</td>
  </tr>
    <tr>
    <td>Web Application</td>
    <td>Folkswagan</td>
    <td>12 Nov 2018</td>
    <td><span className="badge badge-danger">Behind</span></td>
    <td>
<span className="d-flex align-items-center">
<i className="zmdi zmdi-time-restore font-25 mr-10 text-light-40"></i>
<span>9</span>
</span>

  </td>
    <td>
    <div className="progress-wrap lb-side-left">
    <div className="progress-lb-wrap">
    <label className="progress-label mnw-25p">30%</label>
    <div className="progress progress-bar-xs">
    <div className="progress-bar bg-danger w-30" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
  </div>
  </div>
  </div>
  </td>
    <td>15 Oct 2018</td>
  </tr>

  </tbody>
  </table>
  </div>
  </div>
  </div>
        </div>
      </div>
    );
    return <div>{recentTransactionPanel}</div>;
  }
}

export default RecentTransactionPanel;
