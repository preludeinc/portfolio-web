import { useEffect, useState } from "react";
import { ProjectService } from "../classes/projectservice";
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Project } from "../classes/project";
import { Loader } from "../components/Loader";
import { Container, Image, Text, Title } from "@mantine/core";
import pic_computer from "/images/simple_computer.jpg";

export default function Eng() {
  const [data, setData] = useState<Project[]>();
  let page = siteConfig.ENG_CATEGORY;

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
        <Title
          ta={{ base: "left", md: "center" }}
          mt={{ base: 5, md: 10 }}
          mb={{ base: 20, lg: 30 }} 
          className="title"
        >
          Embedded Programming
        </Title>

        {data ? (
          data.map((_item) => (
            <div key={_item.id}>
              <Title
                order={2}
                ta="left"
                ml={{ base: 5 }}
                mt={{ base: 5, md: 10 }}
                mb={{ base: 10, md: 20 }} 
              >
                {_item.title}
              </Title>
              <Text
                ta="left"
                size="xl"
                mt={{ base: 5, md: 10, lg: 15 }}
                mb={15}
              >
                {_item.description}
              </Text>

              <Title order={2} ta="left" mt={15} mb={15}>
                Hardware Setup
              </Title>
              <Image
                src={pic_computer}
                radius="lg"
                fit="contain"
                loading="lazy"
                opacity="0.75"
              />
              <Text ta={{ base: "left", md: "center" }} size="lg" mt={10}>
                Pictured left to right & top to bottom: LCD, Matrix 4x4
                keypad, PIC, Crystal Oscillator, Button, Resistor, LED
                light-bar, & power supply.
              </Text>
              <Image />
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
