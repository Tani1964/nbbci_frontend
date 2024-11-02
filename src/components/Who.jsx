import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Cong from "../assets/417508389_810293604458017_6989036223118530371_n (1).png";

const Who = () => {
  return (
    <Box bgColor={"#F4F7FA"}>
      <Flex
        direction={{ base: "column", md: "row" }} // Vertical stacking on small screens, horizontal on medium+
        align="center"
        justify="center"
        p={{ base: 4, md: 8 }} // Adjust padding for smaller screens
      >
        <Image
          src={Cong}
          width={{ base: "100%", md: "50%" }} // Responsive width for image
          height={{ base: "40vh", md: "auto" }} // Maintain height ratio on smaller screens
          objectFit="cover" // Maintain aspect ratio
        />
        <Box
          p={{ base: 4, md: 8 }} // Responsive padding
          width={{ base: "100%", md: "50%" }} // Full width on small screens, half on medium+
          textAlign={{ base: "left", md: "left" }} // Center text on small screens, left-align on larger
        >
          <Heading mb={4} fontSize={{ base: "2xl", md: "4xl" }}>Who are we...</Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            New Birth Baptist Church (NBBC) Ikorodu is a Vibrant Community Committed to Raising Fruitful Disciples
            <br /><br />
            At New Birth Baptist Church (NBBC) Ikorodu, we are a enthusiastic, Spirit-filled community of believers passionately committed to making disciples for Christ. Our church slogan, "Raising Fruitful Disciples" (John 15:16), captures our unwavering focus and driving purpose - to nurture followers of Jesus who bear lasting spiritual fruit that glorifies God.
            <br /><br />
            Established decades ago in the heart of Ikorodu, NBBC has a rich history of ministry and impact in our local community and beyond. We are dedicated to fulfilling the Great Commission through our five key pillars: evangelism, worship, fellowship, discipleship, and ministry. Our diverse, multicultural congregation comes together with one accord to worship God, grow in faith, and serve our local and global communities.
          </Text>
        </Box>
      </Flex>
      <Box p={{ base: 8, md: 16 }}>
        <Text fontSize={{ base: "sm", md: "md" }}>
          As a church, we provide a warm, welcoming, and inspiring atmosphere for Christian worship, teaching, and community. We are committed to proclaiming the truth of God's word, equipping believers to live out their faith, and raising up leaders who will continue this important work. Through dynamic preaching, engaging small groups, and Spirit-led ministries, we aim to see lives transformed by the power of the gospel, producing fruit that will last for eternity.
          <br /><br />
          Whether you are searching for a place to call home, exploring questions of faith, or simply curious about our community, we warmly invite you to join us on this journey of raising fruitful disciples for Christ. Together, let us glorify God, impact our world, and leave a lasting legacy for the Kingdom of God.
        </Text>
      </Box>
    </Box>
  );
};

export default Who;
