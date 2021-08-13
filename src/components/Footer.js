import React from "react";
import 'bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left pb-3">
          <MDBCol  className="mx-auto mt-3">
            <h6 className="text-uppercase text-white mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home" /> Yakkasaroy, Toshkent shaxar, Uzbekistan
            </p>
            <p>
              <i className="fa fa-phone" /> +998 99 934 97 07
            </p>
            <p>
              <i className="fa fa-phone" /> +998 95 007 06 50
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="12" lg="12">
            <p className="text-center text-md-left grey-text text-primary">
              &copy; {new Date().getFullYear()} Mualliflik huquqi:{" "} IT Tower
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FooterPagePro;