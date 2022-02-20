import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

delete L.Icon.Default.prototype!._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface CountryMapProps {
  latitude: number;
  longitude: number;
  countryName?: string;
}

const CountryOnMap: React.FunctionComponent<CountryMapProps> = ({
  latitude,
  longitude,
  countryName,
}) => {
  return (
    <Paper sx={{ p: { md: 1 } }}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        style={{ height: 500 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          {countryName && (
            <Popup>
              <Typography>{countryName}</Typography>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </Paper>
  );
};

export default CountryOnMap;
