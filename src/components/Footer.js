import React from "react";
import "bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter className="font-small">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="6" lg="6" sm="12">
            <p className="text-left grey-text text-primary">
              &copy; {new Date().getFullYear()} Mualliflik huquqi: IT Tower
            </p>
          </MDBCol>
          <MDBCol md="6" lg="6" sm="12">
            <p className="d-flex justify-content-start grey-text text-primary">
              <a href="tel:+998999349707" style={{ textDecoration: "none" }}>
                <i className="fa fa-phone" /> +998 99 934 97 07
              </a>
              <a
                href="tel:+998950070650"
                style={{ marginLeft: "15px", textDecoration: "none" }}
              >
                <i className="fa fa-phone" /> +998 95 007 06 50
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
