import React from 'react';
import { MDBCol } from 'mdb-react-ui-kit';

export default function Cards(props) {
    return (
        <>
          {
            props.data.map(item => {
              return(
                <MDBCol md="3">
                    <div>
                        <img src={item.img} alt="..."/>
                        <p className="mt-2" style={{fontWeight:"bold"}}>{item.title}</p>
                          <p className="mt-1" style={{ fontFamily:"'Open Sans', sans-serif",
    fontWeight:600, color: "grey" }}>{item.content}</p>
                    </div>
                </MDBCol>
              );
            })
          }
        </>
    )
}
