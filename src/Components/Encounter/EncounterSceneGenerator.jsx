import tardigrade from "../../Assets/tardigrade.jpg";
import emptyImg from "../../Assets/empty.jpg";
import OldWizzard from "../../Assets/OldWizzard.jpg";
import beachTileset from "../../Assets/BeachTileset.png";
import { Dialog } from "./Dialog";
import { Answer } from "./Answer";
import { Inventory } from "../Inventory/InventoryDisplay";
import { Item } from "../Items/ItemClass";

export function detectEncounter(randomEncounter, goTo) {
  let encounter = emptyEncounter();
  //let encounter = {};
  //console.log("randomEncounter :", randomEncounter);
  switch (randomEncounter) {
    case "bandit":
      //encounter = banditEncounter(goto);
      break;
    case "mage":
      //encounter = mageEncounter(goto);
      break;
    case "tree":
      encounter = treeEncounter(goTo);
      break;

    case "pirate":
      encounter = pirateEncounter(goTo);
      break;

    case "chefHat":
      encounter = TEST_ITEM(goTo);
      break;

    default:
      console.log("patate");
      break;
  }

  return encounter;
}

function emptyEncounter() {
  const scene = new Dialog(emptyImg);

  return scene;
}

function banditEncounterOLD(goto) {
  //const exit = "exit";

  const sceneExit = new Dialog(emptyImg);
  const answer = new Answer("exitScene");
  sceneExit.addAnswer(answer);

  const sceneA = new Dialog(tardigrade, "Hello hello voisin");
  //const answerA1 = new Answer("Laisser ce magnifique animal", sceneExit);
  const answerA1 = new Answer("Laisser ce magnifique animal", emptyEncounter());

  sceneA.addAnswer(answerA1);

  if (goto == null) {
    goto = sceneA;
  }

  return goto;
}

function mageEncounterOLD(goto) {
  const sceneA = new Dialog(
    OldWizzard,
    "Bonjour aventurier, je suis un vieux mage qui sert de test pour le développement de rencontres avec les PNJ, j'ai volontairement un texte très long qui a pour but de tester que ce dernier ne dépasse pas de la <div> qui le contient, si tu arrives à tout lire c'est que ça fonctionne comme prévu, d'ailleurs pour les besoin du test j'ai décidé d'augmenter grandement la taille de ce que je raconte, juste pour voir si la div s'accord ou si texte diminue, je ne sais aps encore comment ça va s'afficher je vais voir",
  );

  const sceneB = new Dialog(
    OldWizzard,
    "Ceci est un test de mise à jour du text que je raconte, si tu le lis c'est que ça s'est correctement mis à jour",
  );

  const sceneC = new Dialog(
    tardigrade,
    "Moi je suis un test pour voir ce qu'il ce passe si on change l'image de la scène, si tu me vois c'est que ça fonctionne bien",
  );

  const answerA1 = new Answer(
    "Réponse générique qui renvoi vers la scène B",
    sceneB,
  );
  sceneA.addAnswer(answerA1);

  const answerA2 = new Answer(
    "Réponse générique qui renvoi vers la scène C",
    sceneC,
  );
  sceneA.addAnswer(answerA2);

  const answerA3 = new Answer(
    "Réponse générique, si tu me clique dessus ça met fin à ce dialogue",
    emptyEncounter(),
  );
  sceneA.addAnswer(answerA3);

  const answerB1 = new Answer(
    "Réponse générique, si tu me clique dessus ça met fin à ce dialogue",
    emptyEncounter(),
  );
  sceneB.addAnswer(answerB1);

  const answerC1 = new Answer(
    "Quitter ce délicieux personnage",
    emptyEncounter(),
  );
  sceneC.addAnswer(answerC1);

  if (goto == null) {
    goto = sceneA;
  }

  return goto;
}

