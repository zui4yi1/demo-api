# In-memory Data Management Utilities

This JavaScript module provides a suite of utility functions to manage in-memory data storage, specifically designed for demonstrative purposes or mock backend functionality. Utilizing the browser's localStorage, these methods simulate CRUD operations (Create, Read, Update, Delete) on a list of items and a dictionary, useful for front-end development testing and prototyping.

## Functions Overview

#### getList(params)

Fetches a paginated list of items from local storage based on provided parameters such as pageSize and pageNum. Supports additional filter conditions through params.

#### getDict(key)

Retrieves a single value from a dictionary stored in local storage, identified by key.

#### getDicts(keys)

Retrieves multiple values from the dictionary based on an array or comma-separated string of keys.

#### getItem(id)

Retrieves a specific item from the list by its id.

#### updateItem(obj)

Updates an existing item within the list based on the provided obj object.

#### addItem(obj)

Adds a new item to the list. If the item lacks an id, one is automatically generated.

#### deleteItem(id)

Deletes an item from the list using its id.

#### batchDelete(ids)

Deletes multiple items from the list by their ids.

#### setList(data)

Overwrites the current list in local storage with the provided data array.

#### setDict(data)

Replaces the dictionary in local storage with the new data object.

## Usage

Each function returns a promise that resolves after a simulated delay of 300ms with a status code (200 for success) and, where applicable, the requested data. These utilities can be used in a front-end application to mimic server responses without requiring an actual backend server setup.

To start using these functions:

1. Include this script in your project.
2. Call the desired methods with appropriate parameters to interact with the simulated data storage.

**Note**: Remember that localStorage is limited to strings; hence, objects are stringified before storage and parsed upon retrieval.

## Example Usage

```
// Fetch the first page of items with default settings
getList({}).then(response => console.log(response));

// Get a value from the dictionary
getDict('exampleKey').then(response => console.log(response));

// Add a new item
addItem({ name: 'New Item', description: 'A newly added item' }).then(() => console.log('Item added'));
```

These utilities are particularly handy for rapid prototyping, UI testing, or for developers who want to simulate backend responses during front-end development.
