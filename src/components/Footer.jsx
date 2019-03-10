import React from 'react';

/**
 * @class Footer
 */
class Footer extends React.Component {
  /**
   *
   * @returns {*} - render
   */
  render() {
    const footerBar = (
      <div className="hk-footer-wrap container">
        <footer className="footer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>
                Project by
                <a href="https://osm-finc.ng/" className="text-dark" alt="user">
                  OSM-FINC
                </a>
{" "}
                © 2019
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <p className="d-inline-block">Follow us</p>
              <a
                href="#"
                className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"
                alt="user"
              >
                <span className="btn-icon-wrap">
                  <i className="fa fa-facebook" />
                </span>
              </a>
              <a
                href="#"
                className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"
                alt="user"
              >
                <span className="btn-icon-wrap">
                  <i className="fa fa-twitter" />
                </span>
              </a>
              <a
                href="#"
                className="d-inline-block btn btn-icon btn-icon-only btn-indigo btn-icon-style-4"
                alt="user"
              >
                <span className="btn-icon-wrap">
                  <i className="fa fa-google-plus" />
                </span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
    return <div>{footerBar}</div>;
  }
}

export default Footer;
