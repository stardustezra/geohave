import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Modal from "@/components/Modal.vue";

describe("Modal", () => {
  it("emits 'close' event when close button is clicked", async () => {
    const wrapper = mount(Modal, {
      props: { modalActive: true },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });

  it("emits 'okClicked' event when OK button is clicked", async () => {
    const wrapper = mount(Modal, {
      props: { modalActive: true },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("okClicked")).toBeTruthy();
  });
});
