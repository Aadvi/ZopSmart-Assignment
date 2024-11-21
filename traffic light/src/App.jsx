import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green"); // Initial color is green

  useEffect(() => {
    const cycleTrafficLight = () => {
      setColor("green");
      setTimeout(() => {
        setColor("yellow");
        setTimeout(() => {
          setColor("red");
          setTimeout(() => {
            setColor("yellow");
            setTimeout(() => {
              setColor("green");
            }, 2000); // 2 seconds for green
          }, 5000); // 5 seconds for yellow after red
        }, 2000); // 2 seconds for red
      }, 3000); // 3 seconds for yellow after green
    };

    cycleTrafficLight(); // Start the traffic light cycle

    // Repeat the cycle every 12 seconds (total cycle time)
    const interval = setInterval(cycleTrafficLight, 12000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const getColorStyle = (currentColor) => {
    let backgroundColor;
    let borderColor = "grey";

    if (currentColor === "green") {
      backgroundColor = "green";
      borderColor = "green";
    } else if (currentColor === "yellow") {
      backgroundColor = "yellow";
      borderColor = "yellow";
    } else if (currentColor === "red") {
      backgroundColor = "red";
      borderColor = "red";
    } else {
      backgroundColor = "transparent";
    }

    return {
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      backgroundColor: backgroundColor,
      border: `5px solid ${borderColor}`,
      margin: "10px auto",
      transition: "background-color 0.5s ease",
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "2px solid black",
          borderRadius: "8px",
          backgroundColor: "black",
          width: "10vw",
          height: "65vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Red light */}
        <div style={getColorStyle(color === "red" ? "red" : "")} />

        {/* Yellow light */}
        <div style={getColorStyle(color === "yellow" ? "yellow" : "")} />

        {/* Green light */}
        <div style={getColorStyle(color === "green" ? "green" : "")} />
      </div>
    </div>
  );
};

export default TrafficLight;
