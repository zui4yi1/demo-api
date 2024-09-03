declare module "demo-curd" {
  /**
   * Retrieves a list of items.
   * @param params Optional parameters object including page size and page number.
   * @returns A Promise containing a status code and a data object with a list and total count.
   */
  export function getList(params?: {
    pageSize?: number;
    pageNum?: number;
    [key: string]: any;
  }): Promise<{ code: number; data: { list: any[]; total: number } }>;

  /**
   * Retrieves dictionary data for a specified key.
   * @param key The dictionary key.
   * @returns A Promise containing a status code and a data object.
   */
  export function getDict(key: string): Promise<{ code: number; data: any }>;

  /**
   * Retrieves dictionary data for multiple keys.
   * @param keys A single key or an array of keys.
   * @returns A Promise containing a status code and a data object in record form.
   */
  export function getDicts(
    keys: string | string[]
  ): Promise<{ code: number; data: Record<string, any> }>;

  /**
   * Retrieves details of a single item.
   * @param id The ID of the item.
   * @returns A Promise containing a status code and a data object.
   */
  export function getItem(id: string): Promise<{ code: number; data: any }>;

  /**
   * Updates an item.
   * @param obj An object containing update information.
   * @returns A Promise containing a status code and a data object.
   */
  export function updateItem(obj: any): Promise<{ code: number; data: null }>;

  /**
   * Adds a new item.
   * @param obj An object containing item information.
   * @returns A Promise containing a status code and a data object.
   */
  export function addItem(obj: any): Promise<{ code: number; data: null }>;

  /**
   * Deletes a single item.
   * @param id The ID of the item.
   * @returns A Promise containing a status code and a data object.
   */
  export function deleteItem(id: string): Promise<{ code: number; data: null }>;

  /**
   * Deletes multiple items.
   * @param ids An array of item IDs.
   * @returns A Promise containing a status code and a data object.
   */
  export function batchDelete(
    ids: string[]
  ): Promise<{ code: number; data: null }>;

  /**
   * Sets the list data.
   * @param data An array of list items.
   */
  export function setList(data: any[]): void;

  /**
   * Sets the dictionary data.
   * @param data A record object containing key-value pairs.
   */
  export function setDict(data: Record<string, any>): void;
}
