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
    Let My Gate Be Opened || Date: April 1–3, 2026 || Time: 5:30 PM Daily || Location: Church Auditorium || Theme: Double Victory (Exodus 14:13-14),
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Good Friday Service || Date: April 3, 2026 || Time: 8:30 AM || Location: Church Auditorium || Theme: Proclaiming The Lord’s Death,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Pathfinder 2026 || Date: April 4, 2026 || Time: 9:30 AM || Location: Church Auditorium || Theme: The Supernatural Student,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Discipleship Classes || Date: April 4 & 18, 2026 || Time: 8:00 AM & 10:00 AM || Location: Designated Classes || Theme: Spiritual Growth and Maturity,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Sunday School Sessions || Date: April 4 & 18, 2026 || Time: 10:00 AM & 8:00 AM || Location: Sunday School Classes || Theme: Deepening Biblical Understanding,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Thanksgiving & Easter Sunday || Date: April 5, 2026 || Time: 9:30 AM || Location: Church Auditorium || Theme: The Power of Resurrection,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Easter Cantata || Date: April 5, 2026 || Time: 5:00 PM || Location: Church Auditorium || Theme: Hosanna,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Believers’ Congress || Date: April 10–12, 2026 || Time: Fri: 5 PM | Sat: 8:30 AM | Sun: 9:30 AM || Location: Church Auditorium || Theme: Growing in Grace,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Home Fellowship || Date: April 11 & 25, 2026 || Time: 5:30 PM || Location: Various Centres || Theme: Building Faith and Fellowship,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Church Council Meeting || Date: April 14, 2026 || Time: 5:30 PM || Location: Virtual || Theme: Strategic Leadership,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    NBC in Session || Date: April 18–23, 2026 || Location: Abuja || Theme: National Gathering for Vision and Direction,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    General Evangelism || Date: April 19, 2026 || Time: 9:30 AM || Location: Outreach Centres || Theme: Spreading the Gospel,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Victory Night || Date: April 24, 2026 || Time: 11:00 PM || Location: Church Auditorium || Theme: Contending Against The Wicked Sower,
  </Text>

  <Text color="white" mx="1" lineHeight="1.2">
    Family Meeting || Date: April 26, 2026 || Time: 9:30 AM || Location: Church Auditorium || Theme: Strengthening Family Bonds,
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
