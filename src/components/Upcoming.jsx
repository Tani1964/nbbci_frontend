import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Upcoming = () => {
 const activities = [
  {
    week: "1ST WEEK",
    title: "Let My Gate Be Opened",
    theme: "Perfect Opening (Revelation 3:20)",
    date: "June 1–3, 2026",
    time: "5:30 PM Daily",
    location: "Church Auditorium",
  },

  {
    week: "1ST WEEK",
    title: "Discipleship Class",
    theme: "Spiritual Growth and Christian Living",
    date: "Saturday, June 6, 2026",
    time: "8:00 AM",
    location: "Designated Classes",
  },

  {
    week: "1ST WEEK",
    title: "Sunday School Session",
    theme: "Practical Christian Living and Spiritual Development",
    date: "Saturday, June 6, 2026",
    time: "10:00 AM",
    location: "Sunday School Classes",
  },

  {
    week: "2ND WEEK",
    title: "Church Council Meeting",
    theme: "Leadership and Church Advancement",
    date: "Wednesday, June 10, 2026",
    time: "5:30 PM",
    location: "Virtual",
  },

  {
    week: "2ND WEEK",
    title: "Inter-Cultural Praise",
    theme: "Unconventional Praise (2 Samuel 6:14,16)",
    date: "Sunday, June 14, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "2ND WEEK",
    title: "Home Fellowship",
    theme: "Building Community Through Fellowship",
    date: "Sunday, June 14, 2026",
    time: "5:30 PM",
    location: "Various Centres",
  },

  {
    week: "3RD WEEK",
    title: "Monthly Thanksgiving Sunday",
    theme: "Celebrating God's Faithfulness and Testimonies",
    date: "Wednesday, June 17, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "3RD WEEK",
    title: "Men's Conference",
    theme: "Fathers As Kingdom Builders (Hebrews 34:4; 1 Corinthians 3:9–11)",
    date: "Saturday, June 20, 2026",
    time: "9:00 AM",
    location: "Church Auditorium",
  },

  {
    week: "3RD WEEK",
    title: "Father's Day Service",
    theme: "Fathers As Kingdom Builders",
    date: "Sunday, June 21, 2026",
    time: "9:30 AM",
    location: "Church Auditorium",
  },

  {
    week: "4TH WEEK",
    title: "Victory Night",
    theme: "Prayer, Worship and Divine Encounters",
    date: "Friday, June 26, 2026",
    time: "11:00 PM",
    location: "Church Auditorium",
  },

  {
    week: "4TH WEEK",
    title: "Home Fellowship",
    theme: "Building Community Through Fellowship",
    date: "Sunday, June 28, 2026",
    time: "5:30 PM",
    location: "Various Centres",
  },

  {
    week: "4TH WEEK",
    title: "New Birth on the Street",
    theme: "Medical Outreach & Street Crusade",
    date: "Sunday, June 28, 2026",
    time: "9:30 AM",
    location: "Ipara Community",
  },
];
  return (
    <Box className="mt-12 md:mt-64" py={10} textAlign="center">
      {/* Title Section */}
      <Text fontSize="3xl" fontWeight="bold">
        Upcoming Activities
      </Text>
      <Text fontSize="xl" color="#A8518A" mb={8}>
        March
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
