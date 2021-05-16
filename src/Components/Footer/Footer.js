import React from 'react';
import { MDBCol, MDBRow, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import ftrimg from '../../Assets/Img/wave.png';

export default function Cards(props) {
    return (
        <>
            <div className="ftr-1 text-center" style={{backgroundColor:"#FCFDFF", marginBottom:"-20px"}}>
                <h3 className="text-center my-5">Try Appointy's education scheduling software. Get your free account now!</h3>
                <MDBBtn className="ftr-btn">Sign up now! &#8594;</MDBBtn>
                <p className="pClass text-center mt-2">No credit card required! Our free plan is free forever.</p>
            </div>
            <div className="ftr-2 m-0 p-0">
                <img src={ftrimg} width="100%" alt="..." />
            </div>
            <div className="ftr-3 pb-5">
                <MDBContainer>
                    <MDBRow className="pb-5">
                        <MDBCol md="3">
                            <h5 className="my-4"><strong>PRODUCT</strong></h5>
                            <span style={{ color:"#96A0B0" }}>Home</span><br/>
                            <span style={{ color:"#96A0B0" }}>Customers</span><br/>
                            <span style={{ color:"#96A0B0" }}>Contact us</span><br/>
                            <span style={{ color:"#96A0B0" }}>Blog</span><br/>
                            <span style={{ color:"#96A0B0" }}>Pricing</span><br/>
                            <span style={{ color:"#96A0B0" }}>Sign up</span>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="my-4"><strong>FEATURES</strong></h5>
                            <span style={{ color:"#96A0B0" }}>Schedule online</span><br/>
                            <span style={{ color:"#96A0B0" }}>Increase productivity</span><br/>
                            <span style={{ color:"#96A0B0" }}>Attract customers</span><br/>
                            <span style={{ color:"#96A0B0" }}>Retain customers</span>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="my-4"><strong>SUPPORT</strong></h5>
                            <span style={{ color:"#96A0B0" }}>Help</span><br/>
                            <span style={{ color:"#96A0B0" }}>Screen sharing</span><br/>
                            <span style={{ color:"#96A0B0" }}>Affiliate Program</span>
                            <h5 className="my-4"><strong>CONNECT WITH US</strong></h5>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="my-4"><strong>CONTACT US</strong></h5>
                            <span style={{ color:"#96A0B0" }}>Appointy Software Inc., 16 Corning<br/>Ave, Suite 136, Milpitas, CA 95035<br/>contact@appointy.com<br/>Privacy policy<br/>Terms of use<br/>GDPR</span>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <div className="ftr-4 m-0 p-0">
                <h6 className="text-center p-5">Copyright 2020 &copy; Appointy. All rights reserved</h6>
            </div>
        </>
    )
}