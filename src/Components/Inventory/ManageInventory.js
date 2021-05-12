export function AddObjectInInventory(inventory, answer) {
  if (inventory.itemInInventory < inventory.inventorySize) {
    inventory.list.push(answer.itemProps);
    inventory.itemInInventory++;
    inventory.displayNotification = true;
  } else {
    inventory.isFull = true;
  }
}
