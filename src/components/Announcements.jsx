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
          🎯 Youth Network Special Programme || Date: May 1, 2026 || Time: 3:30
          PM || Theme: God, Family, Work and You,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          🚪 Let My Gate Be Opened || Date: May 1–3, 2026 || Time: Fri 5:30 PM |
          Sat 12 Noon | Sun 5:30 PM || Theme: Thus Says The Lord (Isaiah
          54:1–3),
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          ⚡ Special Pre-Worship Service || Date: May 3, 2026 || Time: 7:45 AM –
          8:30 AM || Theme: Divine Power for Exponential Growth,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          🎉 Monthly Thanksgiving Sunday || Date: May 3, 2026 || Time: 9:30 AM
          || Theme: Rejoicing in Christ Always (Philippians 3:1–10),
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          📘 Discipleship Class || Dates: May 3 & 17, 2026 || Time: 8:00 AM &
          10:00 AM || Theme: Spiritual Growth and Christian Living,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          📚 Sunday School Sessions || Dates: May 3 & 17, 2026 || Time: 8:00 AM
          & 10:00 AM || Theme: Practical Christian Living and Bible Teaching,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          👩‍👧 WOWEN Conference || Date: May 9, 2026 || Theme: Real Mother, Real
          Model (1 Samuel 25:18–31),
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          💐 Mother’s Day Service || Date: May 10, 2026 || Theme: My Mother, My
          Model,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          🏠 Home Fellowship || Dates: May 10 & 24, 2026 || Time: 5:30 PM ||
          Theme: Building Community Through Fellowship,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          🗂 Church Council Meeting || Date: May 12, 2026 || Time: 5:30 PM ||
          Venue: Virtual || Theme: Leadership and Church Advancement,
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          🌙 Intercessory Night || Date: May 15, 2026 || Time: 5:30 PM || Theme:
          Let There be Peace in Nigeria (Jeremiah 29:7),
        </Text>

        <Text color="white" mx="4" lineHeight="1.2">
          💑 Radiant Couples Fellowship || Date: May 23, 2026 || Time: 10:00 AM
          || Theme: The Unequally Yoked Dilemma (2 Corinthians 6:14),
        </Text>
      </Box>

      <style jsx>{`
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
