import { Container, Box, Text, Flex } from "@radix-ui/themes";
import { styled } from "@stitches/react";

const BoxHeader = styled(Container, {
  //   marginTop: "0.5rem",
  //   marginBottom: "0.5rem",
  borderBottom: "1pt solid #bbb",
  padding: "0.2rem",
  height: "2.4rem",
});

const Header = () => {
  return (
    <BoxHeader
      size={{
        initial: "2",
        md: "3",
        xl: "4",
      }}
      mb="2"
      mt="3"
      position="sticky"
      style={{
        top: 0,
        backgroundColor: "white",
        zIndex: 9,
      }}
    >
      <Flex gap="3" width="auto">
        <Box ml="1">
          <Text as="div" weight="bold" size="6">
            Sample
          </Text>
        </Box>
        <Box
          grow="1"
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            // paddingLeft: "2rem",
          }}
          pl="4"
        >
          <Text as="div" size="3" weight="light">
            Home | Map
          </Text>
        </Box>
        <Box
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text as="div" size="3">
            Icon Area
          </Text>
        </Box>
      </Flex>
    </BoxHeader>
  );
};
export default Header;
