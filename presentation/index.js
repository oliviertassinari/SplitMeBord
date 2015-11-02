import React from "react";

import {
  Appear,
  Deck,
  Heading,
  Image,
  Slide,
  List,
  Link,
  ListItem,
  Spectacle
} from "../src";

import preloader from "../src/utils/preloader";

import createTheme from "../src/themes/default";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  tricount: require("../assets/tricount.png"),
  splitme: require("../assets/splitme.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4caf50"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="bar">
          <Slide
            bgColor="primary"
            notes="Simplifie la vie lorsqu'on pars en voyage entre amis."
          >
            <Heading fit lineHeight={1} textColor="secondary" textFont="Roboto">
              SplitMe
            </Heading>
            <Heading fit margin="30px 0px 0px">
              Partagez vos dépenses entre amis
            </Heading>
          </Slide>
          <Slide
            transition={["fade"]}
            bgColor="#C10F37"
            notes="Pour illustrer le problème, prenons un exemple très simple."
          >
            <Heading fit lineHeight={1}>
              Olivier, Alexandre et Nicolas partant en weekend ski.
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Olivier paie 100 pour la location de ski</ListItem></Appear>
              <Appear><ListItem>Alexandre paie 300 pour l'hôtel</ListItem></Appear>
              <Appear><ListItem>Nicolas paie 50 pour le dîner</ListItem></Appear>
            </List>
            <Appear>
              <Heading fit>
                Qui doit combien à qui?
              </Heading>
              </Appear>
          </Slide>
          <Slide
            transition={["fade"]}
            bgColor="#C10F37"
            notes="Qui veux créez un compte par devises ?"
          >
            <Image src={images.tricount.replace("/", "")} margin="0px auto 40px" height={400}/>
            <Appear>
              <Heading fit>
                1 compte par devises
              </Heading>
            </Appear>
          </Slide>
          <Slide
            transition={["fade"]}
            bgColor="#C10F37"
            notes=""
          >
            <Heading fit>
              Tricount n'est pas éfficace
            </Heading>
          </Slide>
          <Slide
            notes="Oubliez tout ça, voici SplitMe."
          >
            <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.split.app">
              <Image src={images.splitme.replace("/", "")} />
            </Link>
          </Slide>
          <Slide
            transition={["fade"]}
            notes=""
          >
            <iframe
              width="100%"
              height="600px"
              frameBorder="0"
              style={{background: "#fff"}}
              src="https://staging.splitme.net/"
            />
          </Slide>
          <Slide
            transition={["fade"]}
            notes=""
          >
            <iframe
              width="100%"
              height="600px"
              frameBorder="0"
              style={{background: "#fff"}}
              src="http://www.material-ui.com/#/discover-more/showcase"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
