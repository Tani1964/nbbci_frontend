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
    title: "Monthly Thanksgiving Service",
    theme: "Grateful Hearts to Appreciate God’s Faithfulness",
    date: "Sunday, March 1, 2026",
    time: "10:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Help From the Lord – Revival Meetings",
    theme: "Let My Gate Be Opened (Psalm 121)",
    date: "March 1–3, 2026",
    time: "5:30 PM Daily",
    location: "Church Auditorium"
  },
  {
    week: "1ST WEEK",
    title: "Discipleship Classes",
    theme: "Growing Deep in Christ and Building Strong Foundations",
    date: "Saturday, March 7 & Sunday, March 8, 2026",
    time: "Sat: 8:00 AM | Sun: 10:00 AM",
    location: "Designated Classes"
  },
  {
    week: "1ST WEEK",
    title: "Sunday School Preparatory Sessions",
    theme: "Preparing Teachers for Effective Teaching",
    date: "March 7 & March 21, 2026",
    time: "8:00 AM",
    location: "Sunday School Classes"
  },
  {
    week: "2ND WEEK",
    title: "Singles’ Fellowship",
    theme: "Setting Healthy Boundaries in Relationship",
    date: "Sunday, March 8, 2026",
    time: "12:00 Noon",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Church Council Meeting",
    theme: "Strategic Leadership for Planning and Direction",
    date: "Tuesday, March 10, 2026",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "2ND WEEK",
    title: "Global Leadership Summit",
    theme: "Lead Where You Are",
    date: "Saturday, March 14, 2026",
    time: "9:00 AM",
    location: "Church Auditorium"
  },
  {
    week: "3RD WEEK",
    title: "Prayer Summit",
    theme: "The Heart That Prays (Matthew 26:38)",
    date: "March 15–17, 2026",
    time: "Sun: 9:30 AM | Mon–Tue: 5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "3RD WEEK",
    title: "Interactive Family Hub (IFH)",
    theme: "Gambling & Betting: Restoring Discipline and Christian Character",
    date: "Wednesday, March 18, 2026",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "3RD WEEK",
    title: "Intercessory Night",
    theme: "Pray for One Another (James 5:16)",
    date: "Friday, March 20, 2026",
    time: "5:30 PM",
    location: "Church Auditorium"
  },
  {
    week: "4TH WEEK",
    title: "Radiant Couples Fellowship",
    theme: "Dysfunctional Family: Understanding Domestic Violence",
    date: "Saturday, March 28, 2026",
    time: "10:00 AM",
    location: "Church Auditorium"
  },
  {
    week: "4TH WEEK",
    title: "Palm Sunday Service",
    theme: "Triumphal Entry – The Call to All-round Usefulness",
    date: "Sunday, March 29, 2026",
    time: "9:30 AM",
    location: "Church Auditorium"
  },
  {
    week: "5TH WEEK",
    title: "Believers’ Congress 2026",
    theme: "Growing in Grace",
    date: "April 10–12, 2026",
    time: "To Be Announced",
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
