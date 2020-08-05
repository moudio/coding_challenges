class LFU {
  constructor(maxSize = 1) {
    this.size = 0;
    this.cache = {};
  }

  //add
  add(key, val) {
    if (this.size === this.maxSize) {
      this.cache.keys((key) => {});
    }
    this.cache[key] = [val, 0];
    this.size += 1;
  }

  use(key) {
    if (this.cache[key]) {
      this.cache[key][1] += 1;
      return this.cache[key][0];
    }
    throw Error('This element is not in the cache');
  }
}

const LFUCache = new LFU();
LFUCache.add('req1', 'res1');
console.log(LFUCache);
LFUCache.use('req1');
LFUCache.add('req2', 'res2');

console.log(LFUCache);
