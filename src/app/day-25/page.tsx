"use client";

import { useState } from "react";
import Map, { useMap, MapProvider, Marker, Popup } from "react-map-gl";
import type { LngLatLike } from "mapbox-gl";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faArrowRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const HOME_LONGITUDE = 5.0535;
const HOME_LATITUDE = 50.407765;

const STOP_1_LONGITUDE = 5.707642802504196;
const STOP_1_LATITUDE = 51.00286478417655;

const STOP_2_LONGITUDE = 5.682416972952586;
const STOP_2_LATITUDE = 51.00188467715492;

function Component() {
  const [step, setStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { myMap } = useMap();

  console.log(showPopup);

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr] gap-4 place-items-center">
      <div className="text-4xl italic w-fit">Day 25</div>
      <div className="w-full h-full bg-white text-black rounded-lg flex flex-col items-center gap-4 overflow-hidden relative">
        <Map
          id="myMap"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: HOME_LONGITUDE,
            latitude: HOME_LATITUDE,
            zoom: 16,
          }}
          mapStyle="mapbox://styles/mapbox/standard"
        >
          <Marker longitude={HOME_LONGITUDE} latitude={HOME_LATITUDE}>
            <FontAwesomeIcon size="2x" icon={faHome} />
          </Marker>

          <Marker
            longitude={STOP_1_LONGITUDE}
            latitude={STOP_1_LATITUDE}
            onClick={() => {
              console.log("clicked");
              setShowPopup(true);
            }}
          >
            <FontAwesomeIcon size="2x" icon={faGift} />
          </Marker>

          <Marker longitude={STOP_2_LONGITUDE} latitude={STOP_2_LATITUDE}>
            <FontAwesomeIcon size="2x" icon={faGift} />
          </Marker>

          {showPopup && (
            <Popup
              longitude={STOP_1_LONGITUDE}
              latitude={STOP_1_LATITUDE}
              // onClose={() => setShowPopup(false)}
            >
              This is some content
            </Popup>
          )}
        </Map>
        <Button
          className="w-fit absolute bottom-4"
          disabled={step === 2}
          onClick={() => {
            const nextStop: LngLatLike =
              step === 0
                ? [STOP_1_LONGITUDE, STOP_1_LATITUDE]
                : [STOP_2_LONGITUDE, STOP_2_LATITUDE];

            myMap?.flyTo({
              center: nextStop,
              zoom: 16,
            });
            setStep((step) => step + 1);
          }}
        >
          {step === 0 && (
            <>
              <FontAwesomeIcon size="2x" icon={faPlay} />
              Show me where we&apos;re going !
            </>
          )}
          {step === 1 && (
            <>
              <FontAwesomeIcon size="2x" icon={faArrowRight} />
              What&apos;s next ?
            </>
          )}
          {step === 2 && (
            <>
              <FontAwesomeIcon size="2x" icon={faGift} />
              Merry Christmas !
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <MapProvider>
      <Component />
    </MapProvider>
  );
}
