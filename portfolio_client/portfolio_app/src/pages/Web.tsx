import { useEffect, useState } from "react";
import { Project } from "../classes/project";
import { ProjectService } from "../classes/projectservice";
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Loader } from "../components/Loader";
import { Code, Container, Grid, Image, Text, Title } from "@mantine/core";
import home from "/images/home_page.jpg";
import teams from "/images/teams_page.jpg";

export default function Web() {
  const [data, setData] = useState<Project[]>();
  let page = siteConfig.WEB_CATEGORY;
  let capstone = `https://capstone.camosun.bc.ca/December2024/`;

  useEffect(() => {
    const fetchProjectData = async () => {
      const projectCall = new ProjectService(siteConfig.PORT);
      const response = await projectCall.getProjects(page);
      setData(response);
    };
    fetchProjectData();
  }, []);

  return (
    <>
      <DefaultLayout page={page}>
          <Title className="title"
            ta={{ base: "left", md: "center" }}>Websites</Title>
          {data ? (
            data.map((_item) => (
              <div key={_item.id}>
                <Title order={2} ta="left"                 
                  mt={{ base: 15 }}
                  mb={{ base: 10, md: 20 }} >
                  {_item.title}
                </Title>
                <Text className="web-text" 
                  ta="left" 
                  mt={{ base: 5, md: 10 }}
                  mb={15} 
                  size="xl">
                  {_item.description}
                </Text>
                {_item.id == 2 ? (
                  <Grid>
                    <Code ta="left" mt={25} ml={5} mb={15}>
                      <Text size="md">
                        <a href={capstone}>Capstone Website 🔗</a>
                      </Text>
                    </Code>
                    <Grid.Col span={12}>
                      <Title order={3} ta="left" mb={10}>
                        Home Page
                      </Title>
                      <Image src={home} radius="md" fit="contain" loading="lazy" />
                    </Grid.Col>
                    <Grid.Col span={12} mt={10}>
                      <Title order={3} ta="left" mb={10}>
                        Teams Page
                      </Title>
                      <Image src={teams} radius="md" fit="contain" loading="lazy"/>
                      <Text
                        ta={{ base: "left", md: "center" }}
                        size="lg"
                        mt={10}
                        mb={10}
                        className="web-text"
                      >
                        Clicking the arrow on one of the team cards opens a
                        modal with further information re: the projects and
                        teams.
                      </Text>
                    </Grid.Col>
                  </Grid>
                ) : null }
              </div>
            ))
          ) : (
            <Container className="loading-box">
              <Loader loading={true} />
            </Container>
          )}
      </DefaultLayout>
    </>
  );
}
