import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Avatar from "./Avatar";

describe("Avatar", () => {
  const user = {
    profileImg: "https://placekitten.com/200/200",
    displayName: "Kathrine Cat",
  };

  it("renders a default avatar", () => {
    render(<Avatar user={user} />);

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://placekitten.com/200/200"
    );
  });
});
