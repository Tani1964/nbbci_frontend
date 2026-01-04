import React from 'react';
import { Box, Text } from '@chakra-ui/react';

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
      >
        <Text color="white" mx="1" lineHeight="1.2">
          2026 Sunday School Annual Bible Study || Date: Every Sunday in January 2026 || Time: 8:30 AM – 9:25 AM || Location: Sunday School Classes || Theme: Character Study (Daniel 1–6),
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          Peniel 2026: 21 Days of Fasting & Prayer || Date: January 5 – 24, 2026 || Time: Mon–Fri & Sun: 5:30 PM | Sat: 12:00 Noon || Location: Church Auditorium || Theme: Next Level,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          NBBC Workers’ Retreat || Date: Saturday, January 10, 2026 || Time: 8:00 AM prompt || Location: Church Auditorium || Theme: Transformational Worker – An Agent of Exponential Church Growth,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          Lagos East Baptist Conference Workers’ Retreat || Date: January 2026 || Time: 9:00 AM || Location: FBC Ikorodu || Theme: Transformational Leaders – Becoming a Generous and Faithful Steward,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          Deacons’ Appreciation & Ordination Service || Date: January 18, 2026 || Time: 9:30 AM || Location: Church Auditorium,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          MMU & WMU Emphasis Sunday || Date: January 25, 2026 || Time: 9:30 AM || Location: Church Auditorium || Theme: Restoring the Broken Walls Through the Fruit and Gifts of the Holy Spirit,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          Church Council Meeting || Date: January 27, 2026 || Time: 5:30 PM || Location: Church Auditorium,
        </Text>

        <Text color="white" mx="1" lineHeight="1.2">
          Radiant Couples Fellowship – Breakfast Fellowship || Date: January 31, 2026 || Time: To Be Announced || Location: To Be Announced,
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
