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
    Monthly Thanksgiving Service || Date: Sunday, March 1, 2026 || Time: 10:30 AM || Location: Church Auditorium || Theme: Grateful Hearts to Appreciate God’s Faithfulness,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Help From the Lord – Revival Meetings || Date: March 1–3, 2026 || Time: 5:30 PM Daily || Location: Church Auditorium || Theme: Let My Gate Be Opened (Psalm 121),
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Discipleship Classes || Date: March 7 & 8, 2026 || Time: Sat: 8:00 AM | Sun: 10:00 AM || Location: Designated Classes || Theme: Growing Deep in Christ and Building Strong Foundations,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Sunday School Preparatory Sessions || Date: March 7 & 21, 2026 || Time: 8:00 AM || Location: Sunday School Classes || Theme: Preparing Teachers for Effective Teaching,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Singles’ Fellowship || Date: Sunday, March 8, 2026 || Time: 12:00 Noon || Location: Church Auditorium || Theme: Setting Healthy Boundaries in Relationship,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Church Council Meeting || Date: Tuesday, March 10, 2026 || Time: 5:30 PM || Location: Church Auditorium || Theme: Strategic Leadership for Planning and Direction,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Global Leadership Summit || Date: Saturday, March 14, 2026 || Time: 9:00 AM || Location: Church Auditorium || Theme: Lead Where You Are,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Prayer Summit || Date: March 15–17, 2026 || Time: Sun: 9:30 AM | Mon–Tue: 5:30 PM || Location: Church Auditorium || Theme: The Heart That Prays (Matthew 26:38),
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Interactive Family Hub (IFH) || Date: Wednesday, March 18, 2026 || Time: 5:30 PM || Location: Church Auditorium || Theme: Gambling & Betting – Restoring Discipline and Christian Character,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Intercessory Night || Date: Friday, March 20, 2026 || Time: 5:30 PM || Location: Church Auditorium || Theme: Pray for One Another (James 5:16),
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Radiant Couples Fellowship || Date: Saturday, March 28, 2026 || Time: 10:00 AM || Location: Church Auditorium || Theme: Dysfunctional Family – Understanding Domestic Violence,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Palm Sunday Service || Date: Sunday, March 29, 2026 || Time: 9:30 AM || Location: Church Auditorium || Theme: Triumphal Entry – The Call to All-round Usefulness,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Believers’ Congress 2026 || Date: April 10–12, 2026 || Time: To Be Announced || Location: Church Auditorium || Theme: Growing in Grace,
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
