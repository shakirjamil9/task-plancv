import React from "react";
import PathRect from "./PathRect";
import "./Building.css";
import img from "./img/nature.jpg";
import img1 from "./img/ben-mathis-seibel-OjrmUvnkMYs-unsplash.jpg";
import img2 from "./img/geran-de-klerk-WJkc3xZjSXw-unsplash.jpg";
import img3 from "./img/mary-brennan-T-bQUotjOwg-unsplash.jpg";
import img4 from "./img/v2osk-C68WT0YKGxo-unsplash.jpg";

export default function Building() {
  const [dataOnHover, setDataOnHover] = React.useState(false);

  const test = [
    {
      d: "M129.686 147.924H401.98400000000004V281.067H129.686z",
      data: {
        RoomNumber: 1,
        RoomUsage: "Class Room",
        OPSC_Code: "CR",
        Grade_Level: "8th",
        interior_sqft: 960,
        img: img,
      },
    },
    {
      d: "M137.417 155.654H202.26999999999998V202.254H137.417z",
      data: {
        RoomNumber: 2,
        RoomUsage: "Class Room",
        OPSC_Code: "C",
        Grade_Level: "6th",
        interior_sqft: 860,
        img: img1,
      },
    },
    {
      d: "M208.068 155.44H315.44100000000003V202.899H208.068z",
      data: {
        RoomNumber: 3,
        RoomUsage: "Class Room",
        OPSC_Code: "CR",
        Grade_Level: "4th",
        interior_sqft: 760,
        img: img2,
      },
    },
    {
      d: "M326.179 154.795H393.17999999999995V274.19399999999996H326.179z",
      data: {
        RoomNumber: 4,
        RoomUsage: "Class Room",
        OPSC_Code: "CR",
        Grade_Level: "8th",
        interior_sqft: 960,
        img: img3,
      },
    },
    {
      d: "M136.987 212.133H319.52099999999996V274.409H136.987z",
      data: {
        RoomNumber: 5,
        RoomUsage: "Class Room",
        OPSC_Code: "CR",
        Grade_Level: "8th",
        interior_sqft: 960,
        img: img4,
      },
    },
  ];

  return (
    <>
      <div className="main">
        <svg
          style={{ height: "450px" }}
          viewBox="129.686 147.924 272.298 133.143"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#d8d8d8" stroke={"#000"}>
            {test.map((obj, i) => {
              return (
                <PathRect
                  setDataOnHover={setDataOnHover}
                  d={obj.d}
                  data={obj.data}
                  key={i}
                />
              );
            })}
          </g>
        </svg>
        <div>
          {dataOnHover && (
            <div className="awesome-div">
              <img src={dataOnHover.img} className="img" alt="" />
              <div className="data_">
                <h3>Room Number :</h3>
                <h3 className="data_view">{dataOnHover.RoomNumber}</h3>
              </div>
              <div className="data_">
                <h3>Room Usage :</h3>
                <h3 className="data_view">{dataOnHover.RoomUsage}</h3>
              </div>
              <div className="data_">
                <h3>OPSC Code :</h3>
                <h3 className="data_view">{dataOnHover.OPSC_Code}</h3>
              </div>
              <div className="data_">
                <h3>Grade Level :</h3>
                <h3 className="data_view">{dataOnHover.Grade_Level}</h3>
              </div>
              <div className="data_">
                <h3>Interior sqft</h3>
                <h3 className="data_view">{dataOnHover.interior_sqft}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
