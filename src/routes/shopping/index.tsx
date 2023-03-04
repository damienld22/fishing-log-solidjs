import { For } from 'solid-js';
import { useRouteData } from 'solid-start';
import { createServerAction$, createServerData$ } from 'solid-start/server';
import { FaSolidTrash } from 'solid-icons/fa';
import { ShoppingService } from '~/lib/shopping-service';
import { NewShoppingListItem, ShoppingListItem } from '~/models/shopping';
import ListInput from '~/components/shared/ListInput';

export function routeData() {
  return createServerData$(
    async () => {
      const shoppingService = ShoppingService.getInstance();
      const data = await shoppingService.getAllItems();
      return data as ShoppingListItem[];
    },
    { key: 'shoppingItems' }
  );
}
async function addNewItemAction(newItem: NewShoppingListItem) {
  const shoppingService = ShoppingService.getInstance();
  await shoppingService.addNewItem(newItem);
}

async function deleteItemAction(itemId: string) {
  const shoppingService = ShoppingService.getInstance();
  await shoppingService.deleteItem(itemId);
}

export default function Shopping() {
  const items = useRouteData<typeof routeData>();
  const [_adding, addNewItem] = createServerAction$(addNewItemAction, { invalidate: 'shoppingItems' });
  const [_deleting, deleteItem] = createServerAction$(deleteItemAction, { invalidate: 'shoppingItems' });

  return (
    <div class="flex flex-col mx-4">
      <ul class="list-disc list-inside pb-2">
        <For each={items()}>
          {(item) => (
            <li class="list-item relative py-2 flex-col items-center justify-center">
              <span>{item.label}</span>
              <div
                onClick={() => deleteItem(item._id)}
                class="absolute right-2 top-0 bottom-0 my-auto flex flex-col items-center justify-center"
              >
                <FaSolidTrash />
              </div>
            </li>
          )}
        </For>
      </ul>
      <ListInput placeholder="New item" onValidate={(label: string) => addNewItem({ label })} />
    </div>
  );
}
