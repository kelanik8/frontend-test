import React from 'react';

const FooterComponent = () => (
    <footer className="footer">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-12">
              <div className="copyright text-center text-xl-left text-muted">
                <p className="ml-1" style={{ paddingLeft: "1rem" }}>
                  Nigeria
                </p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="d-flex">
                <ul className="nav nav-footer">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Advertising
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      How Search Works
                    </a>
                  </li>
                </ul>

                <ul className="nav nav-footer ml-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
);

export default FooterComponent;