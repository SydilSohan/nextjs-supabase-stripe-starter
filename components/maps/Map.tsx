'use client';
import React, { useEffect } from 'react';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
type Props = {
  start: string;
  end: string;
  waypoints?: { location: string }[];
  points?: { lat: number | null; lng: number | null }[];
  start_point: { lat: number | null; lng: number | null };
  end_point: { lat: number | null; lng: number | null };
};

const PointsMap = ({
  waypoints,
  start,
  end,
  points,
  start_point,
  end_point,
}: Props) => {
  return (
    <div className="h-[15rem] w-full max-w-screen-xl rounded-lg my-2 lg:my-4">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <Map
          disableDefaultUI
          style={{ borderRadius: '10px' }}
          defaultZoom={17}
          defaultHeading={50}
          defaultTilt={47.5}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={true}
          keyboardShortcuts
          rotateControl
          zoomControl
        >
          <Directions
            waypoints={waypoints}
            start={start}
            end={end}
            start_point={start_point}
            end_point={end_point}
          />

          {points?.map(({ lat, lng }, index) => {
            if (!lat || !lng) return null;
            return (
              <AdvancedMarker key={index} position={{ lat: lat!, lng: lng! }}>
                <Pin background={'orange'} glyphColor={'white'} scale={1.3}>
                  <p className="text-sm font-bold     "> {index + 1}</p>
                </Pin>
              </AdvancedMarker>
            );
          })}
          <AdvancedMarker
            position={{ lat: start_point.lat!, lng: start_point.lng! }}
          >
            <Pin background={'orange'} glyphColor={'white'} scale={1.3}>
              <p className="text-sm font-bold     "> Start</p>
            </Pin>
          </AdvancedMarker>
          <AdvancedMarker
            position={{ lat: end_point.lat!, lng: end_point.lng! }}
          >
            <Pin background={'orange'} glyphColor={'white'} scale={1.3}>
              <p className="text-sm font-bold     "> End</p>
            </Pin>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default PointsMap;

const Directions = ({ start, end, waypoints }: Props) => {
  const [routes, setRoutes] = React.useState<google.maps.DirectionsRoute[]>();
  const routesLibrary = useMapsLibrary('routes');
  const map = useMap();
  const [directionsService, setDirectionsService] =
    React.useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    React.useState<google.maps.DirectionsRenderer>();
  const [routeIndex, setRouteIndex] = React.useState<number>(0);
  const selected = routes?.[routeIndex];
  const leg = selected?.legs[0];
  // const waypoints = [ {location : "Emporium Arcade Bar, 1366 N Milwaukee Ave, Chicago, IL 60622, United States"},  {location : "Lottie's Pub, 1925 W Cortland St, Chicago, IL 60622, United States"}, {location :  "Nicks Beer Garden, 1516 N Milwaukee Ave, Chicago, IL 60622, United States"}, {location : "Piece Brewery, 1927 W North Ave, Chicago, IL 60622, United States"},

  // ]
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;
    directionsService
      .route({
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING,
        waypoints: waypoints ? waypoints : undefined,
        optimizeWaypoints: false,
        provideRouteAlternatives: false,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // useEffect(() => {
  //   if (!directionsRenderer) return;
  //   directionsRenderer.setRouteIndex(routeIndex);
  // }, [directionsRenderer, routeIndex]);
  useEffect(() => {
    if (!leg) return;
  }, [leg]);
  if (!leg) return null;
  return <> </>;
  // return <div className='directions bg-gray-200 p-4 w-48 h-full  absolute'>

  //   <p className=' font-bold text-pretty' >
  //     {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
  //   </p>
  //   <p className=' font-bold text-pretty' >
  //      Distance: {leg?.distance?.text}
  //   </p>
  //   <p className=' font-bold text-pretty'>
  //     Duration : {leg?.duration?.text}
  //   </p>
  //   <h3>
  //     Other Routes
  //     <ul>
  //         {routes?.map((route, index) => <li key={index}>

  //             <Button variant={'ghost'} onClick={() => setRouteIndex(index)}>{route.summary   }</Button>

  //         </li>)}
  //     </ul>
  //   </h3>

  // </div>
};
