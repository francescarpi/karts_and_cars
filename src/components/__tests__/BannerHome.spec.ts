import BannerHome from "../BannerHome.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("BannerHome", () => {
  it("renders properly", () => {
    const wrapper = mount(BannerHome);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
