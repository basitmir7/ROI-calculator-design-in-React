import "./main.css";
import { CgClose } from "react-icons/cg";
import { BsToggleOn } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import cake from "./assets/cake.jpg";

function Main() {
  return (
    <div className="main">
      <div className="sec section-1">
        <div className="cal-header">
          <h3>ROI Calculator</h3>
          <CgClose style={{ fontSize: "25px", padding: "8px" }} />
        </div>
        <div className="cal-btns">
          <div className="pic"></div>
          CAKE
          <BsToggleOn
            style={{
              fontSize: "26px",
              color: "rgb(238, 205, 18)",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
          USD
        </div>
        <div className="cal-input">
          <input></input>
        </div>
        <div className="cal-dollar">
          <p>1000$</p>
          <p style={{ marginLeft: "3px" }}>100$</p>
          <h5
            style={{
              marginLeft: "auto",
              marginTop: "8px",

              marginBottom: "0",
              color: "rgb(158, 158, 158)",
            }}
          >
            ~ CAKE 0.000
          </h5>
        </div>
      </div>
      <div className="sec section-2">
        <div className="time-frame">time frame</div>
        <div className="time-days">
          <div
            className="days"
            style={{
              background: "rgb(252 223 59 / 60%)",
              outline: "1px solid rgb(238, 220, 20)",
              color: "black",
            }}
          >
            1 Day
          </div>
          <div className="days">7 Days</div>
          <div className="days">30 Days</div>
          <div className="days">1 Year</div>
          <div className="days">5 Years</div>
        </div>
      </div>
      <div className="sec section-3">
        <div className="apy">
          <div className="apy-header">Enable Accelerated APY</div>
          <BsToggleOn
            style={{
              fontSize: "43px",
              color: "rgb(238, 205, 18)",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          />
        </div>
        <p className="tier-p">select tier</p>
        <div className="tier">
          <div
            className="tier-list"
            style={{
              background: "rgb(252 223 59 / 60%)",
              outline: "1px solid rgb(238, 220, 20)",
              color: "black",
            }}
          >
            Tier 1
          </div>
          <div className="tier-list">Tier 2</div>
          <div className="tier-list">Tier 3</div>
          <div className="tier-list">Tier 4</div>
          <div className="tier-list">Tier 5</div>
        </div>
        <p id="upper-text">ROI at current rates</p>
        <input></input>
        <p id="lower-text">~ 0.000 CAKE + 0.000000 DON</p>
      </div>
      <div className="btn-section">
        <button className="btn-apply">Apply</button>
        <button className="btn-cancle">Cancel</button>
      </div>
      <div
        className="detailsBtn"
        id="detail-Btn"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Hide details{" "}
        <IoIosArrowUp
          style={{
            marginTop: "9px",
            fontSize: "13px",
          }}
        />
      </div>

      <div className="sec section-4" id="footer"></div>
    </div>
  );
}

export default Main;
