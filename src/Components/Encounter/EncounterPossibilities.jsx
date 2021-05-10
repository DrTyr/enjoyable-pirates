import tardigrade from "../../Assets/tardigrade.jpg";
import empty from "../../Assets/empty.jpg";
import OldWizzard from "../../Assets/OldWizzard.jpg";
import { Dialog } from "./Dialog";
import { Answer } from "./Answer";

export function detectEncounter(randomEncounter, goto) {
  let encounter = emptyEncounter();
  //let encounter = {};
  console.log("randomEncounter :", randomEncounter);
  switch (randomEncounter) {
    case "bandit":
      encounter = banditEncounter(goto);
      break;
    case "mage":
      encounter = mageEncounter(goto);
      break;
    case "tree":
      encounter = treeEncounter(goto);

      break;
    default:
      console.log("patate");
      break;
  }

  return encounter;
}

function emptyEncounter() {
  const scene = new Dialog(empty);

  return scene;
}

function exitScene() {
  const scene = new Dialog(empty);
  const answer = new Answer({ exit: true });
  scene.addAnswer(answer);
  return scene;
}

function banditEncounter(goto) {
  //const exit = "exit";

  const sceneExit = new Dialog(empty);
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

function mageEncounter(goto) {
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

function treeEncounter(goto) {
  const sceneA = new Dialog(empty, "I AM GROOT");

  const sceneB = new Dialog(empty, "Vous récoltez du bois");

  const answerA1 = new Answer({ text: "Récolter du bois", goto: sceneB });
  sceneA.addAnswer(answerA1);

  const answerA2 = new Answer({
    text: "S'en aller",
    goto: exitScene(),
  });
  sceneA.addAnswer(answerA2);

  if (goto === undefined) {
    goto = sceneA;
  }

  return goto;
}
