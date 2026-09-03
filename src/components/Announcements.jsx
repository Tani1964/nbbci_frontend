import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Announcement = () => {
  return (
    <Box
      bg="#A8518A"
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      p="0" // Set padding to 0
      py="3" // Set padding to 0
      m="0" // Set margin to 0
      fontWeight="bold"
      textAlign="center"
    >
<Box
  as="div"
  display="flex"
  alignItems="center"
  animation="scroll 60s linear infinite"
  whiteSpace="nowrap"
>
  <Text color="white" mx="4" lineHeight="1.2">
    🙏 Pre-Worship Encounter || Every Sunday || 8:00 AM - 8:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📖 Sunday School || Every Sunday || 8:30 AM - 9:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🎉 Worship Service || Every Sunday || 9:30 AM - 11:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌅 Dew of Hermon || Every Monday || 6:00 AM - 6:30 AM || Virtual: https://join.freeconferencecall.com/newbbci,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    💼 Business Men & Women Fellowship Prayer Session || Every Tuesday || 5:00 AM - 6:00 AM || Virtual: https://join.freeconferencecall.com/newbbci,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    ⛪ Midweek Service || Every Wednesday || 5:30 PM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🎶 Choir Rehearsal || Every Saturday || 12:00 Noon || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    👨‍👩‍👧‍👦 Family Week || August 30 - September 2 || Guest Minister: Rev. Mike Babatunde,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🚪 Let My Gate Be Opened || Thursday, September 3 || 5:30 PM || Theme: Abiding for Fruitfulness || Virtual,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🙌 Monthly Thanksgiving Service || Sunday, September 6 || 9:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📚 Discipleship Class || September 6 & 20 || 8:00 AM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📖 Sunday School Preparatory Class || September 6 & 20 || 10:00 AM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📝 Church Council Meeting || September 8 || 5:30 PM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌟 Single and Useful || Sunday, September 13 || 12 Noon || Theme: Love that lasts (1 Corinthians 13) || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌍 G.A. Week || Sunday, September 13 || 9:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🏠 Home Fellowship || September 13 & 27 || 5:30 PM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🔥 Intercessory Night || Friday, September 18 || 5:30 PM || Topic: Heal Our Homes (Song of Solomon 2:15) || Virtual,
  </Text>
</Box>    <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Announcement;
