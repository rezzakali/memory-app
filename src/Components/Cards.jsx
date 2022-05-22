import React, { useState } from "react";
import "../App.css";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", state: "" },
      { id: 1, img: "/img/html.png", state: "" },
      { id: 2, img: "/img/css.png", state: "" },
      { id: 2, img: "/img/css.png", state: "" },
      { id: 3, img: "/img/js.png", state: "" },
      { id: 3, img: "/img/js.png", state: "" },
      { id: 4, img: "/img/scss.png", state: "" },
      { id: 4, img: "/img/scss.png", state: "" },
      { id: 5, img: "/img/react.png", state: "" },
      { id: 5, img: "/img/react.png", state: "" },
      { id: 6, img: "/img/angular.png", state: "" },
      { id: 6, img: "/img/angular.png", state: "" },
      { id: 7, img: "/img/vue.png", state: "" },
      { id: 7, img: "/img/vue.png", state: "" },
      { id: 8, img: "/img/nodejs.png", state: "" },
      { id: 8, img: "/img/nodejs.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prevCardIndex, setPrevCardIndex] = useState(-1);

  const check = (current) => {
    if (items[current].id === items[prevCardIndex].id) {
      items[current].state = "correct";
      items[prevCardIndex].state = "correct";
      setItems([...items]);
      setPrevCardIndex(-1);
    } else {
      items[current].state = "wrong";
      items[prevCardIndex].state = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].state = "";
        items[prevCardIndex].state = "";
        setPrevCardIndex(-1);
      }, 1000);
    }
  };
  const handleClick = (id) => {
    if (prevCardIndex === -1) {
      items[id].state = "active";
      setItems([...items]);
      setPrevCardIndex(id);
    } else {
      check(id);
    }
  };
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card item={item} key={index} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
