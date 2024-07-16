# json-eq

## use in ts

```ts
import equal from "json-eq";

// the same object

const obj1 = {
  key1: "Hello",
  key2: false,
};

const obj2 = {
  key1: "Hello",
  key2: false,
};

equal(obj1, obj2); // returns true

// not the same value

const obj1 = {
  key1: "Hello",
  key2: false,
};

const obj2 = {
  key1: "World",
  key2: 2,
};

equal(obj1, obj2); // returns false
```

## use in js

```js
import equal from "json-eq";

// the same object

const obj1 = {
  key1: "Hello",
  key2: false,
};

const obj2 = {
  key1: "Hello",
  key2: false,
};

equal(obj1, obj2); // returns true

// not the same value

const obj1 = {
  key1: "Hello",
  key2: false,
};

const obj2 = {
  key1: "World",
  key2: 2,
};

equal(obj1, obj2); // returns false
```

## install

```bash
npm i json-eq
```

## Code

### ts

```ts
export default function equal<T1, T2>(obj1: T1, obj2: T2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
```

### js

```js
export default function equal(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}
```