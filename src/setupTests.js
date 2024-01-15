// tests/setup.ts
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

// extend vitest's expect with jest-dom's matchers only
expect.extend(matchers);
