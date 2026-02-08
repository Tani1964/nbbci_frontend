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
    title: "2026 Sunday School Annual Bible Study",
    theme: "Character Study – Daniel 1–6",
    date: "Every Sunday in January 2026",
    time: "8:30 AM – 9:25 AM",
    location: "Sunday School Classes"
  },
  {
    week: "1ST WEEK",
    title: "Peniel 2026: 21 Days of Fasting & Prayer",
    theme: "Next Level",
    date: "January 5–24, 2026",
    time: "Mon–Fri & Sun: 5:30 PM | Sat: 12:00 Noon",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "NBBC Workers’ Retreat",
    theme: "Transformational Worker – An Agent of Exponential Church Growth",
    date: "Saturday, January 10, 2026",
    time: "8:00 AM prompt",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Lagos East Baptist Conference Workers’ Retreat",
    theme: "Transformational Leaders – Becoming a Generous and Faithful Steward",
    date: "January 2026",
    time: "9:00 AM",
    location: "FBC Ikorodu"
  },
  {
    week: "3RD WEEK",
    title: "Deacons’ Appreciation & Ordination Service",
    theme: "Honouring Faithful Service and Ordination of New Deacons",
    date: "January 18, 2026",
    time: "9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "4TH WEEK",
    title: "MMU & WMU Emphasis Sunday",
    theme: "Restoring the Broken Walls Through the Fruit and Gifts of the Holy Spirit",
    date: "January 25, 2026",
    time: "9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "4TH WEEK",
    title: "Church Council Meeting",
    theme: "Review, Direction, and Strategic Church Leadership",
    date: "January 27, 2026",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "5TH WEEK",
    title: "Radiant Couples Fellowship – Breakfast Fellowship",
    theme: "Strengthening Marriages Through Fellowship and Connection",
    date: "January 31, 2026",
    time: "To Be Announced",
    location: "To Be Announced"
  }
];


  
  return (
    <Box className="mt-12 md:mt-64" py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        Febuary
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
            borderColor="border.subtle"
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
              <Text fontSize="md" color="text.muted" mb={4}>
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
