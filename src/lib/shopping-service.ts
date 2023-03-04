import { Db, ObjectId } from 'mongodb';
import { NewShoppingListItem, ShoppingListItem } from '../models/shopping';
import { Database } from './database';

export class ShoppingService {
  db: Db;
  collectionName = 'shopping';
  private static instance: ShoppingService;

  private constructor() {
    this.db = Database.getInstance().getDb();
  }

  public static getInstance() {
    if (!ShoppingService.instance) {
      ShoppingService.instance = new ShoppingService();
    }

    return ShoppingService.instance;
  }

  async getAllItems(): Promise<ShoppingListItem[]> {
    console.debug(`Get items from ${this.collectionName} collection`);
    const itemsFromDb = await this.db.collection(this.collectionName).find().toArray();
    return itemsFromDb as unknown as ShoppingListItem[];
  }

  async addNewItem(item: NewShoppingListItem) {
    console.debug(`Add item ${item.label} to ${this.collectionName} collection`);
    await this.db.collection(this.collectionName).insertOne(item);
  }

  async deleteItem(itemId: string) {
    console.debug(`Remove item ${itemId} from ${this.collectionName} collection`);
    await this.db.collection(this.collectionName).deleteOne({ _id: new ObjectId(itemId) });
  }
}
