import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5cCuGlI3dn3uqNzJEd3nkyogkEZaLAvQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={17} defaultCenter={{ lat: props.lat, lng: props.long }}>
    {props.markers}
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = ({ lat, long, markers }) => [
  <MyMapComponent markers={markers} lat={lat} long={long} key="map" />
];

export default enhance(ReactGoogleMaps);