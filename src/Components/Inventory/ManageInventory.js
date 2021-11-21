import { useState } from "react";

export function AddObjectInInventoryOLD(inventory, answer) {
  if (inventory.itemTypeInInventory < inventory.inventorySize) {
    inventory.list.object.push(answer.itemProps);
    inventory.itemInInventory++;
    inventory.displayNotification = true;
  } else {
    inventory.isFull = true;
  }
}

export function AddObjectInInventory(inventory, answer) {
  //console.log(answer.itemProps);

  //answer.itemProps.numberOfThisObject

  var objectToAdd = answer.itemProps.name;

  //console.log("objectToAdd", objectToAdd);

  var objectsAlreadyInInventory = [];

  for (let i = 0; i < inventory.list.objects.length; i++) {
    objectsAlreadyInInventory[i] = inventory.list.objects[i].name;
  }

  //console.log("objectsAlreadyInInventory", objectsAlreadyInInventory);

  if (objectsAlreadyInInventory.includes(objectToAdd)) {
    //console.log("deja là");
    inventory.list.objects[objectsAlreadyInInventory.indexOf(objectToAdd)]
      .numberOfThisObject++;
    inventory.itemInInventory++;
    inventory.displayNotification = true;
  } else {
    if (inventory.itemTypeInInventory < inventory.inventorySize) {
      inventory.list.objects.push(answer.itemProps);
      inventory.itemTypeInInventory++;
      inventory.itemInInventory++;
      inventory.displayNotification = true;
    } else {
      inventory.isFull = true;
    }
  }

  // if (inventory.list.objects.includes(objectToAdd)) {
  //   console.log("deja là");
  // } else {
  //   console.log("Retour du else");
  // }
  // if (inventory.itemTypeInInventory < inventory.inventorySize) {
  //   inventory.list.objects.push(answer.itemProps);
  //   inventory.itemTypeInInventory++;
  //   inventory.itemInInventory++;
  //   inventory.displayNotification = true;
  // } else {
  //   inventory.isFull = true;
  // }

  // console.log(inventory);
}

//WIP WIP WIP

/*function defineItemOnCaracter(item) {
  let itemOnCaracter = { head: 0, body: 0, leftArm: 0, rightArm: 0, legs: 0 };

  switch (item) {
    case item.itemSlotPosition === "head":
      const name = item.name;
      itemOnCaracter.head = name;
    case item.itemSlotPosition === "legs":
      const name = item.name;
      itemOnCaracter.legs = name;
    default:
      break;
  }

  return itemOnCaracter;
}*/

/*
Item {name: 'chefHat', fill: 'url(#chefHat)', numberOfThisObject: 1, reusable: true, wearable: true, …}
fill: "url(#chefHat)"
itemSlotPosition: "head"
name: "chefHat"
numberOfThisObject: 1
reusable: true
wearable: true*/

export function equipItem(item) {
  if (item.wearable === true) {
  }

  return console.log("test", item);
}
