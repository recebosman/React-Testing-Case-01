import React from "react";

const App = () => {
  const [locations, setLocations] = React.useState([]);
  const [data, setData] = React.useState([]);

  const handleClick = (e) => {
    setLocations((prev) => [...prev, { x: e.clientX, y: e.clientY }]);
  };
  const handleRedo = (e) => {
    e.stopPropagation();
    const location = [...locations];
    const lastLocation = location.pop();
    setLocations(location);
    setData((prev) => [...prev, lastLocation]);
  };

  const handleUndo = (e) => {
    e.stopPropagation();
    const location = [...data];
    const lastLocation = location.shift();
    setData(location);
    setLocations((prev) => [...prev, lastLocation]);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    setLocations([]);
    setData([]);
  };

  return (
    <div onClick={handleClick} className="screen">
      <button
        disabled={locations.length === 0 ? true : false}
        onClick={handleRedo}
        className="btn_1"
      >
        Redo
      </button>
      <button
        disabled={data.length === 0 ? true : false}
        onClick={handleUndo}
        className="btn_2"
      >
        Undo
      </button>
      <button onClick={handleClear} className="btn_3">
        Clear
      </button>
      {locations &&
        locations.map((location, index) => (
          <div
            className="dot"
            style={{
              top: location.y,
              left: location.x,
            }}
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default App;
