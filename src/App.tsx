import {
  AspectRatio,
  Callout,
  Container,
  Text,
  Blockquote,
} from "@radix-ui/themes";
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

      <Container mt="3" mb="3">
        <Blockquote>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          veniam eos debitis vero ex ab quo cupiditate eius? Dicta minima, quo
          quos aliquid eos nobis accusamus explicabo consequatur ut officia!
          Fuga, rerum minus, libero odio optio distinctio nisi voluptas hic
          ducimus quam tempora possimus vel? Quisquam molestias, a voluptatibus
          atque veritatis eos quaerat doloribus, et aliquam est adipisci quam
          maxime. At quis quod nostrum blanditiis non minima doloribus, dicta
          ipsa obcaecati? Aliquam reiciendis laborum illum veritatis voluptatem
          voluptate autem voluptatibus est doloribus. Quae eaque, assumenda a
          tempore recusandae ratione sequi. Deleniti molestiae amet, vitae
          ratione eligendi placeat praesentium architecto voluptatibus ipsa
          error natus! Fuga nulla repellat maiores molestias ad, ipsam quasi,
          natus iste earum culpa est mollitia architecto, dolorum doloremque?
          Quidem ad delectus, labore rerum neque consequuntur, incidunt
          corporis, repudiandae cumque laudantium ipsa? Consequuntur blanditiis
          illum maiores autem cumque obcaecati quod earum minima cupiditate,
          nulla et modi ex ratione optio? Accusantium id harum exercitationem ex
          ratione et expedita sunt, tempore omnis ducimus doloremque velit,
          eveniet esse laudantium. Debitis ducimus corrupti quod, rerum nulla
          officia sint aliquid! Laboriosam consequuntur facilis tenetur. Sit
          fuga corrupti perspiciatis hic dignissimos minima sed sint. Officiis
          harum ipsa veniam commodi aperiam rerum ex, assumenda esse neque sunt
          voluptatum, modi in exercitationem maiores, ut accusantium doloremque
          nulla. Quidem at delectus nemo perferendis porro amet facere fuga,
          saepe a, minus nisi totam neque deleniti? Placeat natus neque laborum
          repudiandae itaque, iste dicta dolore aperiam, laudantium quasi amet
          ex? Nobis laboriosam beatae sapiente dignissimos sequi ducimus vitae
          consectetur nam incidunt magnam animi officia maxime omnis in facere,
          architecto earum possimus et soluta magni dolore quidem? A harum illo
          illum? Voluptatibus quisquam ducimus natus quod quam aliquam magnam,
          recusandae ullam est officia nam adipisci, voluptates mollitia aut
          iure neque totam iste eos dolor. Sit ad qui dolorem mollitia
          voluptates. Animi!
        </Blockquote>
      </Container>
    </>
  );
}

export default App;