function treeEncounter(goTo) {
  const sceneA = new Dialog(
    "url(#palmtree)",
    "En face de vous, un palmier de 3m de haut. Le tronc semble craquelé et pourrait être cassé en petits morceaux",
  );

  const sceneB = new Dialog(emptyImg, "Vous récoltez du bois");

  // const answerA1 = new Answer({ text: "Récolter du bois", goTo: sceneB });
  // sceneA.addAnswer(answerA1);

  const answerA1 = new Answer({
    text: "Récolter du bois",
    exit: { shouldExit: true, timeout: 1000 },
    getItem: true,
    itemProps: {
      name: "wood",
      fill: "url(#treeTrunk2)",
      numberOfThisObject: 1,
    },
    reusable: false,
    goTo: sceneB,
  });
  sceneA.addAnswer(answerA1);

  const answerA2 = new Answer({
    text: "S'en aller",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneA.addAnswer(answerA2);

  // const answerB1 = new Answer({
  //   //text: "S'en aller",
  //   exit: { shouldExit: true, timeout: 1000 },
  //   getItem: true,
  //   itemProps: { name: "wood", fill: "url(#treeLeef2)" },
  // });
  // sceneB.addAnswer(answerB1);

  //console.log("answerB1");

  if (goTo === undefined) {
    goTo = sceneA;
  }

  return goTo;
}

function TEST_ITEM(goTo) {
  const sceneA = new Dialog("url(#chefHat)", "TEST");

  const sceneB = new Dialog(emptyImg, "TEST recolte");

  // const answerA1 = new Answer({ text: "Récolter du bois", goTo: sceneB });
  // sceneA.addAnswer(answerA1);

  const answerA1 = new Answer({
    text: "Récolter test",
    exit: { shouldExit: true, timeout: 1000 },
    getItem: true,
    itemProps : new Item ({
      name: "chefHat",
      fill: "url(#chefHat)",
      numberOfThisObject: 1,
      wearable:true,
itemSlotPosition:"head",
    reusable: true,}),
    goTo: sceneB,
  });
  sceneA.addAnswer(answerA1);

  const answerA2 = new Answer({
    text: "S'en aller",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneA.addAnswer(answerA2);

  // const answerB1 = new Answer({
  //   //text: "S'en aller",
  //   exit: { shouldExit: true, timeout: 1000 },
  //   getItem: true,
  //   itemProps: { name: "wood", fill: "url(#treeLeef2)" },
  // });
  // sceneB.addAnswer(answerB1);

  //console.log("answerB1");

  if (goTo === undefined) {
    goTo = sceneA;
  }

  return goTo;
}

function pirateEncounter(goTo) {
  const sceneA = new Dialog(
    "url(#pirate)",
    "HAHAHAHAHA, te voila donc coinçé ici toi aussi  !? HAHAHAHA malédiction ",
  );

  const sceneB = new Dialog(
    "url(#pirate)",
    "Je suis MrlglH le pirate, sur cette foutue  île depuis ... je ne sais plus ... j'ai tenu quelques nuits c'est tout ce qui compte !",
  );

  const sceneC = new Dialog(
    "url(#pirate)",
    "NE T'APPROCHE PAS, C'EST MA NOIX DE COCO  !!! *vous lance un regard mauvais en serrant sa noix de coco contre lui*",
  );

  const sceneD = new Dialog(
    "url(#pirate)",
    "HAHAHAHA c'est l'île ! L'ILE ! L'ILE !! ....",
  );

  const answerA1 = new Answer({
    text: "Qui êtes-vous ?",
    goTo: sceneB,
  });
  sceneA.addAnswer(answerA1);

  const answerA2 = new Answer({
    text: "On est ou ici ?",
    goTo: sceneD,
  });
  sceneA.addAnswer(answerA2);
  sceneB.addAnswer(answerA2);

  const answerB1 = new Answer({
    text: "Vous pouvez m'aider ?",
    goTo: sceneC,
  });
  sceneB.addAnswer(answerB1);
  sceneD.addAnswer(answerB1);

  const answerC1 = new Answer({
    text:
      "Se préparer à combattre pour cette noix de coco qui à l'air juteuse et délicieuse",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneC.addAnswer(answerC1);

  const answerC2 = new Answer({
    text: "S'en aller en courant",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneC.addAnswer(answerC2);

  const answerD1 = new Answer({
    text: "S'éloigner et le laisser marmonner en caressant une noix de coco",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneD.addAnswer(answerD1);

  const leave = new Answer({
    text: "S'en aller",
    exit: { shouldExit: true, timeout: 0 },
  });
  sceneA.addAnswer(leave);
  sceneB.addAnswer(leave);

  if (goTo === undefined) {
    goTo = sceneA;
  }

  return goTo;
}
