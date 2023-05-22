import React from "react";
import "./Home.css";
import usfda from "./Images/usfda.svg";
import cause1 from "./Images/causes1.jpg";
import cause2 from "./Images/cause3.jpg";
import cause3 from "./Images/causes2.jpg";
import symp1 from "./Images/symp1.jpg";
import symp2 from "./Images/symp2.jpg";
import symp3 from "./Images/symp3.jpg";
import treatment from "./Images/treatment.jpg";
import numbers from "./Images/numbers.jpg";
import no1 from "./Images/no1.jpg";
import no2 from "./Images/no2.jpg";
import no3 from "./Images/no3.jpg";
import no4 from "./Images/no4.jpg";
import What1 from "./Images/what1.jpg";
import What2 from "./Images/what2.jpg";
import What3 from "./Images/what3.jpg";
import What4 from "./Images/what4.jpg";




export default function Home() {
  return (
    <>
      <section className="home">
        <div className="intro-content">
          <h2>
            Permanent Relief from adenoids <br />{" "}
            <span className="colour-change">with minimal-invasive</span>{" "}
          </h2>
          <p>
            {" "}
            Get full medical assistance and <br></br>consultation for diseases
            Hassle-free experience throughout your treatment
          </p>
          <button className="button-usual"> Book Appointments</button>
          <button className="button-transparent"> Call our agent</button>
        </div>
      </section>
      <section className="Whatis">
        <div className="container text">
          <h2 className="text-center">What is adenoidectony</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi,
            nulla, quidem ipsa sit voluptatum nobis, voluptates dicta sapiente
            optio nesciunt! Asperiores, autem dolorem fugiat illo deleniti
            veniam minus minima, magnam, libero quidem voluptate tempora eius.
            Odit temporibus eos eveniet omnis ea, dolorem amet voluptas
            inventore quia libero impedit laboriosam.
          </p>
        </div>
        <div className="picture">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <img src={What1} alt="" className="img-responsive" />
                <h5>USFDA Approved <br/> Procedures</h5>
              </div>
              <div className="col-sm-3">
              <img src={What2} alt="" className="img-responsive" />
                <h5>No Cuts, No Woun <br/> Painless</h5>
              </div>
              <div className="col-sm-3">
              <img src={What3} alt="" className="img-responsive" />
                <h5> Insurance Paperwork's <br/> support</h5>
              </div>
              <div className="col-sm-3">
<img src={What4} alt="" className="img-responsive" />
                <h5>1 day <br/> Procedure</h5>
                            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="causes">
        <h2 className="text-center">Causes</h2>
        <div className="container-fluid fluid-cause">
          <div className="row">
            <div className="col-sm-4">
              <img src={cause1} alt="" className="img-responsive" />
              <h4>one</h4>
            </div>
            <div className="col-sm-4">
              <img src={cause2} alt="" className="img-responsive" />
              <h4>Two</h4>
            </div>
            <div className="col-sm-4">
              <img src={cause3} alt="" className="img-responsive" />
              <h4>Three</h4>
            </div>
          </div>
        </div>
        <div className="view-div">
          
          <button className="text-center view-button">View All</button>
        </div>
      </section>
      <section className="symptons">
        <h2 className="text-center">Causes</h2>
        <div className="container-fluid fluid-cause">
          <div className="row">
            <div className="col-sm-4">
              <img src={symp1} alt="" className="img-responsive" />
              <h4>one</h4>
            </div>
            <div className="col-sm-4">
              <img src={symp2} alt="" className="img-responsive" />
              <h4>Two</h4>
            </div>
            <div className="col-sm-4">
              <img src={symp3} alt="" className="img-responsive" />
              <h4>Three</h4>
            </div>
          </div>
        </div>
        <div className="view-div">
          
          <button className="text-center view-button">View All</button>
        </div>
      </section>

      <section className="treatment container">
        <div className="row">
          <div className="col-md-6">
            <h2>Treatment</h2>
            <h3>1. Diagnosis</h3>
            <p>
              Endoscopy: The surgeon uses a small, flexible tube to view the
              nasal passages and adenoids on an external video screen. Imaging
              tests: A CT scanner is used to produce detailed images of the
              adenoids and the nasal cavity to check for any sign of infection.
              Sometimes, surgeons may recommend throat x rays. Magnetic
              resonance imaging (MI): An MI scanner creates highly detailed
              images of the nasal passages,.......
            </p>
            <p className="colour-change">
              <a href="/">Read more</a>
            </p>

            <h3>2. Procedure</h3>
            <p>
              Adenoidectomy In adenoidectomy, the patient will be under the
              influence of general anesthesia, which means he/she quill to be
              asleep throughout the surgery. The surgeon then inserts a small
              instrument into the mouth to keep it open during the surgery.
              Infected adenoids are then subsequently located and removed via
              small incisions or cauterizing. Ænce the adenoids are removed, the
              area is sealed with the..
            </p>
            <p className="colour-change">
              <a href="/">colour change</a>
            </p>
          </div>
          <div className="col-md-6 col-img">
            <img src={treatment} alt="" className="img-responsive img2" />
          </div>
        </div>
      </section>

      <section className="number">
        <b><h2 className="text-center number-heading">BurlyCare in Numbers</h2>
        </b>
        <p className="text-center numbers-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          harum id nobis architecto unde, aspernatur, nisi quas placeat fugiat
          error provident nemo? Voluptatum, exercitationem tempora placeat
          aliquid quasi vel vero?
        </p>
        <div className="numbers-picture">
          <div className="container-fluid ">
            <div className="row row-numbers">
              <div className="col-md-3">
                <img src={no1} alt="" className="img-responsive" />
                <h3>300+</h3>
                <h6>Happy patients</h6>
              </div>
              <div className="col-md-3">
                <img src={no2} alt="" className="img-responsive" />
                <h3>100+</h3>
                <h6>Hospitals</h6>
              </div>
              <div className="col-md-3">
                <img src={no3} alt="" className="img-responsive" />
                <h3>200+</h3>
                <h6>Doctors</h6>
              </div>
              <div className="col-md-3">
                <img src={no4} alt="" className="img-responsive" />
                <h3>3+ </h3>
                <h6>cities</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="questions">
        <h2 className="text-center"> Frequently asked questions</h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem cum qui
          sequi vitae mollitia suscipit dolore distinctio eum est voluptate?
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <h4>
                <button className="button-question">?</button>
                  How Burlycare takes care of patients on the day of the
                  surgery?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta aut repellendus esse, quo nisi velit delectus debitis
                  molestias est. Nam.
                </p>
              </div>
              <div>
                <h4>
                <button className="button-question">?</button>
                  How Burlycare takes care of patients on the day of the
                  surgery?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta aut repellendus esse, quo nisi velit delectus debitis
                  molestias est. Nam.
                </p>
              </div>
            </div>
            <div className="col-md-6">
            <div>
                <h4>
                <button className="button-question">?</button>
                  How Burlycare takes care of patients on the day of the
                  surgery?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta aut repellendus esse, quo nisi velit delectus debitis
                  molestias est. Nam.
                </p>
              </div>
              <div>
                <h4>
                <span>

                <button className="button-question">?</button>
                </span>
                  How Burlycare takes care of patients on the day of the
                  surgery?
                </h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta aut repellendus esse, quo nisi velit delectus debitis
                  molestias est. Nam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer>

      </footer>
    </>
  );
}
