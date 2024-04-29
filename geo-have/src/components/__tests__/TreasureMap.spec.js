import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TreasureMap from "@/components/TreasureMap.vue";

describe("TreasureMap", () => {
  it("renders map container and task overlay", () => {
    const wrapper = mount(TreasureMap);

    expect(wrapper.find(".map-container").exists()).toBe(true);
    expect(wrapper.findComponent({ name: "TaskOverlay" }).exists()).toBe(true);
  });

  it("toggles visibility of treasure areas when toggleTreasureAreas is called", async () => {
    const wrapper = mount(TreasureMap);

    // Call the toggleTreasureAreas function
    await wrapper.vm.toggleTreasureAreas();

    // Assert that the showTreasureArea1 value has been toggled
    expect(wrapper.vm.showTreasureArea1).toBe(true);

    // Call the toggleTreasureAreas function again
    await wrapper.vm.toggleTreasureAreas();

    // Assert that the showTreasureArea1 value has been toggled back to false
    expect(wrapper.vm.showTreasureArea1).toBe(false);
  });
});
