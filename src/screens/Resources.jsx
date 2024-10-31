import PrayerRequest from "../components/PrayerRequest";
import { Box } from "@chakra-ui/react";
import Accounts2 from "../components/Accounts2"
import Catchup from "../components/CatchUp";

const Resources = () => {
  return (
    <Box>
      <PrayerRequest />
      {/* <Catchup/> */}
      <Accounts2/>
    </Box>
  );
};

export default Resources;
