import { sortByHealth } from "../src/sortByHealth.js";
import { describe, test, expect } from "@jest/globals";

describe("sortByHealth", () => {
  test("sorts by health desc", () => {
    const input = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];
    const result = sortByHealth(input);

    expect(result).toEqual([
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ]);

    // Убедиться, что исходный массив не изменился
    expect(input).toEqual([
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ]);
  });

  test("toBe fails for objects, toEqual passes (deep equality)", () => {
    const a = { name: "маг", health: 100 };
    const b = { name: "маг", health: 100 };

    expect(a === b).toBe(false); // пояснительно

    expect(a).toEqual(b);
  });

  test("handles already sorted and single-element arrays", () => {
    const sorted = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];
    expect(sortByHealth(sorted)).toEqual(sorted);

    const single = [{ name: "алхимик", health: 42 }];
    expect(sortByHealth(single)).toEqual(single);
  });
});
