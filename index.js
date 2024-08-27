/**
 * Fetches a paginated list of items based on the provided parameters.
 *
 * @param {Object} params - The query parameters for filtering and pagination.
 * @param {number} [params.pageSize=10] - The number of items per page.
 * @param {number} [params.pageNum=1] - The current page number.
 * @returns {Promise} - A promise that resolves with a status code and paginated data.
 */
export const getList = (params) => {
  console.log("====query params====", JSON.parse(JSON.stringify(params || {})));
  const { pageSize = 10, pageNum = 1, ...rest } = params || {};
  const conditions = Object.keys(rest);

  const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
  const filterRes = items.filter((item) => {
    const isValidCondition = (k) =>
      ["", null, NaN, undefined].includes(rest[k]) === false;
    // these will drop which condition is not empty and not equal
    if (conditions.some((k) => isValidCondition(k) && rest[k] !== item[k])) {
      return false;
    }
    return true;
  });

  // pagination
  const lastRes = filterRes.slice((pageNum - 1) * pageSize, pageNum * pageSize);
  const res = {
    code: 200,
    data: {
      list: lastRes,
      total: filterRes.length,
    },
  };
  console.log("====responst data====", JSON.parse(JSON.stringify(res || {})));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 300);
  });
};

/**
 * Retrieves a dictionary value associated with the given key from local storage.
 * @param {string} key - The key to look up in the dictionary.
 * @returns {Promise} - A promise that resolves with a status code and the dictionary value.
 */
export const getDict = (key) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const dictObj = JSON.parse(localStorage.getItem("__DEMO_DICT__") || "{}");
      resolve({
        code: 200,
        data: dictObj[key],
      });
    }, 300);
  });
};

/**
 * Retrieves multiple dictionary values associated with the given keys from local storage.
 * @param {Array|string} keys - An array or comma-separated string of keys to look up.
 * @returns {Promise} - A promise that resolves with a status code and an object containing the dictionary values.
 */
export const getDicts = (keys = []) => {
  const _keys = typeof keys === "string" ? keys.split(",") : keys;
  const dictObj = JSON.parse(localStorage.getItem("__DEMO_DICT__") || "{}");
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = {};
      _keys.forEach((key) => {
        res[key] = dictObj[key];
      });
      resolve({
        code: 200,
        data: res,
      });
    }, 300);
  });
};

/**
 * Retrieves an item by its ID from local storage.
 * @param {string} id - The ID of the item to retrieve.
 * @returns {Promise} - A promise that resolves with a status code and the retrieved item.
 */
export const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
      const res = items.find((t) => t.id === id) || {};
      resolve({
        code: 200,
        data: res,
      });
    }, 300);
  });
};

/**
 * Updates an existing item in local storage.
 * @param {Object} obj - The updated item object.
 * @returns {Promise} - A promise that resolves with a status code.
 */
export const updateItem = (obj) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
      const inx = items.findIndex((t) => t.id === obj.id);
      items.splice(inx, 1, obj);
      localStorage.setItem("__DEMO_LIST__", JSON.stringify(items));
      resolve({ code: 200, data: null });
    }, 300);
  });
};

/**
 * Adds a new item to local storage.
 * @param {Object} obj - The new item object.
 * @returns {Promise} - A promise that resolves with a status code.
 */ export const addItem = (obj) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
      if (!obj.id) {
        obj.id = new Date().getTime().toString();
      }
      items.unshift(obj);
      localStorage.setItem("__DEMO_LIST__", JSON.stringify(items));
      resolve({ code: 200, data: null });
    }, 300);
  });
};

/**
 * Deletes an item by its ID from local storage.
 * @param {string} id - The ID of the item to delete.
 * @returns {Promise} - A promise that resolves with a status code.
 */
export const deleteItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
      const inx = items.findIndex((t) => t.id === id);
      items.splice(inx, 1);
      localStorage.setItem("__DEMO_LIST__", JSON.stringify(items));
      resolve({ code: 200, data: null });
    }, 300);
  });
};

/**
 * Deletes multiple items by their IDs from local storage.
 * @param {Array} ids - An array of IDs of the items to delete.
 * @returns {Promise} - A promise that resolves with a status code.
 */
export const batchDelete = (ids) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("__DEMO_LIST__") || "[]");
      const inx = items.findIndex((t) => ids.includes(t.id));
      items.splice(inx, 1);
      const filterRes = items.filter((t) => !ids.includes(t.id));
      localStorage.setItem("__DEMO_LIST__", JSON.stringify(filterRes));
      resolve({ code: 200, data: null });
    }, 300);
  });
};

/**
 * Sets the list of items in local storage.
 * @param {Array} data - The array of items to store.
 */
export const setList = (data) => {
  localStorage.setItem("__DEMO_LIST__", JSON.stringify(data));
};

/**
 * Sets the dictionary in local storage.
 * @param {Object} data - The dictionary to store.
 */
export const setDict = (data) => {
  localStorage.setItem("__DEMO_DICT__", JSON.stringify(data));
};
