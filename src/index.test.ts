import { describe, expect, it } from "vitest";
import { getStartupMessage } from "./index.js";

describe("getStartupMessage", () => {
  it("includes ISO timestamp", () => {
    const timestamp = "2026-03-13T00:00:00.000Z";
    const message = getStartupMessage(new Date(timestamp));

    expect(message).toContain("[numi-kicks] service started at");
    expect(message).toContain(timestamp);
  });
});
