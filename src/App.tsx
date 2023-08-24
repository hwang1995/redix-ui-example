import { AspectRatio, Callout, Container, Text } from "@radix-ui/themes";
import { styled } from "@stitches/react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Header from "./components/Header/Header";

const ImageCover = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderRadius: "var(--radius-2)",
});

function App() {
  return (
    <>
      <Header />
      <Container
        size={{
          initial: "2",
          md: "3",
          xl: "4",
        }}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Callout.Root
          mb="3"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            <Text
              as="div"
              weight="light"
              size={{
                initial: "1",
                md: "3",
                xl: "4",
              }}
            >
              This sample service is not production level. Be careful.
            </Text>
          </Callout.Text>
        </Callout.Root>
      </Container>
      <AspectRatio ratio={16 / 6}>
        <picture>
          <ImageCover src="/image/busan2.webp" loading="lazy" />
        </picture>
      </AspectRatio>
    </>
  );
}

export default App;
