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
