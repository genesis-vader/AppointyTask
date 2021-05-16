import React from 'react';
import { MDBCol , MDBRow } from 'mdb-react-ui-kit';

export default function Cards(props) {
    return (
        <>
          {
            props.data.map(item => {
              return(
                <MDBCol md="4" className="my-2">
                  <div className="d-flex justify-content-center">
                    <div style={{ width:"80%" }}>
                      <MDBRow>
                        <MDBCol sm="2">
                          <img src={item.img} width="100%"/>
                        </MDBCol>
                        <MDBCol sm="10">
                          <h6><strong>{item.title}</strong></h6>
                        </MDBCol>
                      </MDBRow>
                      <div>
                                  <p className="py-2 m-0" style={{
                                      fontFamily: "'Open Sans', sans-serif",
                                      fontWeight: 600, color: "grey"
                                  }}>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </MDBCol>
              );
            })
          }
        </>
    )
}
