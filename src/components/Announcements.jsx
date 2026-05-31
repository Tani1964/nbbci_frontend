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
    🚪 Let My Gate Be Opened || Date: June 1–3, 2026 || Time: 5:30 PM Daily ||
    Theme: Perfect Opening (Rev. 3:20),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📘 Discipleship Class || Date: June 6, 2026 || Time: 8:00 AM || Theme:
    Growing in God's Word and Christian Living,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📚 Sunday School Session || Date: June 6, 2026 || Time: 10:00 AM || Theme:
    Practical Christian Living and Spiritual Development,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🗂 Church Council Meeting || Date: June 10, 2026 || Time: 5:30 PM ||
    Venue: Virtual || Theme: Leadership Decisions and Church Advancement,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    💃 Inter-Cultural Praise || Date: June 14, 2026 || Time: 9:30 AM ||
    Theme: Unconventional Praise (2 Samuel 6:14,16),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🏠 Home Fellowship || Dates: June 14 & 28, 2026 || Time: 5:30 PM ||
    Theme: Building Community Through Fellowship,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🎉 Monthly Thanksgiving Sunday || Date: June 17, 2026 || Time: 9:30 AM ||
    Celebrating God's Faithfulness and Testimonies,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    👨 Men's Conference || Date: June 20, 2026 || Theme: Fathers As Kingdom
    Builders (Hebrews 34:4; 1 Corinthians 3:9–11),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    💐 Father's Day Service || Date: June 21, 2026 || Theme: Fathers As Kingdom
    Builders (Hebrews 34:4; 1 Corinthians 3:9–11),
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    🌙 Victory Night || Date: June 26, 2026 || Time: 11:00 PM || A Night of
    Prayer, Worship, and Divine Encounters,
  </Text>

  <Text color="white" mx="4" lineHeight="1.2">
    📢 New Birth on the Street || Date: June 28, 2026 || Time: 9:30 AM ||
    Medical Outreach & Street Crusade || Venue: Ipara Community,
  </Text>
</Box>      <style jsx>{`
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
