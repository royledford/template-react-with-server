import Avatar from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   size: {
  //     control: { type: "select", options: ["small", "medium", "large"] },
  //   },
  // },
};

export const Example = () => {
  const user = {
    profileImg: "https://placekitten.com/200/200",
    displayName: "Kathrine Cat",
  };

  return (
    <div style={{ display: "flex", columnGap: 16 }}>
      <Avatar user={user} size="small" />
      <Avatar user={user} size="medium" />
      <Avatar user={user} size="large" />
    </div>
  );
};

export const NoImage = () => {
  const user = {
    profileImg: null,
    displayName: "kathrine Cat",
  };

  return (
    <div style={{ display: "flex", columnGap: 16 }}>
      <Avatar user={user} size="small" />
      <Avatar user={user} size="medium" />
      <Avatar user={user} size="large" />
    </div>
  );
};
