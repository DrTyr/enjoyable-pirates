export function AddObjectInInventory(inventory, answer) {
  if (inventory.itemInInventory < inventory.inventorySize) {
    inventory.list.push(answer.itemProps);
    inventory.displayNotification = true;
  } else {
    inventory.isFull = true;
  }
}
