import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Skeleton,
  Badge,
  Button,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Box,
  Icon,
  Stack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Heading,
  AspectRatioBox
} from "@chakra-ui/core";

// import image
import sigud from "../img/sigud.png";
import mament from "../img/mament.png";
import tamanZakat from "../img/tamanzakat.png";
import note from "../img/note.png";

import {
  LazyLoadImage,
  trackWindowScroll
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = React.useState();
  // const cancelRef = React.useRef();
  const [alertBody, setAlertBody] = React.useState("");
  const [projectId, setProjectId] = React.useState();
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const onClose = () => {
    setIsOpen(false);
  };

  const action = () => {
    if (projectId === 1) {
      setIsOpen(false);
    } else if (projectId === 2) {
      setIsOpen(false);
      window.open("http://mament.somee.com/", "_blank");
    } else if (projectId === 3) {
      setIsOpen(false);
    } else {
      setIsOpen(false);
      window.open("https://note-fe.now.sh/", "_blank");
    }
  };

  const linkSigud = () => {
    setProjectId(1);
    setAlertBody("Sorry, but SIGUD was removed from the host.");
    setIsOpen(true);
  };

  const linkMament = () => {
    setProjectId(2);
    setAlertBody("Use this auth.Username : guest Password: guest");
    setIsOpen(true);
  };

  const linkTamanZakat = () => {
    setProjectId(3);
    setAlertBody("Sorry, but Taman Zakat has not hosted yet.");
    setIsOpen(true);
  };

  const linkNote = () => {
    setProjectId(4);
    window.open("https://note-fe.now.sh/", "_blank");
  };

  const projects = [
    {
      img: sigud,
      alt: "SIGUD",
      desc: `SIGUD (Sistem Informasi Pergudangan) is a Simple Warehouse Management System, built using AdminLTE 3 framework and jQuery for client-side and php native for server-side as demo for fulfilling my college course "Human-Computer Interaction".`,
      link: linkSigud,
      tags: [{ tag: "AdminLTE 3" }, { tag: "PHP" }, { tag: "AJAX" }]
    },
    {
      img: mament,
      alt: "MaMent",
      desc: `MaMent (Matrix Management App) is a Knowledge Management System I've built for my internship program in PT PERTAMINA MOR V. Built using C# in ASP.NET, MVC5 as MVC framework, EF6 for model mapper and Razor View Engine for view.`,
      link: linkMament,
      tags: [{ tag: "ASP.NET" }, { tag: "C#" }, { tag: "EF6" }]
    },
    {
      img: tamanZakat,
      alt: "Taman Zakat",
      desc: `Taman Zakat is Complex Donation and Payroll System that I've built as my first real project between my team and client. Built using php native, AdminLTE 2 framework and so many JavaScript library inside it. My team has 3 members, my friend and I are contributing as Programmer and my lecturer is contributing as Project Manager. But for some reasons, me and my friend decided to resign, so this project is going to be abandoned, maybe....`,
      link: linkTamanZakat,
      tags: [{ tag: "PHP" }, { tag: "AdminLTE 2" }, { tag: "jQuery" }]
    },
    {
      img: note,
      alt: "Simple Note",
      desc: `Simple Note is my first MERN stack website. Build using MongoDB Atlas as database, ExpressJS and NodeJS as backend and ReactJS as frontend. This website stores some notes. I got tired for transfering long text from my phone into my PC, and the reverse is just as true. So I've built this website for simplifying that.`,
      link: linkNote,
      tags: [{ tag: "NodeJS" }, { tag: "React" }, { tag: "Express" }]
    }
  ];

  const handleScroll = () => {
    const position = {
      X: window.pageXOffset,
      Y: window.pageYOffset
    };
    setScrollPosition(position);
  };

  

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log(scrollPosition)
    // window.addEventListener("scroll", handleScroll, { passive: true });
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <Flex align="center" direction="column">
      <Helmet>
        <title>Works - Imam Hanafi</title>
      </Helmet>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Alert
          </AlertDialogHeader>
          <AlertDialogBody>{alertBody}</AlertDialogBody>
          <AlertDialogFooter>
            <Button size={"md"} variantColor="green" onClick={action} ml={3}>
              Okay
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Heading mb="10" w="100%">
        My Projects
      </Heading>

      <SimpleGrid columns={{ default: "1", lg: "2" }} spacing={10}>
        {projects.map((project, idx) => (
          <Flex
            borderWidth="2px"
            rounded="lg"
            key={idx}
            direction="column"
            h="100%"
          >
            <AspectRatioBox ratio={1366 / 768} w="100%" d="flex">
              {/* <Skeleton isLoaded={isLoaded}>
                <Image
                  src={project.img}
                  alt={project.alt}
                  borderTopLeftRadius='1%'
                  borderTopRightRadius='1%'
                  onLoad={() => {
                    setIsLoaded(true);
                  }}
                />
              </Skeleton> */}
              <LazyLoadImage
                alt={project.alt}
                effect="blur"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "2%",
                  borderTopLeftRadius: "1%",
                  borderTopRightRadius: "1%"
                }}
                src={project.img}
                // scrollPosition={scrollPosition}
              />
            </AspectRatioBox>
            <Flex p="4" direction="column" h="100%" justify="space-between">
              <Box>{project.desc}</Box>
              <Flex mt={2} align="center" justify="space-between">
                <Link
                  fontWeight="bold"
                  color="teal.400"
                  onClick={project.link}
                  isExternal
                >
                  DEMO <Icon name="external-link" mx="2px" />
                </Link>
                <Flex>
                  <Stack isInline>
                    <Badge variantColor="green">{project.tags[0].tag}</Badge>
                    <Badge variantColor="red">{project.tags[1].tag}</Badge>
                    <Badge variantColor="purple">{project.tags[2].tag}</Badge>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

// export default trackWindowScroll(Work)
export default Work