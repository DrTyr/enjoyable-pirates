import { Item } from "./ItemClass";

//Liste des items possibles
//Paramètres :
/*
name,
fill,
numberOfThisObject,
reusable, //Bool
wearable, //Bool
itemSlotPosition, //if wearable, where ?
*/

export let chefHat = new Item({
  name: "chefHat",
  fill: "url(#chefHat)",
  numberOfThisObject: 1,
  wearable: true,
  itemSlotPosition: "head",
  reusable: false,
});

export let tree = new Item({
  name: "wood",
  fill: "url(#treeTrunk2)",
  numberOfThisObject: 1,
  reusable: false,
});

export let boots = new Item({
  name: "boots",
  fill: "url(#boots)",
  numberOfThisObject: 1,
  wearable: true,
  itemSlotPosition: "legs",
  reusable: false,
});
