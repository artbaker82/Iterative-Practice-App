import React from "react";
import { useLocation } from "react-router";

const SessionView = () => {
  const location = useLocation();
  const { list } = location.state;

  return (
    <div>
      In practice List:
      {list.items.map((item) => {
        return (
          <p>
            Title: {item.title}, Timer set: {item.timer}
          </p>
        );
      })}
    </div>
  );
};

export default SessionView;
