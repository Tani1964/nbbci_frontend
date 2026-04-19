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
    theme: "Double Victory (Exodus 14:13-14)",
    date: "April 1–3, 2026",
    time: "5:30 PM Daily",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Good Friday Service",
    theme: "Proclaiming The Lord’s Death",
    date: "Friday, April 3, 2026",
    time: "8:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Pathfinder 2026",
    theme: "The Supernatural Student",
    date: "Saturday, April 4, 2026",
    time: "9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Discipleship Classes",
    theme: "Spiritual Growth and Maturity",
    date: "April 4 & 18, 2026",
    time: "8:00 AM & 10:00 AM",
    location: "Designated Classes"
  },
  {
    week: "1ST WEEK",
    title: "Sunday School Sessions",
    theme: "Deepening Biblical Understanding",
    date: "April 4 & 18, 2026",
    time: "10:00 AM & 8:00 AM",
    location: "Sunday School Classes"
  },
  {
    week: "1ST WEEK",
    title: "Thanksgiving & Easter Sunday",
    theme: "The Power of Resurrection",
    date: "Sunday, April 5, 2026",
    time: "9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Easter Cantata",
    theme: "Hosanna (Matthew 21:9)",
    date: "Sunday, April 5, 2026",
    time: "5:00 PM",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Believers’ Congress",
    theme: "Growing in Grace (2 Peter 3:18)",
    date: "April 10–12, 2026",
    time: "Fri: 5 PM | Sat: 8:30 AM | Sun: 9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Home Fellowship",
    theme: "Building Faith and Fellowship",
    date: "Saturday, April 11, 2026",
    time: "5:30 PM",
    location: "Various Centres"
  },
  {
    week: "3RD WEEK",
    title: "Church Council Meeting",
    theme: "Strategic Leadership and Direction",
    date: "Tuesday, April 14, 2026",
    time: "5:30 PM",
    location: "Virtual"
  },
  {
    week: "3RD WEEK",
    title: "Discipleship Classes",
    theme: "Spiritual Growth and Maturity",
    date: "Saturday, April 18, 2026",
    time: "8:00 AM & 10:00 AM",
    location: "Designated Classes"
  },
  {
    week: "3RD WEEK",
    title: "Sunday School Sessions",
    theme: "Deepening Biblical Understanding",
    date: "Saturday, April 18, 2026",
    time: "10:00 AM & 8:00 AM",
    location: "Sunday School Classes"
  },
  {
    week: "3RD WEEK",
    title: "NBC in Session",
    theme: "Vision Alignment and Leadership Direction",
    date: "April 18–23, 2026",
    time: "As Scheduled",
    location: "Abuja"
  },
  {
    week: "4TH WEEK",
    title: "General Evangelism",
    theme: "Spreading the Gospel",
    date: "Sunday, April 19, 2026",
    time: "9:30 AM",
    location: "Outreach Centres"
  },
  {
    week: "4TH WEEK",
    title: "Home Fellowship",
    theme: "Building Faith and Fellowship",
    date: "Saturday, April 25, 2026",
    time: "5:30 PM",
    location: "Various Centres"
  },
  {
    week: "4TH WEEK",
    title: "Victory Night",
    theme: "Contending Against The Wicked Sower (Matthew 13:24-30)",
    date: "Friday, April 24, 2026",
    time: "11:00 PM",
    location: "Church Auditorium"
  },
  {
    week: "5TH WEEK",
    title: "Family Meeting",
    theme: "Strengthening Family Bonds and Values",
    date: "Sunday, April 26, 2026",
    time: "9:30 AM",
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
        March
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
