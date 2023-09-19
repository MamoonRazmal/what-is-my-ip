
import{Marker,Popup,MapContainer,TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css";

export default function Map({locs}){
console.log(" this is genrated from map the latitude",locs.latitude)
  const markers=[
    {
      geocode:[122,121],
      popup:"thie mirza girl"
    }
  ]
    return(

        <div className='map'>
        <MapContainer center={[50.57624, 12.76751]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[50.57621, 12.76752 ]}>
    <Popup>
    this is where you are . <br /> now find your naeibour.
    </Popup>
  </Marker>
</MapContainer>
</div>
    )
}