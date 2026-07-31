import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Upcoming = () => {
const activities = [
  {
    week: "WEEKLY",
    title: "Pre-Worship Encounter",
    theme: "Begin each Sunday by seeking God together in prayer and expectation.",
    date: "Every Sunday, August 2026",
    time: "8:00 AM - 8:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Sunday School",
    theme: "Grow deeper in God's Word through interactive Bible study.",
    date: "Every Sunday, August 2026",
    time: "8:30 AM - 9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Worship Service",
    theme: "Join us for heartfelt worship, the Word, and fellowship.",
    date: "Every Sunday, August 2026",
    time: "9:30 AM - 11:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Dew of Hermon - Early Morning Prayer",
    theme: "Start your week in God's presence and power.",
    date: "Every Monday, August 2026",
    time: "6:00 AM - 6:30 AM",
    location: "Virtual (join.freeconferencecall.com/newbbci)",
  },

  {
    week: "WEEKLY",
    title: "Business Men & Women Fellowship - Prayer Session",
    theme: "Commit your work and business unto the Lord in prayer.",
    date: "Every Tuesday, August 2026",
    time: "5:00 AM - 6:00 AM",
    location: "Virtual (join.freeconferencecall.com/newbbci)",
  },

  {
    week: "WEEKLY",
    title: "Midweek Service",
    theme: "Be refreshed and strengthened through worship and the Word.",
    date: "Every Wednesday, August 2026",
    time: "5:30 PM",
    location: "Church Auditorium",
  },

  {
    week: "WEEKLY",
    title: "Choir Rehearsal",
    theme: "Lifting lives through music and excellence in worship.",
    date: "Every Saturday, August 2026",
    time: "12:00 Noon",
    location: "Church Auditorium",
  },

  {
    week: "1ST WEEK",
    title: "Let My Gate Be Opened",
    theme: "More Space (Isaiah 49:20) - Enter into God's divine enlargement.",
    date: "August 1-3, 2026",
    time: "Aug 1 (12 Noon), Aug 2 (Home Fellowships), Aug 3 (5:30 PM)",
    location: "Church Auditorium / Home Fellowships",
  },

  {
    week: "1ST WEEK",
    title: "Monthly Thanksgiving Service",
    theme: "Celebrate God's faithfulness with grateful hearts.",
    date: "Sunday, August 2, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "1ST & 3RD WEEK",
    title: "Discipleship Class",
    theme: "Be equipped for effective Christian living and service.",
    date: "August 1 & 15, 2026",
    time: "8:00 AM",
    location: "Designated Classes",
  },

  {
    week: "1ST & 3RD WEEK",
    title: "Sunday School Special Class",
    theme: "Deepen your understanding of God's Word and its application.",
    date: "August 1 & 15, 2026",
    time: "10:00 AM",
    location: "Sunday School Classes",
  },

  {
    week: "2ND WEEK",
    title: "Workers Breakfast Fellowship",
    theme: "Topic: That to Change For Change.",
    date: "Saturday, August 8, 2026",
    time: "8:00 AM",
    location: "Church Auditorium",
  },

  {
    week: "2ND WEEK",
    title: "RALYD Day (R.A. & Lydia Week)",
    theme: "The Keys of the Kingdom for Service Empowerment - Raising kingdom-minded servants.",
    date: "Sunday, August 9, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "2ND WEEK",
    title: "Single and Useful",
    theme: "Topic: To Be Announced.",
    date: "Sunday, August 9, 2026",
    time: "TBA",
    location: "Church Auditorium",
  },

  {
    week: "2ND & 4TH WEEK",
    title: "Home Fellowship",
    theme: "Experience warmth, prayer, and growth in small-group fellowship.",
    date: "August 9 & 23, 2026",
    time: "5:30 PM",
    location: "Various Centres",
  },

  {
    week: "3RD WEEK",
    title: "Church Council Meeting",
    theme: "A strategic meeting for prayer, planning, and kingdom advancement.",
    date: "Tuesday, August 11, 2026",
    time: "5:30 PM",
    location: "Church Auditorium",
  },

  {
    week: "3RD WEEK",
    title: "BSF Week",
    theme: "Harvesting the Nations (Matthew 9:35-38) - Embracing God's mission for the nations.",
    date: "Sunday, August 16, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "4TH WEEK",
    title: "Victory Night",
    theme: "More and More (1 Chronicles 11:9) - A night of prayer, worship, and divine increase.",
    date: "Friday, August 21, 2026",
    time: "11:00 PM",
    location: "Church Auditorium",
  },

  {
    week: "4TH WEEK",
    title: "Baptism",
    theme: "Celebrate God's transforming grace as believers publicly declare their faith in Christ.",
    date: "Sunday, August 23, 2026",
    time: "7:45 AM",
    location: "Church Auditorium",
  },

  {
    week: "4TH WEEK",
    title: "Induction of New Members",
    theme: "Join us as we warmly receive and commission our new members into fellowship and service.",
    date: "Sunday, August 23, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "5TH WEEK",
    title: "Family Week",
    theme: "Christian Family Growing Together in Christ (Hebrews 10:23-25). Guest Minister: Rev. Mike Babatunde.",
    date: "August 30 - September 2, 2026",
    time: "As Scheduled",
    location: "Church Auditorium",
  },
];
  return (
    <Box className="mt-12 md:mt-64" py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        August 2026 Programme
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
