import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Two from "../assets/456603820_923813556439354_7572768511064555920_n.png";
import One from "../assets/456607803_923813013106075_8066032512367024936_n (1).png";
import Three from "../assets/gaadi.jpg";

function Deaconate() {
  const members = [
    {
      name: "DEACONNESS ADEBISI ATINUKE IFEGBESAN",
      title: "Deaconess",
      description:
        "Dns. Ifegbesan joined New Birth Baptist Church in 2006, where she served in various roles.Currently, She serves as a dedicated Deacon, overseeing the Welfare & Service group. This encompasses various MDCs, including medical, visitation, security, empowerment, welfare, building, utility, sanctuary keeper, beautification and community impact. Dns. Adebisi Ifegbesan is blessed with a loving family. She is married to Bro. Opeoluwa Ifegbesan, and together they have two beautiful children.",
      imageUrl: Two, // Replace with actual image paths
    },
    {
      name: "DEACONNESS MARIA DOOM GAADI",
      title: "Deaconess",
      description:
        "Dns. Gaadi joined New Birth Baptist Church in 2007 and served as Church Secretary, Personnel Committee Chairperson, Teens Ministry Coordinator, Visitation/Follow-Up Coordinator, Discipleship Coordinator, Sunday School Teacher/Secretary, and Prayer Ministry Member.Currently, she coordinates the Fellowship and Education Ministry of New Birth Baptist Church, overseeing the following MDCs: Teens Fellowship, Children's Church, Youth Fellowship, Couples Fellowship, Singles Fellowship, Home Fellowship, Baptismal Class, Discipleship Ministry and Sunday School Department.  Dns. Maria Gaadi is blessed with a loving family. She is married to Bro. Solomon Gaadi, and together they have six beautiful children.",
      imageUrl: Three, // Use a placeholder for now
    },
    {
      name: "DEACON ROTIMI ADEBOWALE ADEOYE",
      title: "Deacon",
      description:
        "Dn. Adeoye joined New Birth Baptist Church, Ikorodu in 2014 and has since served in various capacities.In the past, he chaired the Community Impact Committee, led the ad-hoc committee for the Community Hymn Singing program. He has also been actively involved in Sunday School and planned the Church's Annual Thanksgiving Celebrations. In terms of Leadership Roles, Dn. Adeoye has served as Home Fellowship Leader, Coordinator and Director, Nominating Committee Chairman and currently as Personnel Chairman. Currently, as a deacon he oversees the Worship Ministry, which comprises various departments including Media, Drama, Music, Ushering and Protocol, Praise Team, Prayer and Deliverance, and Counselling and Follow-up Ministries. Dn. Rotimi Adeoye is blessed with a loving family. He is married to Sis. Yemisi Adeoye, and together they have three beautiful children.",
      imageUrl: One, // Replace with actual image paths
    },
  ];

  return (
    <Box py={10} px={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={8}>
        Members of the Deaconates
      </Text>

      <VStack spacing={8} align="stretch">
        {members.map((member, index) => (
          <Flex
            key={index}
            borderWidth="1px"
            borderRadius="md"
            p={6}
            boxShadow="sm"
            direction={{ base: "column", md: "row" }}
          >
            <Box flexShrink={0} mb={{ base: 4, md: 0 }} mr={{ md: 6 }}>
              <Image
                borderRadius="md"
                width="200px"
                height="200px"
                objectFit="cover"
                src={member.imageUrl}
                alt={member.name}
                fallbackSrc="https://via.placeholder.com/200" // Placeholder image if not loaded
              />
            </Box>
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                {member.name}
              </Text>
              <Text color="#A8518A" fontSize="lg" fontWeight="semibold">
                {member.title}
              </Text>
              <Text mt={4} fontSize="md" color="gray.600">
                {member.description}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
}

export default Deaconate;
