import BannerSection from "@/views/home/components/BannerSection.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("BannerSection", () => {
  it("renders properly", () => {
    const wrapper = mount(BannerSection);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
