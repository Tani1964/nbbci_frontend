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
        `Dns. Adebisi Ifegbesan gave her life to Christ in April 1988 at Adelabu Street Baptist Church, Adeniran Ogunsanya (now Good News Baptist Church) at Olufemi Street, Surulere. She went through water baptism by immersion and engaged in various church training programs such as Follow the Master, Master Life, Serve the Master, Experiencing God, In God's Presence, and other developmental programs. Dns. Ifegbesan actively participated in multiple church activities, serving as an usher, teacher in Sunday School, baptismal class teacher, member of the Evangelism Committee, and part of the Prayer Group.\n\t

On December 4th, 1999, she married Bro. Opeoluwa Ifegbesan, and their union has been blessed with two children, Tanitoluwani and Tioluwani. In 2006, her family relocated to Ikorodu, where the Lord guided them to New Birth Baptist Church. There, Dns. Ifegbesan continued her dedicated service, contributing as an usher, Sunday School teacher, part of the Protocol and Security team, Prayer Group member, Teenagers' Coordinator, and baptismal class teacher.

Currently, she serves as a dedicated Deacon at New Birth Baptist Church, overseeing the Welfare & Service group, which includes diverse ministries such as medical, visitation, security, empowerment, welfare, building, utility, sanctuary keeping, beautification, and community impact initiatives.

Her commitment is marked by her participation in Class 101, 201, and 301 to glorify God. Her favorite Bible verse is Philippians 1:6 (NKJV): “Being confident of this very thing, that He who has begun a good work in you will complete it until the day of Jesus Christ.”

Dns. Adebisi Ifegbesan often reflects on her life journey by saying she remains a work in progress. She is blessed with a loving and supportive family and continues to serve her church and community with dedication and grace.`,
      imageUrl: Two, // Replace with actual image paths
    },
    {
      name: "DEACONNESS MARIA DOOM GAADI",
      title: "Deaconess",
      description:
        `Dns. Gaadi gave her life to Christ in 1976 as a teenager at an open-air crusade in Kaduna and was baptized by immersion in 1977 in ECWA Church, also in Kaduna. She served as the coordinator of Air Force Secondary School Ikeja Staff and Students Fellowship.

She joined New Estate Baptist Church, Surulere, in 1988 and served in various capacities, including Home Fellowship Leader, Odogbolu Home Fellowship Leader, Sunday School Teacher, member of the Socials Committee, and Teens Ministry Coordinator.

As a pioneer member of New Birth Baptist Church, she has held significant positions such as Church Secretary, Personnel Committee Chairperson, Assistant Teens Ministry Coordinator, Visitation/Follow-Up Coordinator, Discipleship Coordinator, and more. She was also a board member of Baptist Model High School Agbowa from 2008 to 2012 and is currently a board member of Baptist Mission Schools.

Dns. Gaadi joined New Birth Baptist Church in 2007 and served as Church Secretary, Personnel Committee Chairperson, Teens Ministry Coordinator, Visitation/Follow-Up Coordinator, Discipleship Coordinator, Sunday School Teacher/Secretary, and Prayer Ministry Member.

Currently, she coordinates the Fellowship and Education Ministry of New Birth Baptist Church, overseeing the following MDCs: Teens Fellowship, Children's Church, Youth Fellowship, Couples Fellowship, Singles Fellowship, Home Fellowship, Baptismal Class, Discipleship Ministry, and Sunday School Department.

Dns. Maria Gaadi is blessed with a loving family. She is married to Bro. Solomon Gaadi, and together they have six beautiful children.`,
      imageUrl: Three, // Use a placeholder for now
    },
    {
      name: "DEACON ROTIMI ADEBOWALE ADEOYE",
      title: "Deacon",
      description:
      `Dn. Rotimi Adeoye joined New Birth Baptist Church, Ikorodu, in 2014, bringing a deep commitment to faith and service. His journey began in 1989 when he became born again, and he was baptized in 1993 at New Estate Baptist Church. Over the years, he has been an active leader, serving as the pioneer treasurer of New Port Baptist Church, Apapa, before moving to Ikorodu.

At New Birth, Dn. Adeoye has led and contributed to various ministries. He chaired the Community Impact Committee, organized the Community Hymn Singing program, and served as Chairman of the Annual Thanksgiving Committee in 2017 and 2018. In addition, he played key roles in the Home Fellowship Ministry, rising from Fellowship Leader to Director, and served as Chairman of the Nominating Committee in 2019.

Currently, as Personnel Chairman and a Deacon, he oversees the Worship Ministry, which includes Media, Drama, Music, Ushering, Praise Team, Prayer and Deliverance, and Counselling Ministries, helping create an environment of worship and spiritual growth.

Dn. Adeoye is supported by his loving wife, Sis. Yemisi Adeoye, and their three children. Together, they continue to serve and inspire others within the church community.`,
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
