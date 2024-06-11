import { Box, Flex, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapWithSidebar = () => {
  return (
    <Flex height="100vh">
      <Box width="300px" bg="gray.100" p={4}>
        <Text fontSize="2xl" mb={4}>Sidebar</Text>
        <Text>Content goes here...</Text>
      </Box>
      <Box flex="1">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Flex>
  );
};

export default MapWithSidebar;