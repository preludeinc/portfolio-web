import { IconBrandLinkedin, 
         IconBrandGithub } 
from '@tabler/icons-react';
import { ActionIcon, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';

export const Footer = () => {
  let linkedin='https://www.linkedin.com/in/jessica-g-879893340/';
  let github='https://github.com/preludeinc/';

  return (
    <div className="footer">
      <Container className="footer-inner">
        <Group gap={'sm'} className="footer-links">
          <ActionIcon size="lg" 
                      color="gray" 
                      component={Link}
                      to={linkedin}
                      variant="subtle">
            <IconBrandLinkedin size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" 
                      color="gray" 
                      component={Link}
                      to={github}
                      variant="subtle">
            <IconBrandGithub size={25} stroke={1.5}/>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

