import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Input,
  List,
  Text,
  Textarea,
  Title
} from "@mantine/core";
import image from "/images/coding.svg";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import web from "/images/websites.svg";
import games from "/images/games.svg";
import eng from "/images/eng.svg";

export default function Home() {
  let homePage = 0;
  let artAttr = "https://illlustrations.co/";

  return (
    <>
      <Navbar page={homePage} />
      <Container className="home-container" fluid>
        <Container className="banner" size="xl">
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 12, lg: 6 }}>
              <Title ta="center" className="home-title">
                Home
              </Title>

              <Title className="welcome-text" c="cyan" size="xl" order={1}>
                Welcome! 👋
              </Title>
                <Box className="about-content">
                  <List
                    ta="left"
                    spacing="md"
                    size="xl"
                    mt={{ base: "sm", lg: "md" }}
                    mb={{ base: "sm", lg: "md" }}
                    fw={600}
                    className="about-text"
                  >
                    <List.Item className="about-byline">
                      A bit about me:
                    </List.Item>
                    <List.Item>
                      I'm a developer with an interest in Cybersecurity.
                    </List.Item>
                    <List.Item>
                      I studied Psychology prior to transitioning into tech.
                    </List.Item>
                    <List.Item>
                      I love dogs, good coffee, hiking, & tabletop games.
                    </List.Item>
                    <List.Item>
                      For more examples of my work, please click one of the links
                      below. 
                    </List.Item>
                  </List>

                  <Group justify="center" 
                    align="center" 
                    gap="xs" 
                    mt={{ base: "sm", md: "lg" }} 
                    mb={{ base: 0, md: "lg", lg: "xl" }}>
                    <Anchor href="/websites">
                      <Button variant="filled" color="cyan" size="compact-lg">
                        Websites
                      </Button>
                    </Anchor>
                    <Anchor href="/games">
                      <Button variant="filled" color="cyan" size="compact-lg">
                        Games
                      </Button>
                    </Anchor>
                    <Anchor href="/engineering">
                      <Button variant="filled" color="cyan" size="compact-lg">
                        Engineering
                      </Button>
                    </Anchor>
                  </Group>
                </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 12, lg: 6 }} >
              <Image
                src={image}
                radius="xl"
                mb="sm"
                loading="lazy"
                className="hero-image"
                alt="Workstation Drawing"
              />
              <Text ta="right" size="md" mr={15} className="art-attr">Amazing Art c/o <Anchor href={artAttr}>vijay verma</Anchor></Text>
            </Grid.Col>
          </Grid>
        </Container>

        <Container className="banner-row-two" size="xl">
          <Grid 
            mt={{ base: 0, md: "lg" }}
            mb={{ base: "sm", md: "lg" }}
            gutter={{ base: 15, md: 30, lg: 60 }} className="banner-images-row-two">
            <Grid.Col span={{ base: 3.65, md: 3.8, lg: 3.9 }}>
                <Image
                  src={web}
                  radius="50%"
                  fit="contain"
                  ml="lg"
                  loading="lazy"
                />
            </Grid.Col>

            <Grid.Col span={{ base: 3.65, md: 3.8, lg: 3.9 }}>
                <Image
                  src={games}
                  radius="50%"
                  ml="lg"
                  fit="contain"
                  loading="lazy"
                  />
            </Grid.Col>
            <Grid.Col span={{ base: 3.65, md: 3.8, lg: 3.9 }}>
                <Image
                  src={eng}
                  radius="50%"
                  ml="lg"
                  fit="contain"
                  loading="lazy"
                  />
            </Grid.Col>
          </Grid>
        </Container>

        <Container size="sm" mb={{ base: "lg", md: 0 }}>
          <Box
            ta="left"
            mt={{ base: "md", md: "xl" }}
            mb={{ base: "xl", md: "md" }}
          >
            <Title
              order={1}
              ta="center"
              mt={{ base: 0, md: "md" }}
              mb={{ base: "sm", md: "md" }}
            >
              Contact Me
            </Title>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="610c648c-016f-4b3c-bf74-ad8eb83983ac"
              />
              <input type="checkbox" name="botcheck" id="" hidden/>

              <Input.Wrapper label="Name">
                <Input
                  mb="sm"
                  size="md"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required/>
              </Input.Wrapper>

              <Input.Wrapper label="Email">
                <Input
                  mb="sm"
                  size="md"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required/>
              </Input.Wrapper>

              <Input.Wrapper label="Subject">
                <Input
                  mb="sm"
                  size="md"
                  type="text"
                  placeholder="Subject"
                  name="subject"/>
              </Input.Wrapper>

              <Input.Wrapper label="Message">
                <Textarea
                  size="md"
                  placeholder="Message"
                  name="message"
                  autosize
                  minRows={3}
                  required/>
              </Input.Wrapper>

              <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
              <Group justify="center" mt="lg">
                <Button
                  type="submit"
                  variant="filled"
                  size="compact-lg"
                  color="cyan"
                  mb="xl"
                >
                  Send
                </Button>
              </Group>
            </form>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

