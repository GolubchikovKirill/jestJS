import { getHealthStatus } from "../src/health.js";
import { test, expect, describe } from "@jest/globals";

describe("getHealthStatus", () => {
test("healthy when > 50", () => {
expect(getHealthStatus({ health: 90 })).toBe("healthy");
});
test("wounded when 50..15", () => {
expect(getHealthStatus({ health: 50 })).toBe("wounded");
expect(getHealthStatus({ health: 15 })).toBe("wounded");
});
test("critical when < 15", () => {
expect(getHealthStatus({ health: 10 })).toBe("critical");
});
});