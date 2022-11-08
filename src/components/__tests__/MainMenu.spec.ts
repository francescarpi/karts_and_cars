import MainMenu from "../MainMenu/MainMenu.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("MainMenu", () => {
  it("renders properly", () => {
    const wrapper = mount(MainMenu);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
