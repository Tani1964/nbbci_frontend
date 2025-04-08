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
        display="flex" // Use flex for better alignment
        alignItems="center" // Center align items
        animation="scroll 30s linear infinite"
      >
        
        <Text color="white" mx="1" lineHeight="1.2">
          Let My Gate Be Opened || Date: April 1st – 3rd || Time: 5:30 PM Daily || Location: Church Auditorium || Theme: Divine Escape (Psalm 91:3-4),
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Pastor’s Convocation Ceremony || Date: April 4th || Location: Crowther Graduate Theological Seminary, Igbein, Abeokuta,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Communion Service || Date: April 6th || Time: 9:30 AM,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          2025 Believers’ Congress || Date: April 11th – 12th || Time: Friday – 5:00 PM | Saturday – 8:00 AM || Location: Church Auditorium || Theme: Alive in Christ,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Baptismal Service || Date: April 13th || Time: 7:30 AM,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Singles and Useful Fellowship || Date: April 13th || After the service,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Palm Sunday Celebration || Date: April 13th || Time: 9:30 AM || Location: Church Auditorium,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Good Friday Service || Date: April 18th || Time: 8:30 AM || Location: Church Auditorium,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Easter Sunday Celebration || Date: April 20th || Location: Church Auditorium,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Easter Monday Picnic || Date: April 21st || Organized by: Home Fellowship || Leaders and coordinators to prepare,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          Victory Night – Bi-Monthly Vigil || Date: April 25th || Time: 11:00 PM || Location: Church Auditorium || Theme: Almighty God – Exodus 6:6,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          2025 NBC In Session || Date: April 26th – May 1st || Location: Baptist International Convention Center, Lafuape || Theme: Entering Into Newness Through Fasting and Praying,
        </Text>
        <Text color="white" mx="1" lineHeight="1.2">
          NBC Convention Sunday || Date: April 27th || Location: All NBC Churches || Special pulpit exchange in Ogun, Lagos, and Oyo States.
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
