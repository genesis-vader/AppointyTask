import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import LandingLogo from './Assets/Img/landingLogo.svg';
import div5 from './Assets/Img/div5.png';
import img1 from './Assets/Img/Merchant.png';
import img2 from './Assets/Img/Capterra.png';
import img3 from './Assets/Img/Apointy-G2-300x100-1-1-min.png';
import img4 from './Assets/Img/Appointy-Google-review-min.png';
import img5 from './Assets/Img/Super-Support-2.svg';
import img6 from './Assets/Img/Multi-Location-Management-2.svg';
import img7 from './Assets/Img/Free-setup-assistance-and-Easy-Migration-2.svg';
import img8 from './Assets/Img/Security-2.svg';
import img9 from './Assets/Img/Comma.svg';
import img10 from './Assets/Img/Instagram-profile-with-book-button-and-booking-page-with-various-subjects.svg';
import img11 from './Assets/Img/Appointment-confirmation-page-and-zoom-meeting-window.svg';
import img12 from './Assets/Img/Portal-with-student-database.svg';
import firstData from './Jsons/first';
import fourthData from './Jsons/fourth';
import secondData from './Jsons/second';
import thirdData from './Jsons/third';
import Cards from './Components/Cards/Cards';
import Cards2 from './Components/Cards/Cards2';

