import React, { useEffect, useRef, useState } from "react";
import styles from "./map.module.css";
import Mappa from "mappa-mundi";

const key =
  "pk.eyJ1IjoiY2hyaXNkZW5uZXR0IiwiYSI6ImNra3M1cHU0eTBhM2Yyd3BsaWtnNG03cjcifQ.x7XqljBcDYKH4XujjGrB3Q";
const mappa = new Mappa("Mapbox", key);

export default function Map({ type = "streets" }) {
  const [map, setMap] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef || !canvasRef.current) return;

    // only want to set the map up once
    if (map) return;

    // const mappa = new Mappa("Leaflet");

    let mapStyle = "light-v10";
    if (type === "satellite") mapStyle = "satellite-v9";
    if (type === "streets") mapStyle = "streets-v11";
    if (type === "light") mapStyle = "light-v10";
    if (type === "dark") mapStyle = "dark-v10";
    if (type === "outdoors") mapStyle = "outdoors-v11";
    if (type === "traffic") mapStyle = "traffic-night-v2";
    if (type === "satelliteStreets") mapStyle = "satellite-streets-v11";

    const options = {
      lat: 54.19610504872623,
      lng: -3.0941212177276616,
      zoom: 18,
      studio: true, // false to use non studio styles
      style: `mapbox://styles/mapbox/${mapStyle}`,
      // style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      //style: "mapbox.dark", //traffic-night-v2, streets, outdoors, light, dark, satellite (for nonstudio)
      // style: "mapbox://styles/mapbox/traffic-night-v2",
      // style: "mapbox://styles/mapbox/satellite-v9",
      // style: "mapbox://styles/mapbox/dark-v10",
      // style: "mapbox://styles/mapbox/outdoors-v11",
    };

    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 500;

    const myMap = mappa.tileMap(options);

    myMap.overlay(canvas);

    // myMap.onChange((e) => {
    //   if (e) console.log("e: ", e.lngLat);
    // });

    console.log("myMap: ", myMap);

    setMap(myMap);
  }, [canvasRef]);

  const onMapClick = (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");

    const pos = map.pixelToLatLng(x, y);
    console.log("pos: ", pos);
  };

  return (
    <div className={styles.canvasHolder}>
      <canvas ref={canvasRef} onClick={onMapClick} />
    </div>
  );
}
