import {
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

const Upcoming = () => {
const activities = [
  {
    week: "1ST WEEK",
    title: "Let My Gate Be Opened",
    theme: "God's Favour. Exodus 3:21",
    date: "December 1-3, 2025",
    time: "5:30 PM Daily",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "2025 Minister's Leadership Retreat",
    theme: "Times of Refreshing from the Presence of God. Acts 3:19",
    date: "December 3-6, 2025",
    time: "Various",
    location: "Christian Retreat Center, Ago Iwoye, Agric-Isawo Road, Ikorodu"
  },
  {
    week: "2ND WEEK",
    title: "Unveil 2026",
    theme: "Go Up and Possess the Land. Deuteronomy 1:21",
    date: "December 7-13, 2025",
    time: "5:30 PM (Mon-Fri), 12:00 PM (Sat)",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Family Meeting",
    theme: "Last Church-in-Conference for 2025",
    date: "December 14, 2025",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "3RD WEEK",
    title: "Church Council Meeting",
    theme: "Leadership Alignment with God's Vision",
    date: "December 18, 2025",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "3RD WEEK",
    title: "Christmas Carol Service",
    theme: "Celebrating the Birth of Our Saviour",
    date: "December 21, 2025",
    time: "4:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "4TH WEEK",
    title: "Christmas Service",
    theme: "His Coming is Our Hope and Victory",
    date: "December 25, 2025",
    time: "8:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "5TH WEEK",
    title: "Cross-Over Service",
    theme: "Crossing Over: Dispossess the Giant Nations",
    date: "December 31, 2025",
    time: "9:00 PM",
    location: "Church Auditorium"
  }
];

  
  return (
    <Box className="mt-12 md:mt-64" py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        December
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
