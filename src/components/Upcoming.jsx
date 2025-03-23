import {
  Box,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

const Upcoming = () => {
  const activities = [
    {
      "week": "LAST WEEK OF MARCH",
      "title": "Home Fellowship Meetings",
      "theme": "Fellowship & Growth",
      "date": "March 23, 2025",
      "time": "Various Times",
      "location": "All Fellowship Centres"
    },
    {
      "week": "LAST WEEK OF MARCH",
      "title": "Induction Service",
      "theme": "Welcoming New Members",
      "date": "March 30, 2025",
      "time": "During Service",
      "location": "Church Auditorium"
    },
    {
      "week": "LAST WEEK OF MARCH",
      "title": "Family Meeting",
      "theme": "Church Administration",
      "date": "March 30, 2025",
      "time": "After Service",
      "location": "Church Auditorium"
    },
    {
      "week": "1ST WEEK",
      "title": "Let My Gate Be Opened",
      "theme": "Divine Escape. Psalm 91:3-4",
      "date": "April 1-3, 2025",
      "time": "5:30 PM Daily",
      "location": "Church Auditorium"
    },
    {
      "week": "1ST WEEK",
      "title": "Pastor’s Convocation Ceremony",
      "theme": "Celebration & Ordination",
      "date": "April 4, 2025",
      "time": "TBA",
      "location": "Crowther Graduate Theological Seminary, Igbein, Abeokuta"
    },
    {
      "week": "1ST WEEK",
      "title": "Communion Service",
      "theme": "Breaking of Bread",
      "date": "April 6, 2025",
      "time": "9:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "2025 Believers’ Congress",
      "theme": "Alive in Christ",
      "date": "April 11-12, 2025",
      "time": "Friday – 5:00 PM | Saturday – 8:00 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Baptismal Service",
      "theme": "Faith & Commitment",
      "date": "April 13, 2025",
      "time": "7:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Singles and Useful Fellowship",
      "theme": "Growth & Connection",
      "date": "April 13, 2025",
      "time": "After Service",
      "location": "Church Auditorium"
    },
    {
      "week": "2ND WEEK",
      "title": "Palm Sunday Celebration",
      "theme": "Triumphant Entry",
      "date": "April 13, 2025",
      "time": "9:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "3RD WEEK",
      "title": "Good Friday Service",
      "theme": "Christ’s Sacrifice",
      "date": "April 18, 2025",
      "time": "8:30 AM",
      "location": "Church Auditorium"
    },
    {
      "week": "3RD WEEK",
      "title": "Easter Sunday Celebration",
      "theme": "The Resurrection Power",
      "date": "April 20, 2025",
      "time": "During Service",
      "location": "Church Auditorium"
    },
    {
      "week": "3RD WEEK",
      "title": "Easter Monday Picnic",
      "theme": "Fellowship & Fun",
      "date": "April 21, 2025",
      "time": "TBA",
      "location": "Organized by Home Fellowship"
    },
    {
      "week": "4TH WEEK",
      "title": "Victory Night – Bi-Monthly Vigil",
      "theme": "Almighty God – Exodus 6:6",
      "date": "April 25, 2025",
      "time": "11:00 PM",
      "location": "Church Auditorium"
    },
    {
      "week": "4TH WEEK",
      "title": "2025 NBC In Session",
      "theme": "Entering Into Newness Through Fasting and Praying",
      "date": "April 26 - May 1, 2025",
      "time": "TBA",
      "location": "Baptist International Convention Center, Lafuape"
    },
    {
      "week": "4TH WEEK",
      "title": "NBC Convention Sunday",
      "theme": "Pulpit Exchange",
      "date": "April 27, 2025",
      "time": "During Service",
      "location": "All NBC Churches"
    }
  ]
  
  return (
    <Box py={10} textAlign="center">
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
