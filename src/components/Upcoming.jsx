import {
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

const Upcoming = () => {
  const activities = [
    {
      "week": "1ST WEEK",
      "title": "Let My Gate Be Opened",
      "theme": "Extravagant Grace. 2 Cor 9:8",
      "date": "May 1-3, 2025",
      "time": "5:30 PM Daily",
      "location": "Church Auditorium"
    },
    {
      "week": "1ST WEEK",
      "title": "Monthly Thanksgiving/Power Service",
      "theme": "Prevailing Over Destiny Waster. John 10:10",
      "date": "May 4, 2025",
      "time": "8:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Women’s Conference",
      "theme": "The Home Builders. Prov 14:1",
      "date": "May 10, 2025",
      "time": "9:00 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Mother's Day",
      "theme": "Mothers As Home Builders. Proverbs 14:1; 31:10-31",
      "date": "May 11, 2025",
      "time": "9:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Single & Useful Fellowship",
      "theme": "",
      "date": "May 11, 2025",
      "time": "12:00 PM",
      "location": "Church Auditorium"
    },
    {
      "week": "3RD WEEK",
      "title": "Intercessory Night",
      "theme": "",
      "date": "May 16, 2025",
      "time": "5:30 PM",
      "location": "Church Auditorium"
    },
    {
      "week": "3RD WEEK",
      "title": "Evangel Baptist Association in Session",
      "theme": "",
      "date": "May 17, 2025",
      "time": "9:00 AM",
      "location": "Good Tiding Baptist Church, Lawanson"
    },
    {
      "week": "4TH WEEK",
      "title": "Radiant Couples Fellowship",
      "theme": "Recalibrate Romance",
      "date": "May 24, 2025",
      "time": "10:00 AM",
      "location": "Church Auditorium (Guest: Revd. Dr. Samson & Dr. Margaret Adedokun)"
    },
    {
      "week": "4TH WEEK",
      "title": "Children’s Day Service",
      "theme": "",
      "date": "May 25, 2025",
      "time": "9:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "5TH WEEK",
      "title": "Faith of Our Fathers",
      "theme": "Church Response to Contemporary Family Challenges",
      "date": "May 29-30, 2025",
      "time": "9:00 AM",
      "location": "New Heritage Baptist Church, Shomolu"
    }
  ]
  
  
  return (
    <Box py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        May
      </Text>

      {/* Activities Grid */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        px={10}
      >
        {activities.map((activity, index) => (
          <Box
            key={index}
            p={6}
            borderWidth="1px"
            borderRadius="md"
            borderColor="gray.200"
            position="relative"
            overflow="hidden"
            transition="transform 0.3s ease"
            _hover={{ 
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            {/* Background Gradient Effect */}
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="#A8518A" // Background color
              transform="translateY(100%)" // Start from below
              transition="transform 0.5s ease" // Smooth transition
              _hover={{ transform: "translateY(0)" }} // Move to fill on hover
              zIndex={0}
            />
            <Flex direction="column" zIndex={1} position="relative">
              <Text
                fontWeight="bold"
                color={
                  index === 0
                    ? "green.500"
                    : index === 1
                    ? "blue.500"
                    : index === 2
                    ? "pink.500"
                    : "red.500"
                }
                mb={2}
              >
                {activity.week}
              </Text>
              <Text fontSize="lg" fontWeight="semibold" mb={2}>
                {activity.title}
              </Text>
              <Text fontSize="md" color="gray.500" mb={4}>
                {activity.date}
              </Text>
              <Flex align="center" justify="center" color="red.500">
                <i
                  className="fa fa-map-marker"
                  aria-hidden="true"
                  style={{ marginRight: "8px" }}
                ></i>
                <Text>{activity.location}</Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Upcoming;
