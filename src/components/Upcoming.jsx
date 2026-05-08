import { Box, Flex, Grid, Text } from "@chakra-ui/react";

const Upcoming = () => {
  const activities = [
    {
      week: "1ST WEEK",
      title: "Youth Network Special Programme",
      theme: "God, Family, Work and You",
      date: "Friday, May 1, 2026",
      time: "3:30 PM",
      location: "Church Auditorium",
    },

    {
      week: "1ST WEEK",
      title: "Let My Gate Be Opened",
      theme: "Thus Says The Lord (Isaiah 54:1–3)",
      date: "May 1–3, 2026",
      time: "Fri 5:30 PM | Sat 12 Noon | Sun 5:30 PM",
      location: "Church Auditorium",
    },

    {
      week: "1ST WEEK",
      title: "Special Pre-Worship Service",
      theme: "Divine Power for Exponential Growth",
      date: "Sunday, May 3, 2026",
      time: "7:45 AM – 8:30 AM",
      location: "Church Auditorium",
    },

    {
      week: "1ST WEEK",
      title: "Monthly Thanksgiving Sunday",
      theme: "Rejoicing in Christ Always (Philippians 3:1–10)",
      date: "Sunday, May 3, 2026",
      time: "9:30 AM",
      location: "Church Auditorium",
    },

    {
      week: "1ST WEEK",
      title: "Discipleship Class",
      theme: "Spiritual Growth and Christian Living",
      date: "May 3 & 17, 2026",
      time: "8:00 AM & 10:00 AM",
      location: "Designated Classes",
    },

    {
      week: "1ST WEEK",
      title: "Sunday School Sessions",
      theme: "Practical Christian Living and Bible Teaching",
      date: "May 3 & 17, 2026",
      time: "8:00 AM & 10:00 AM",
      location: "Sunday School Classes",
    },

    {
      week: "2ND WEEK",
      title: "WOWEN Conference",
      theme: "Real Mother, Real Model (1 Samuel 25:18–31)",
      date: "Saturday, May 9, 2026",
      time: "9:00 AM",
      location: "Church Auditorium",
    },

    {
      week: "2ND WEEK",
      title: "Mother’s Day Service",
      theme: "My Mother, My Model",
      date: "Sunday, May 10, 2026",
      time: "9:30 AM",
      location: "Church Auditorium",
    },

    {
      week: "2ND WEEK",
      title: "Home Fellowship",
      theme: "Building Community Through Fellowship",
      date: "Sunday, May 10, 2026",
      time: "5:30 PM",
      location: "Various Centres",
    },

    {
      week: "3RD WEEK",
      title: "Church Council Meeting",
      theme: "Leadership and Church Advancement",
      date: "Tuesday, May 12, 2026",
      time: "5:30 PM",
      location: "Virtual",
    },

    {
      week: "3RD WEEK",
      title: "Intercessory Night",
      theme: "Let There be Peace in Nigeria (Jeremiah 29:7)",
      date: "Friday, May 15, 2026",
      time: "5:30 PM",
      location: "Church Auditorium",
    },

    {
      week: "3RD WEEK",
      title: "Discipleship Class",
      theme: "Spiritual Growth and Christian Living",
      date: "Sunday, May 17, 2026",
      time: "8:00 AM & 10:00 AM",
      location: "Designated Classes",
    },

    {
      week: "3RD WEEK",
      title: "Sunday School Sessions",
      theme: "Practical Christian Living and Bible Teaching",
      date: "Sunday, May 17, 2026",
      time: "8:00 AM & 10:00 AM",
      location: "Sunday School Classes",
    },

    {
      week: "4TH WEEK",
      title: "Radiant Couples Fellowship",
      theme: "The Unequally Yoked Dilemma (2 Corinthians 6:14)",
      date: "Saturday, May 23, 2026",
      time: "10:00 AM",
      location: "Church Auditorium",
    },

    {
      week: "4TH WEEK",
      title: "Home Fellowship",
      theme: "Building Community Through Fellowship",
      date: "Sunday, May 24, 2026",
      time: "5:30 PM",
      location: "Various Centres",
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
