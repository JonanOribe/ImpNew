export default function Footer() {
  return (
    <>
      <footer id="contact" className="footer pt-3" style={{borderTop: "2px solid #143575"}}>
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              ©{" "}
              <a
                href="https://www.imperialbilbaina.com"
                className="text-dark ms-1"
                target="_blank"
              >
                Imperial Bilbaína &nbsp;
              </a>
              <script>document.write(new Date().getFullYear())</script>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <span
                  className="nav-link text-sm text-muted"
                >
                  c/Machín,10 48012 Bilbao
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link text-sm text-muted"
                >
                  Tel/Fax: 944 215 327
                </span>
              </li>
              <li className="nav-item">
                <a href="mailto:imperialbilbaina@hotmail.com"
                  className="nav-link text-sm text-muted"
                >
                  imperialbilbaina@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


