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
  animation="scroll 30s linear infinite"
  whiteSpace="nowrap"
>
  <Text color="white" mx="4" lineHeight="1.2">
    🚪 Let My Gate Be Opened || Date: July 1–3, 2026 || Time: 5:30 PM Daily ||
    Theme: Unique Rest (Matthew 11:28),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🎉 Monthly Thanksgiving Service || Date: July 5, 2026 || Time: 9:30 AM ||
    Celebrating God's Faithfulness and Gratitude,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📘 Discipleship Class || Dates: July 4 & 11, 2026 || Time: 8:00 AM ||
    Growing Deeper Through Practical Biblical Teaching,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📚 Sunday School || Dates: July 4 & 11, 2026 || Time: 10:00 AM ||
    Interactive Bible Study and Faith Building,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    💍 Single and Useful || Date: July 12, 2026 || Venue: Church Auditorium ||
    Topic: Purity, Sexual Temptation and Accountability,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🏠 Home Fellowship || Dates: July 12 & 26, 2026 || Time: 5:30 PM ||
    Building Community Through Fellowship,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🗂 Church Council Meeting || Date: July 14, 2026 || Time: 5:30 PM ||
    Venue: Church Auditorium,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🙌 Special Worship Service || Date: July 15, 2026 || Time: 5:30 PM ||
    Theme: Evening of Sacrificial Worship,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🔥 Intercessory Night || Date: July 17, 2026 || Time: 5:30 PM ||
    Topic: God of New Things (Revelation 21:5),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🩺 Health Sunday || Date: July 19, 2026 || Theme: Lifestyle Medicine:
    Living God's Dream For Our Health,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    ❤️ Radiant Couples Fellowship || Date: July 25, 2026 ||
    Strengthening Christ-Centred Marriages and Families,
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
