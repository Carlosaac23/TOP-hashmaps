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

    // If bucket is empty
    if (!bucket) {
      this.buckets[index] = [[key, value]];
      return;
    }

    // Otherwise, if bucket is not empty
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
  }

  // Return the value that is assigned to this key
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    if (!bucket) return null;

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }
}
