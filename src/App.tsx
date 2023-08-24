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
      <AspectRatio ratio={16 / 3}>
        <picture>
          <ImageCover src="/image/map.png" />
        </picture>
      </AspectRatio>
      <Container mt="3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        minima accusantium facere et delectus, voluptas consequuntur vel sequi
        temporibus asperiores aperiam. Facilis rem, vel sed odit et ut ad
        consequatur. Ipsa dolorum soluta blanditiis animi minus consequatur
        natus qui obcaecati tempore laboriosam repellendus nam sequi maxime
        similique veritatis commodi, voluptates sapiente debitis cupiditate eos
        eligendi. Ex, quo. Magni, hic doloribus! Dicta dolorem porro
        reprehenderit, laudantium aliquam atque nostrum? Voluptatibus adipisci
        unde aliquam fugit numquam libero sunt quod, magni voluptas excepturi
        quaerat magnam quibusdam? Optio dolorem vitae officia ab tenetur
        corporis. Esse suscipit eveniet vel culpa, consequuntur corrupti,
        tempora repellendus maiores enim tenetur veniam consequatur. Porro,
        vitae mollitia ipsam tempora nisi, dicta error enim laborum voluptatibus
        animi eligendi quae, obcaecati omnis. Minus culpa consequatur laborum
        aliquid, nam molestiae expedita unde! Possimus quod veniam illum
        perspiciatis dolor! Sit est molestias iste recusandae reiciendis! Quod
        provident saepe velit porro esse officia sit id! Animi quidem earum
        tempora laudantium enim porro, molestiae tempore quae necessitatibus
        quos exercitationem iste dignissimos nam sed magni laboriosam quasi
        illum libero facere quisquam recusandae odit, neque dolores! Harum,
        modi. Accusamus dolores perferendis amet placeat labore doloremque,
        atque libero commodi possimus earum obcaecati explicabo. Cupiditate
        dolorem velit ullam laborum. Possimus fuga repudiandae sed aliquid earum
        enim inventore aperiam qui molestias! Dolor quibusdam deleniti
        voluptatem quae omnis autem nihil facilis enim, fugit similique placeat
        molestias praesentium est tempora id expedita rerum dolore aspernatur
        iste doloremque totam possimus! Nostrum ducimus natus sapiente. Sunt
        obcaecati animi, veritatis fugit voluptas optio, quo quam nisi
        necessitatibus illo eos blanditiis fuga, sint consequuntur? Minima, ea,
        quis quo sed atque libero iste deserunt voluptatibus, esse eligendi
        porro! Repellat architecto culpa modi quisquam ad omnis quo amet,
        debitis libero neque magnam delectus assumenda blanditiis dolore ut
        facilis ea, repellendus optio numquam. Quo, nisi aliquam vero voluptates
        iusto doloribus. Eos laboriosam ipsa facere quod, beatae, saepe quisquam
        reprehenderit nobis quis optio necessitatibus rem. Voluptatibus saepe,
        explicabo voluptas voluptates est dicta perferendis laborum officia
        expedita dolores rerum sint! Est, harum. Tempora in doloremque ad
        placeat eos itaque dolor suscipit alias debitis eius! Quaerat voluptatem
        consequuntur natus, ducimus deserunt ullam hic vel consequatur officia
        esse. Asperiores accusantium quo optio nisi placeat. Beatae commodi
        nulla, corporis eos magnam voluptatum atque repellat earum consectetur
        culpa temporibus, fuga fugiat ducimus accusamus distinctio praesentium.
        Error impedit ullam veritatis voluptatum sunt aspernatur rerum
        asperiores, ex in. Dicta similique sint, dolorem saepe fugiat natus ut
        mollitia quos est beatae repellat quam voluptatibus fugit et magni iste
        vero modi hic laborum aspernatur temporibus? Voluptas ut quae ipsam
        aspernatur. Labore iste ullam tempore perspiciatis beatae, ipsum, iure
        repellat consectetur aliquam eos molestias reiciendis optio perferendis
        aspernatur suscipit, nesciunt distinctio? Laborum odit alias fugiat
        labore nam, minima quaerat dolores dolore! Officiis voluptates at
        inventore suscipit optio soluta vitae quisquam, fugit ratione tempore,
        assumenda beatae saepe facere corporis eligendi itaque. Et possimus in
        facilis officiis sit cumque dolorem laudantium provident quasi. Sit
        tempore cumque quaerat amet minus hic laudantium velit nihil quae
        soluta, at similique voluptatum blanditiis quo provident officia iusto
        quia deserunt omnis maiores aperiam reiciendis ullam ut? Excepturi,
        minus! Rem similique aliquam quo sint, dolorem, numquam id quibusdam,
        quaerat fuga omnis laboriosam tempore. Tempora, ex consectetur autem
        maxime quos repellendus soluta eveniet quaerat at debitis repellat velit
        iusto et. Ducimus in, accusamus totam reprehenderit quia praesentium
        accusantium ipsa optio recusandae porro ea suscipit eos molestias.
        Officia commodi mollitia non, fuga natus, maxime ratione aliquid, odio
        illum ex ducimus error. Autem earum iusto nostrum hic maiores,
        voluptatibus distinctio quis voluptatum enim doloremque, dolores eius
        repellendus illo voluptates eos nemo, quaerat tenetur omnis aut magni
        laborum officia? Vel ab eligendi deleniti! Expedita nemo odio ratione
        consectetur, nam qui temporibus delectus non labore aperiam eaque dolor
        similique? Quibusdam vero nisi doloremque repudiandae, quaerat sunt
        pariatur ullam, natus velit temporibus magnam blanditiis accusamus!
        Impedit itaque voluptas laudantium aut odio, aliquam accusamus. Ipsa
        quidem tempora repellendus quasi et laborum ipsam consequatur amet
        accusamus illo aut recusandae quis voluptatum asperiores harum,
        excepturi praesentium labore repellat! Fuga corrupti, placeat voluptate
        ea doloremque eaque itaque iste natus qui quasi modi aliquam quo aut
        consequuntur iusto atque alias cumque quae ullam. Soluta incidunt modi,
        tempora repellat maiores ducimus. Officiis voluptatum voluptates vel.
        Eos voluptate dolor consequatur obcaecati, doloremque esse est ea
        facilis. Blanditiis voluptatibus adipisci doloremque numquam, atque
        tempore alias voluptate sapiente rem, facere ex inventore, ullam
        deserunt. Illo voluptatum aperiam, necessitatibus perferendis vel quas
        consectetur beatae iusto ut. Porro eius maxime et dolore delectus omnis
        autem obcaecati impedit, in minima! Recusandae repellendus vel quas.
        Veniam, nihil est? Quo, vero pariatur consectetur molestias aliquid,
        dignissimos consequuntur reprehenderit quis fugit, sit dolore! Quaerat
        natus maiores commodi qui obcaecati laborum in labore beatae amet odio!
        Ut sit aliquid incidunt excepturi? Error, adipisci? Necessitatibus,
        velit. Eum laudantium officiis exercitationem inventore aliquam.
        Repudiandae odit unde quae inventore, ad odio distinctio quas ab fugiat
        provident velit dolore iure voluptas aperiam tempore necessitatibus?
        Maiores? Architecto obcaecati, neque expedita id fugit quis dolore
        voluptate? Est animi minus, id ipsa porro voluptatibus veniam voluptates
        sed eum suscipit corporis placeat? Qui expedita dolorum, blanditiis
        maiores error nostrum. Nulla nostrum quo inventore, et facere optio
        soluta nisi necessitatibus itaque, tenetur vel eius eum possimus illo id
        voluptates doloribus. Quam amet id debitis consequuntur quasi inventore
        omnis cumque eligendi! Aliquam quibusdam iure quo, amet alias aspernatur
        tempora molestiae commodi repellat perferendis quisquam ipsam eum, est
        ipsum accusamus neque in inventore possimus consequuntur dolorem, unde
        explicabo aliquid ab nam? Nam.
      </Container>
    </>
  );
}

export default App;
