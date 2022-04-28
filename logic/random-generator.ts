// @ts-nocheck
export class RandomGenerator {
  // source: https://stackoverflow.com/questions/521295
  static seed = 42;

  random() {
    const x = Math.sin(RandomGenerator.seed++) * 10000;
    return x - Math.floor(x);
  }

  random_between(min, max) {
    return min + this.random() * (max - min);
  }

  normal_between(min, max) {
    return min + (this.random() + this.random()) * 0.5 * (max - min);
  }
}
