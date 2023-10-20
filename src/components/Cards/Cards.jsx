import React from "react";
import "./Cards.css";

const Card = ({ id, title, tag, status, elem }) => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log("user is::: ", elem);
  let res = (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" }}
        >
          <div
            id="myCanvas"
            width="100%"
            height="100%"
            borderRadius="150px"
            style={{
              backgroundColor: "#" + randomColor,
              borderRadius: "35%",
              justifyContent: "center",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {"U" + elem.userId[elem.userId.length - 1]}
          </div>

          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> ... </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span>•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );

  // const canvas = res.getElementById("myCanvas");
  // const ctx = canvas.getContext("2d");

  // ctx.font = "30px Arial";
  // ctx.strokeText("Hello World", 10, 50);

  return res;
};

export default Card;
