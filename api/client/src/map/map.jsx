const MapContainer = (props) => {
  console.log(props);

  return (
    <iframe
      width="280"
      height="300"
      id="gmap_canvas"
      src={`https://maps.google.com/maps?q=${props.data}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    ></iframe>
  );
};

export default MapContainer;
