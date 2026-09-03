import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Upcoming = () => {
const activities = [
  {
    week: "WEEKLY",
    title: "Pre-Worship Encounter",
    theme: "Begin each Sunday by seeking God together in prayer and expectation.",
    date: "Every Sunday, September 2026",
    time: "8:00 AM - 8:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Sunday School",
    theme: "Grow deeper in God's Word through interactive Bible study.",
    date: "Every Sunday, September 2026",
    time: "8:30 AM - 9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Worship Service",
    theme: "Join us for heartfelt worship, the Word, and fellowship.",
    date: "Every Sunday, September 2026",
    time: "9:30 AM - 11:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Dew of Hermon - Early Morning Prayer",
    theme: "Start your week in God's presence and power.",
    date: "Every Monday, September 2026",
    time: "6:00 AM - 6:30 AM",
    location: "Virtual (join.freeconferencecall.com/newbbci)",
  },

  {
    week: "WEEKLY",
    title: "Business Men & Women Fellowship - Prayer Session",
    theme: "Commit your work and business unto the Lord in prayer.",
    date: "Every Tuesday, September 2026",
    time: "5:00 AM - 6:00 AM",
    location: "Virtual (join.freeconferencecall.com/newbbci)",
  },

  {
    week: "WEEKLY",
    title: "Midweek Service",
    theme: "Be refreshed and strengthened through worship and the Word.",
    date: "Every Wednesday, September 2026",
    time: "5:30 PM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Choir Rehearsal",
    theme: "Lifting lives through music and excellence in worship.",
    date: "Every Saturday, September 2026",
    time: "12:00 Noon",
    location: "Church Auditorium",
  },

  {
    week: "1ST WEEK",
    title: "Family Week",
    theme: "Christian Family Growing Together in Christ (Hebrews 10:23-25). Guest Minister: Rev. Mike Babatunde.",
    date: "August 30 - September 2, 2026",
    time: "As Scheduled",
    location: "Church Auditorium",
  },

  {
    week: "1ST WEEK",
    title: "Let My Gate Be Opened",
    theme: "Abiding for Fruitfulness (John 15:4).",
    date: "Thursday, September 3, 2026",
    time: "5:30 PM",
    location: "Virtual",
  },

  {
    week: "1ST WEEK",
    title: "Monthly Thanksgiving Service",
    theme: "Celebrate God's faithfulness with grateful hearts.",
    date: "Sunday, September 6, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "1ST & 3RD WEEK",
    title: "Discipleship Class",
    theme: "Be equipped for effective Christian living and service.",
    date: "September 6 & 20, 2026",
    time: "8:00 AM",
    location: "Designated Classes",
  },

  {
    week: "1ST & 3RD WEEK",
    title: "Sunday School Preparatory Class",
    theme: "Deepen your understanding of God's Word and its application.",
    date: "September 6 & 20, 2026",
    time: "10:00 AM",
    location: "Sunday School Classes",
  },

  {
    week: "2ND WEEK",
    title: "Church Council Meeting",
    theme: "A strategic meeting for prayer, planning, and kingdom advancement.",
    date: "Tuesday, September 8, 2026",
    time: "5:30 PM",
    location: "Church Auditorium",
  },

  {
    week: "2ND WEEK",
    title: "Single and Useful",
    theme: "Topic: Love that lasts (1 Corinthians 13).",
    date: "Sunday, September 13, 2026",
    time: "12:00 Noon",
    location: "Church Auditorium",
  },

  {
    week: "2ND WEEK",
    title: "G.A. Week",
    theme: "Topic: To Be Announced.",
    date: "Sunday, September 13, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "2ND & 4TH WEEK",
    title: "Home Fellowship",
    theme: "Experience warmth, prayer, and growth in small-group fellowship.",
    date: "September 13 & 27, 2026",
    time: "5:30 PM",
    location: "Various Centres",
  },

  {
    week: "3RD WEEK",
    title: "Intercessory Night",
    theme: "Special Intercessory Night for Homes. Topic: Heal Our Homes (Song of Solomon 2:15).",
    date: "Friday, September 18, 2026",
    time: "5:30 PM",
    location: "Virtual",
  },
];
  return (
    <Box className="mt-12 md:mt-64" py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        September 2026 Programme
      </Text>

      {/* Activities Grid */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
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
};

export default Upcoming;