function App() {
    return (
        <>
            <Navbar />
            
            <div class="siteParentDiv">
                <MDBContainer>
                    <MDBRow className='mb-3'>
                        <MDBCol md='6' className='col-example'>
                            <div className="landingDivParentClass">
                                <h3 className="landingText" >
                                    Education scheduling software to reduce admin work, increase efficiency, and deliver better results
                  </h3>
                                <p className="mt-3 fstyle">
                                    Save valuable teaching time with easy online appointments, class scheduling, student management, payments, automated reminders and web conferencing!
                  </p>
                                <MDBBtn className="mt-3" style={{ backgroundImage: "linear-gradient(to right, #9e017a, #fd5355)", borderRadius: "20px" }}>Get Started Now</MDBBtn>
                                <p className="mt-3 fstyle" >No credit card required! Our free plan is free forever.</p>
                            </div>
                        </MDBCol>
                        <MDBCol md='6' className='col-example'>
                            <img src={LandingLogo} className="landingLogoClass" />
                        </MDBCol>
                    </MDBRow>

                    <div className="secondDiv">
                        <h3 className="text-center">academic institutions</h3>
                        <p className="pClass text-center mt-2 fstyle">Appointy can help businesses and institutions in the education, advising and non-profit domain schedule 1:1 sessions, round-robin meetings, and group classes</p>
                    </div>

                    <MDBRow  style={{ marginTop: "10%" }}>
                        <Cards data={firstData} />
                    </MDBRow>

                    <div className="secondDiv ">
                        <h3 className="text-center">All-in-one education scheduling software that helps you</h3>
                        <h3 className="text-center">achieve all your academic and business goals</h3>
                        <p className="pClass text-center fstyle">Appointy's education software takes the friction out of your scheduling process and helps you grow your</p>
                        <p className="pClass text-center fstyle">teaching business or institute while keeping students as the top priority</p>
                    </div>

                    <div className="thirdDiv">
                        <div> </div>
                        <MDBRow>
                            <Cards2 data={fourthData} />
                        </MDBRow>
                    </div>

                    <MDBRow>
                        <MDBCol md="6" style={{ marginTop: "30px", fontFamily:"Open Sans", color:"black" }}>
                            <span><strong>Make it easier for students to find and book 1:1 career counselling
                and academic advising sessions</strong></span>
                            <br />
                            <span className="fstyle" style={{ fontWeight: "400" }}>
                                <strong>Branded online booking system:</strong> Create a professional, multi-lingual booking
                                website for your university or institute. Customize it to match your brand - add f
                                a logo, services or classes you offer, staff portfolios, campus maps, etc. to 9
                                ensure that applicants can schedule with the right staff for them.
                </span>
                            <br />
                            <span className="fstyle" style={{fontWeight:"400"}}>
                                <strong>Multi-channel bookings:</strong>  Share your booking link with students in emails, texts,
                                brochures, etc. or let them book campus tours and interviews directly from your
                                website with Appointy's website integration.
                </span>
                            <br />
                            <span className="fstyle" style={{ fontWeight: "400" }}>
                                 Add a 'book now' button your institute's Facebook and Instagram profiles to
                                connect with new students and give them an option to book an admission
                                assistance call instantly.
                </span>
                            <br />
                        </MDBCol>
                        <MDBCol md="6">
                            <img src={img10} />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="6">
                            <img src={img11} />
                        </MDBCol>
                        <MDBCol md="6 fstyle" style={{ marginTop: "30px", fontWeight: "400"}}>
                            <span style={{color:"black"}}><strong>Eliminate the scheduling back and forth to empower students to
                reach out whenever they need you</strong></span>
                            <br />
                            <span>
                                <strong>B24x7 online scheduling:</strong> Students can easily find a time that works for them
                                and book a session or sign-up for recurring classes on their own. Confirmed
                                appointments are added to your calendar so that you're never double booked!
                </span>
                            <br />
                            <span>
                                    <strong>Intelligent timezone detection:</strong> Help students & applicants around the globe
                                and ensure that everyone who wants to schedule with you can view your
                                availability in their timezone.
                </span>
                            <br />
                            <span>
                                        <strong>Web conferencing:</strong> Offer students to schedule virtual courses, classes and
                                admission counselling with Appointy's Zoom integration. Automatically send a
                                Zoom meeting or class link in scheduling notifications so that students can join
                                your virtual classroom with just a click!
                </span>
                            <br />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="6 fstyle" style={{ marginTop: "30px", fontWeight:"400" }}>
                            <span style={{color:"black"}}><strong>Personalize sessions based on student's needs and elevate their
                experience & satisfaction</strong></span>
                            <br />
                            <span>
                                <strong>Dedicated student profiles:</strong> Collect important student information like contact 4 a
                                details, classes attended, payments, etc. under student profiles. Use notes tomake quick remarks about weak subjects, career analysis, etc. to communicate
                                progress reports to parents regularly.
                </span>
                            <br />
                            <span>
                                <strong>Intake forms:</strong> Collect crucial info at the time of enrollment using our intake forms to prepare better lesson plans and consultation notes before your sessions.
                </span>
                            <br />
                            <span>
                                    <strong>Ontine Reputation Management:</strong> Automatically request reviews from happy
                                parents and students after a session. Promote these positive reviews on your
                                social media and display them on your booking page with just a click.
                </span>
                            <br />
                        </MDBCol>
                        <MDBCol md="6">
                            <img src={img12} />
                        </MDBCol>
                    </MDBRow>

                    <div className="secondDiv">
                        <h3 className="text-center" style={{ width: "70%", margin: "auto" }}>Appointy handles your everyday admin so that you can focus on increasing student success</h3>
                        <p className="pClass text-center mt-3 fstyle">Cost-effective education booking software that streamlines end-to-end operations, reduces no-shows, and ensures that your staff isn't overwhelmed</p>
                    </div>

                    <MDBRow style={{ marginTop: "10%" }}>

                        <Cards data={secondData} />

                    </MDBRow>

                    <div className="secondDiv">
                        <h3 className="text-center" style={{ width: "70%", margin: "auto" }}>Appointy integrates with the apps you already use</h3>
                        <p className="pClass text-center mt-3 fstyle">Education scheduling software that integrates with popular payments apps, social media, video conferencing tools, and personal work calendars</p>
                    </div>

                    <MDBRow>
                        <MDBCol md="4" className="justify-content-center d-flex mb-5 mt-5">
                            <div className="text-center" style={{ backgroundColor: "#F6F9FB", width: "50%" }}>
                                Multiple Payment Apps
                    </div>
                        </MDBCol>
                        <MDBCol md="4" className="justify-content-center d-flex mb-5 mt-5">
                            <div className="text-center" style={{ backgroundColor: "#F6F9FB", width: "50%" }}>
                                Personal & Work Calendar
                    </div>
                        </MDBCol>
                        <MDBCol md="4" className="justify-content-center d-flex mb-5 mt-5">
                            <div className="text-center" style={{ backgroundColor: "#F6F9FB", width: "50%" }}>
                                Video Conferencing Apps
                    </div>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="12" className="justify-content-center d-flex">
                            <img src={div5} style={{ width: "80%" }} />
                        </MDBCol>
                    </MDBRow>

                    <div className="secondDiv">
                        <h3 className="text-center" style={{ width: "80%", margin: "auto" }}>Custom online scheduling software to fit the unique needs of universities, schools and tutoring centers</h3>
                        <p className="pClass text-center mt-2">We have designed tailor made scheduling software solutions for various educational institutes to help streamline their complex booking process</p>
                    </div>

                    <MDBRow style={{ marginTop: "10%" }}>

                        <Cards data={thirdData} />

                    </MDBRow>

                    <div className="justify-content-center d-flex mt-5">
                        <MDBBtn outline className='mx-2' color='danger' style={{ borderRadius: "20px" }}>
                            Learn More
                </MDBBtn>
                    </div>

                    <div className="forthDiv">
                        <h2 className="text-center" style={{ marginTop: "10%" }}>23,000+ educators and institutes use Appointy worldwide</h2>
                    </div>

                    <div>
                        <MDBRow>
                            <MDBCol md="6" className="mt-5 fstyle">
                                <div className="d-flex justify-content-center">
                                    <div className="crd-4">
                                        <div className="crd-4-img">
                                            <img src={img9} width="40px" alt="..." />
                                        </div>
                                        <span style={{ padding: "20px" }}>
                                            Appointy gives our students a fast and efficient way to
                                            book their sessions. It has completely eliminated missed
                                            appointments, human typos, back-and-forth emails and
                                            more issues like these for us. We can now control almostevery single aspect of the booking process and our admin
                                            team has more time available to talk to students and for
                                            other tasks. This has improved our customer satisfaction
                                            rate. We've got so many new students with a positive
                                            word of mouth about our business!
                      </span>
                                        <br />
                                        <br />
                                        <span className="spanClass">
                                            - Owner, BeMo Academic Consulting
                      </span>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol md="6" className="mt-5 fstyle">
                                <div className="d-flex justify-content-center">
                                    <div className="crd-4">
                                        <div className="crd-4-img">
                                            <img src={img9} width="40px" alt="..." />
                                        </div>
                                        <span style={{ padding: "20px" }}>
                                            Appointy has helped our appointment system become
                                            much easier and less work. We have more accurate data on daily and sales report. And it is easier to track the
                                            appointment status. It is very customizable and suits to
                                            your company needs. And the customer service is
                                            excellent! Their live chat ready to answer your questions
                                            within seconds.
                      </span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <span className="spanClass">
                                            - Chyntia P., Counselor, Education Management
                      </span>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </div>

                    <MDBRow style={{ marginTop: "10%" }} className="fDivRowClass">
                        <MDBCol md="3" className="justify-content-center d-flex">
                            <img src={img1} style={{ width: "50%" }} />
                        </MDBCol>
                        <MDBCol md="3" className="justify-content-center d-flex">
                            <img src={img2} style={{ width: "50%" }} />
                        </MDBCol>
                        <MDBCol md="3" className="justify-content-center d-flex">
                            <img src={img3} style={{ width: "50%" }} />
                        </MDBCol>
                        <MDBCol md="3" className="justify-content-center d-flex">
                            <img src={img4} style={{ width: "50%" }} />
                        </MDBCol>
                    </MDBRow>

                    <div className="fifthDiv">
                        <h2 className="text-center" style={{ padding: "10%" }}>Your peace of mind is our top priority!</h2>
                        <MDBRow style={{ marginTop: "0%" }}>
                            <MDBCol md="6" className="justify-content-center d-flex">
                                <MDBCard style={{ width: "80%" }}>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <img src={img5} />
                                            </MDBCol>
                                            <MDBCol md="9">
                                                <MDBCardTitle>Super Support</MDBCardTitle>
                                                <MDBCardText className="fstyle">
                                                    Appointy is supported by a team of dedicated
                                                    professionals who are always available via email,
                                                    chat and phone.
                            </MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6" className="justify-content-center d-flex">
                                <MDBCard style={{ width: "80%" }}>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <img src={img6} />
                                            </MDBCol>
                                            <MDBCol md="9">
                                                <MDBCardTitle>Multi-Location Management</MDBCardTitle>
                                                <MDBCardText className="fstyle">
                                                    Our education software caters to all types of
                                                    education institutions. If you have multiple centers
                                                    and campuses, Appointy allows easy
                                                    management of all your locations from a
                                                    centralized admin portal
                            </MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6" className="justify-content-center d-flex mt-3 mb-5">
                                <MDBCard style={{ width: "80%" }}>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <img src={img7} />
                                            </MDBCol>
                                            <MDBCol md="9">
                                                <MDBCardTitle>Free Setup Assistance & Easy Migration</MDBCardTitle>
                                                <MDBCardText className="fstyle">
                                                    With a quick onboarding and free personalized
                                                    setup assistance from product experts who have
                                                    onboarded several educators, you get started with
                                                    Appointy in no time. Need to shift from your existing
                                                    system? Just let us know. We take care of
                                                    everything!
                            </MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6" className="justify-content-center d-flex mt-3 mb-5">
                                <MDBCard style={{ width: "80%" }}>
                                    <MDBCardBody>
                                        <MDBRow>
                                            <MDBCol md="3">
                                                <img src={img8} />
                                            </MDBCol>
                                            <MDBCol md="9">
                                                <MDBCardTitle>Security</MDBCardTitle>
                                                <MDBCardText className="fstyle">
                                                    We take customer data security very seriously.
                                                    Your data is safe, backed-up on cloud, and you
                                                    retain its complete ownership. Our application is
                                                    hosted on Google Cloud which adheres to the
                                                    highest standards of reliability and data security.
                            </MDBCardText>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>

                    </div>

                </MDBContainer>



            </div>
            <Footer />
        </>
    );
}

export default App;
