import LogoKartsAndCars from "../LogoKartsAndCars.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe("LogoKartsAndCars", () => {
  it("renders properly", () => {
    const wrapper = mount(LogoKartsAndCars);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
