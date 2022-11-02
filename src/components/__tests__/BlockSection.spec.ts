import BlockSection from "../BlockSection.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("BlockSection", () => {
  it("renders properly", () => {
    const wrapper = mount(BlockSection, {
      props: {
        title: "Foo",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
