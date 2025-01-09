import { useEffect, useState } from "react";
import { ProjectService } from "../classes/projectservice";
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Project } from "../classes/project";
import { AspectRatio, Box, Button, Container, Text, Title } from "@mantine/core";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Loader } from "../components/Loader";
import ReactPlayer from "react-player";
import tokenPlatformer from "/images/token_platformer.jpg";

export default function Games() {
  const [data, setData] = useState<Project[]>();
  const [unity, loadUnityPlayer] = useState(false);
  let page = siteConfig.GAME_CATEGORY;
  let tetris = "https://vimeo.com/1039797146";
  let context: AudioContext;

  useEffect(() => {
    const fetchProjectData = async () => {
      const projectCall = new ProjectService(siteConfig.PORT);
      const response = await projectCall.getProjects(page);
      setData(response);
    };
    fetchProjectData();
  }, []);

  const { unityProvider } = useUnityContext({
    loaderUrl: "/assets/token_platformer.loader.js",
    dataUrl: "/assets/token_platformer.data",
    frameworkUrl: "/assets/token_platformer.framework.js",
    codeUrl: "/assets/token_platformer.wasm",
  });

  function loadUnity(): void {
    loadUnityPlayer(true);
    if (!context) {
      try {
        context = new AudioContext();
      } catch(e) {
        console.warn('Web Audio API is not supported in this browser');
        return;
      }
    }
    
    if (context.state === 'suspended') {
      context.resume();
    } else if (context.state === 'running') {
      context.suspend();
    }
  }

  return (
    <>
      <DefaultLayout page={page}>
        <Title
          className="title"
          mt={{ base: 5, md: 10 }}
          mb={15} 
          ta={{ base: "left", md: "center" }}
        >
          Games
        </Title>
        {data ? (
          data.map((_item, _i) => (
            <div key={_item.id}>
              <Title order={2} 
                mt={{ base: 5, md: 10 }}
                mb={20} 
                ta="left">
                {_item.title}
              </Title>
              <Text
                ta="left"
                mt={5}
                mb={5}
                size="xl"
              >
                {_item.description}
              </Text>
              {_i == 0 && unityProvider ? (
                <>
                  <Text
                    ta="left"                    
                    mt={{ base: 10, md: 10 }}
                    mb={15}
                    size="xl"
                  >
                  Click play if you would like to give it a try.
                  </Text>
                  <Box ta="center">
                    <Button 
                      c="white"
                      size="compact-lg"
                      color="violet" 
                      mb="lg"
                      onClick={()=> loadUnity()}>Play 🎮
                  </Button>
                  </Box>
                  { unity ? (
                    <AspectRatio ratio={16 / 9}>
                      <Unity
                        style={{
                        width: "100%",
                        height: "auto",
                      }}
                      unityProvider={unityProvider}
                    />
                  </AspectRatio>
                  ) : (
                  <Box mt={10}>
                    <img
                      loading="lazy"
                      src={tokenPlatformer}
                      className="token-image" />
                  </Box>
                )}
                </>
              ) : (
                <>
                  <AspectRatio ratio={16 / 9}>
                    <ReactPlayer
                      url={tetris}
                      width="100%"
                      height="auto"
                      controls
                    />
                  </AspectRatio>
                  <Text size="lg" mt={10} mb={{ base: 10, md: 15 }} 
                    text-wrap="wrap">
                      Game play is shown at 2x speed. As points are gained, 
                      pieces fall more quickly.
                  </Text>
                </>
              )}
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
