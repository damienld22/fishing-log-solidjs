import { Db, MongoClient } from 'mongodb';

export class Database {
  private db?: Db;
  private static instance: Database;

  private constructor() {}

  async init() {
    const mongoUrl = import.meta.env.VITE_MONGODB_URL;
    const mongoDatabaseName = import.meta.env.VITE_MONGODB_NAME;

    if (!mongoUrl) {
      throw new Error('Mongo URL is missing. Check env variables.');
    }

    if (!mongoDatabaseName) {
      throw new Error('Mongo database name is missing. Check env variables.');
    }

    const client = new MongoClient(mongoUrl);
    await client.connect();
    this.db = client.db(mongoDatabaseName);
  }

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  getDb() {
    if (!this.db) {
      throw new Error('DB is not init');
    }
    return this.db;
  }
}
