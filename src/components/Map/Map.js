import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';
import AutoForm from './AutoForm';

// TODO: add function for places API (autocomplete!) 
// https://www.npmjs.com/package/google-maps-react


export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    const { locations } = this.props;
    const { selectedPlace } = this.state;

  
    return (
        <div style={{ height: '200px'}}>
          <AutoForm/>
          <Map 
            google={this.props.google}
            initialCenter={{
              lat: 45.532956,
              lng: -122.684665
            }}
            zoom={12}
            scrollwheel={false}
            style={{ 
              width: '50%',
            }}
            clickableIcons={true}
            >
            {locations.map((location, i) => {
              return <Marker
                key={i}
                onClick={this.onMarkerClick}
                name={location.name}
                shopUrl={location.shopUrl}
                street={location.street}
                city={location.city}
                state={location.state}
                zip={location.zip}
                country={location.country}
                position={{ lat: location.latitude, lng: location.longitude }}
              />;
            })
            }
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>
                  {selectedPlace.name}<br />
                  {selectedPlace.shopUrl}<br />
                  {selectedPlace.street}<br />
                  {selectedPlace.city}, {selectedPlace.state}<br />
                  {selectedPlace.zip}, {selectedPlace.country}
                </h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: (process.env.REACT_API_GOOGLE_API_KEY)
  apiKey: ('AIzaSyBz9msJ3yamy2OLY1PMPZps23bbcMoceEE'),
  version: '3.28'
})(MapContainer);