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
    🚪 Let My Gate Be Opened || August 1-3 || Theme: More Space (Isaiah 49:20),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🙌 Monthly Thanksgiving Service || Sunday, August 2 || 9:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📚 Discipleship Class || August 1 & 15 || 8:00 AM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📖 Sunday School Special Class || August 1 & 15 || 10:00 AM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🍽️ Workers Breakfast Fellowship || August 8 || Topic: That to Change For Change,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🔑 RALYD Day || August 9 || 9:30 AM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌟 Single and Useful || August 9 || Topic: To Be Announced || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌍 BSF Week || August 16 || Topic: Harvesting the Nations (Matthew 9:35-38),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🏠 Home Fellowship || August 9 & 23 || 5:30 PM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📝 Church Council Meeting || August 11 || 5:30 PM || Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🔥 Victory Night || August 21 || 11:00 PM || Topic: More and More (1 Chronicles 11:9),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    💧 Baptism || August 23 || 7:45 AM || Induction of New Members: 9:30 AM,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    👨‍👩‍👧‍👦 Family Week || August 30 - September 2 || Guest Minister: Rev. Mike Babatunde,
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
