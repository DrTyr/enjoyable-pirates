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

  //test

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

export function equipItem(
  item,
  itemsOnCaracter,
  setItemsOnCaracter,
  inventory,
) {
  //let itemEquiped = 0;

  console.log("item : ", item);

  if (item.wearable === true) {
    switch (item.itemSlotPosition) {
      case "head":
        itemsOnCaracter.head.itemName = item.name;
        itemsOnCaracter.head.equiped = 1;
        itemsOnCaracter.head.itemFill = item.fill;
        //itemEquiped = 1;
        removeObjectFromInventory(inventory, item);
        break;
      case "legs":
        itemsOnCaracter.legs.itemName = item.name;
        itemsOnCaracter.legs.equiped = 1;
        itemsOnCaracter.legs.itemFill = item.fill;
        //itemEquiped = 1;
        removeObjectFromInventory(inventory, item);
        break;
      default:
        console.log("item pas reconnu :", item.name);
        break;
    }

    setItemsOnCaracter(itemsOnCaracter);

    //console.log(itemsOnCaracter);
  } else {
    return console.log("item pas équipable :", item.name);
  }
}

export function removeObjectFromInventory(inventory, item) {
  var objectToRemove = item.name;

  //console.log("objectToAdd", objectToAdd);

  var objectsAlreadyInInventory = [];

  for (let i = 0; i < inventory.list.objects.length; i++) {
    objectsAlreadyInInventory[i] = inventory.list.objects[i].name;
  }

  let posObject = objectsAlreadyInInventory.indexOf(objectToRemove);

  inventory.list.objects[posObject].numberOfThisObject--;
  inventory.itemInInventory--;

  if (inventory.list.objects[posObject].numberOfThisObject <= 0) {
    inventory.list.objects.splice(posObject, 1);
  }

  return inventory;
}
