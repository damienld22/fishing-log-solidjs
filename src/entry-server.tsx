import { StartServer, createHandler, renderAsync } from 'solid-start/entry-server';
import { Database } from './lib/database';

const database = Database.getInstance();
database.init();

export default createHandler(renderAsync((event) => <StartServer event={event} />));
