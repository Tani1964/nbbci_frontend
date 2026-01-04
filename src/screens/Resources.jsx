import PrayerRequest from "../components/PrayerRequest";
import { Box } from "@chakra-ui/react";
import Accounts2 from "../components/Accounts2"
import Catchup from "../components/CatchUp";
import Bg from "../assets/BG.png";


const Resources = () => {
  return (
    <Box  className="min-h-[80vh] text-white bg-no-repeat bg-center bg-cover bg-opacity-50"  backgroundImage={`url(${Bg})`}    
>
      <Accounts2/>
      <PrayerRequest />
      {/* <Catchup/> */}
    </Box>
  );
};

export default Resources;
