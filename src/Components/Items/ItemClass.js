export class Item {
  constructor({
    name,
    fill,
    numberOfThisObject,
    reusable, //Bool
    wearable, //Bool
    itemSlotPosition, //if wearable, where ?
  }) {
    this.name = name;
    this.fill = fill;
    this.numberOfThisObject = numberOfThisObject;
    this.reusable = reusable;
    this.wearable = wearable;
    this.itemSlotPosition = itemSlotPosition;
  }
}
