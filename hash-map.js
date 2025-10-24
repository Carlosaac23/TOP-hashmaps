export class HashMap {
  constructor(load_factor = 0.75, capacity = 16) {
    this.load_factor = load_factor;
    this.capacity = capacity;
    this.buckets = new Array(capacity);
  }

  // Takes a key and produces a hash code
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  // Add new bucket
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds.');
    }

    // If bucket is empty, add new bucket
    if (!bucket) {
      this.buckets[index] = [[key, value]];
      return;
    }

    // Otherwise, if bucket is not empty, update the value
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    // Add other bucket with the same key (collision)
    bucket.push([key, value]);
  }

  // Return the value that is assigned to this key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds.');
    }

    if (!bucket) return null;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }

    return null;
  }

  // Return true or false if the given key it is in the hash map
  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds.');
    }

    if (!bucket) return false;

    for (const pair of bucket) {
      if (pair[0] === key) return true;
    }

    return false;
  }

  // If the given key is in the hash map, it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bounds.');
    }

    if (!bucket) return false;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  // Returns the number of stored keys in the hash map
  length() {
    let keys = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];
      if (bucket) {
        keys += bucket.length;
      }
    }

    return keys;
  }

  // Remove all entries in the hash map
  clear() {
    this.buckets = new Array(this.capacity);
  }

  // Return an array containing all the keys in the hash map
  keys() {
    let keys = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          keys.push(pair[0]);
        }
      }
    }

    return keys;
  }

  // Return an array containing all the values in the hash map
  values() {
    let values = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          values.push(pair[1]);
        }
      }
    }

    return values;
  }

  // Return an array that contains each pair in the hash map
  entries() {
    let pairs = [];

    for (const bucket of this.buckets) {
      if (bucket) {
        for (const pair of bucket) {
          pairs.push(pair);
        }
      }
    }

    return pairs;
  }
}
