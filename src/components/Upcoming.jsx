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
        title: "Family Thanksgiving",
        date: "03 AUGUST 2024",
        location: "Church Auditorium",
      },
      {
        week: "2nd WEEK",
        title: "Family Week",
        date: "10 AUGUST 2024",
        location: "Church Auditorium",
      },
      {
        week: "3rd WEEK",
        title: "Christmas Eve",
        date: "17 AUGUST 2024",
        location: "Church Auditorium",
      },
      {
        week: "4th WEEK",
        title: "Crossover Service",
        date: "24 AUGUST 2024",
        location: "Church Auditorium",
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
            _hover={{ boxShadow: "lg" }}
          >
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
          </Box>
        ))}
      </Grid>
    </Box>
)
}

export default Upcoming;
