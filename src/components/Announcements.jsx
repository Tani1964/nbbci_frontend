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
  Let My Gate Be Opened || Date: May 1st – 3rd || Time: 5:30 PM Daily || Location: Church Auditorium || Theme: Extravagant Grace (2 Cor 9:8),
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Monthly Thanksgiving/Power Service || Date: May 4th || Time: 8:30 AM || Location: Church Auditorium || Theme: Prevailing Over Destiny Waster (John 10:10),
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Women’s Conference || Date: May 10th || Time: 9:00 AM || Location: Church Auditorium || Theme: The Home Builders (Prov 14:1),
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Mother's Day || Date: May 11th || Time: 9:30 AM || Location: Church Auditorium || Theme: Mothers As Home Builders (Prov 14:1; 31:10-31),
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Single & Useful Fellowship || Date: May 11th || Time: 12:00 PM || Location: Church Auditorium,
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Intercessory Night || Date: May 16th || Time: 5:30 PM || Location: Church Auditorium,
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Evangel Baptist Association in Session || Date: May 17th || Time: 9:00 AM || Location: Good Tiding Baptist Church, Lawanson,
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Radiant Couples Fellowship || Date: May 24th || Time: 10:00 AM || Location: Church Auditorium || Theme: Recalibrate Romance (Guests: Revd. Dr. Samson & Dr. Margaret Adedokun),
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Children’s Day Service || Date: May 25th || Time: 9:30 AM || Location: Church Auditorium,
</Text>
<Text color="white" mx="1" lineHeight="1.2">
  Faith of Our Fathers || Date: May 29th – 30th || Time: 9:00 AM || Location: New Heritage Baptist Church, Shomolu || Theme: Church Response to Contemporary Family Challenges,
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
