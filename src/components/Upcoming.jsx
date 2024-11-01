import {
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

const Upcoming = () => {
  const activities = [
    {
      week: "1st WEEK",
      title: "Let My Gate Be Opened",
      theme: "Continuous Praise. Psalm 34:1",
      date: "1-3 November 2024",
      time: "5:30 pm daily",
      location: "Church Auditorium",
    },
    {
      week: "1st WEEK",
      title: "Church Building Dedication & Annual Thanksgiving",
      theme: "Testimonies of God’s Wonders. Psalm 126:3",
      date: "3 November 2024",
      time: "9:00 am",
      location: "Church Auditorium",
    },
    {
      week: "2nd WEEK",
      title: "Alone With God",
      theme: "",
      date: "9 November 2024",
      time: "10:00 am",
      location: "Church Auditorium",
    },
    {
      week: "2nd WEEK",
      title: "Singles & Useful Fellowship",
      theme: "Contact Peace",
      date: "10 November 2024",
      time: "12:00 noon",
      location: "Church Auditorium",
    },
    {
      week: "3rd WEEK",
      title: "Intercessory Night",
      theme: "Night Of Recovery. Gen 14:16",
      date: "15 November 2024",
      time: "5:30 pm",
      location: "Church Auditorium",
    },
    {
      week: "3rd WEEK",
      title: "Evangel Bi-Annual Session",
      theme: "@ First Baptist Church Aguda",
      date: "16 November 2024",
      time: "9:00 am",
      location: "First Baptist Church, Aguda",
    },
    {
      week: "3rd WEEK",
      title: "MMU & WMU Meeting",
      theme: "",
      date: "17 November 2024",
      time: "12:00 noon",
      location: "Church Auditorium",
    },
    {
      week: "4th WEEK",
      title: "Radiant Couple",
      theme: "Contact the Coordinator",
      date: "23 November 2024",
      time: "12:00 noon",
      location: "Church Auditorium",
    },
    {
      week: "4th WEEK",
      title: "Group Evangelism",
      theme: "",
      date: "24 November 2024",
      time: "8:30 am",
      location: "Church Auditorium",
    },
    {
      week: "5th WEEK",
      title: "Community Evangelism",
      theme: "",
      date: "29-30 November 2024",
      time: "5:30 am / 8:00 am",
      location: "Various Locations",
    },
  ];
  
  return (
    <Box py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        November
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
