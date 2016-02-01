import React from "react";

import {
  Appear,
  Deck,
  Heading,
  Image,
  Slide,
  List,
  Layout,
  Fill,
  Link,
  ListItem,
  Spectacle
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";
import SplitMe from "./SplitMe";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  tricountCr: require("../assets/tricount-cr.png"),
  tricountFr: require("../assets/tricount-fr.png"),
  splitme: require("../assets/splitme.png"),
  wes: require("../assets/wes.jpg"),
  wesPlaystore: require("../assets/wes-playstore.png"),
  materialUI: require("../assets/material-ui.png"),
  adwords: require("../assets/adwords.png"),
  users: require("../assets/users.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4caf50"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress="bar">
          <Slide
            transition={["slide"]}
            bgColor="primary"
            notes={`SplitMe est une app qui simplifie la vie lorsqu'on pars en voyage entre amis.
             Mais quel est le problème ?`}
          >
            <Heading fit lineHeight={1} textColor="secondary" textFont="Roboto">
              SplitMe
            </Heading>
            <Heading fit margin="30px 0px 0px">
              Partagez vos dépenses entre amis
            </Heading>
          </Slide>
          <Slide
            bgColor="#C10F37"
            notes="Pour illustrer le problème, prenons un exemple très simple."
          >
            <Heading fit lineHeight={1}>
              Olivier, Alexandre et Nicolas partent en week-end ski.
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Olivier paie 150 € pour la location de ski</ListItem></Appear>
              <Appear><ListItem>Alexandre paie 300 € pour l'hôtel</ListItem></Appear>
              <Appear><ListItem>Nicolas paie 50 € pour le dîner</ListItem></Appear>
            </List>
            <Appear>
              <Heading fit>
                Qui doit combien à qui ?
              </Heading>
            </Appear>
          </Slide>
          <Slide
            bgColor="#c10f37"
            notes="C'est un problème que j'ai rencontré. Qui veux créez un compte par devises ?"
          >
            <Layout>
              <Fill>
                <Image src={images.tricountFr.replace("/", "")} height={350} />
              </Fill>
              <Fill>
                <Appear>
                  <Image src={images.tricountCr.replace("/", "")} height={350} />
                </Appear>
              </Fill>
            </Layout>
            <Appear>
              <Heading fit margin="20px 0px 0px">
                1 compte par devises
              </Heading>
            </Appear>
          </Slide>
          <Slide
            bgColor="#c10f37"
            notes="Une troisième devises"
          >
            <Heading fit>
              Tricount n'est pas efficace
            </Heading>
          </Slide>
          <Slide
            transition={["slide"]}
            notes="Oubliez tout ça, voici SplitMe."
          >
            <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.split.app">
              <Image src={images.splitme.replace("/", "")} />
            </Link>
          </Slide>
          <Slide
            notes={`L'idée de SplitMe est de proposer la solution la plus simple et intuitive possible.
            Présentation des 3 fonctionnalités importantes.
            Mais ce n'est pas qu'un fake... Démo !!!`}
          >
            <SplitMe />
          </Slide>
          <Slide
            notes=""
          >
            <Link target="_blank" href="https://www.facebook.com/events/1023664987685046/">
              <Image src={images.wes.replace("/", "")} />
            </Link>
          </Slide>
          <Slide
            notes=""
          >
            <Image src={images.wesPlaystore.replace("/", "")} height={150} />
            <Heading margin="30px 0px 0px">
              1 installation
            </Heading>
          </Slide>
          <Slide
            notes=""
          >
            <iframe
              width="100%"
              height="600px"
              frameBorder="0"
              style={{background: "#fff"}}
              src="http://www.material-ui.com"
            />
          </Slide>
          <Slide
            notes="web"
          >
            <Image src={images.materialUI.replace("/", "")} height={200} />
            <Heading margin="30px 0px 0px" fit>
              1 331 utilisateurs uniques
            </Heading>
          </Slide>
          <Slide
            notes=""
          >
            <Image src={images.adwords.replace("/", "")} height={100} />
            <Heading margin="30px 0px 0px" fit>
              30 clicks, CTR 2.1 %, 70 €
            </Heading>
          </Slide>
          <Slide
            notes="app"
          >
            <Image src={images.users.replace("/", "")} height={200} />
            <Heading margin="30px 0px 0px" fit>
              75 utilisateurs uniques
            </Heading>
          </Slide>
          <Slide
            bgColor="#427fed"
            transition={["slide"]}
            notes="Merci"
          >
            <Heading fit>
              Question ?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
