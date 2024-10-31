import PrayerRequest from "../components/PrayerRequest";
import { Box } from "@chakra-ui/react";
import Accounts from "../components/Accounts"
import Catchup from "../components/CatchUp";

const Resources = () => {
  return (
    <Box>
      <PrayerRequest />
      {/* <Catchup/> */}
      <Accounts/>
    </Box>
  );
};

export default Resources;
