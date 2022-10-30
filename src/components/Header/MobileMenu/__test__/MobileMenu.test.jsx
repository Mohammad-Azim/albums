import { render, screen } from "@testing-library/react";
import MobileMenu from "../MobileMenu";
import Header from "../../Header";

describe(MobileMenu, () => {
  it("check if the mobile menu hiddin when the screen lg", () => {
    render(<MobileMenu isNavOpen={false} userName={"user"} />);
    const menuMobile = screen.getByTestId("MobileMenu").classList;

    expect(menuMobile).toContain("lg:hidden");
  });

  it("check if mobile menu have all choices", () => {
    render(<MobileMenu isNavOpen={false} userName={"user"} />);
    const menuMobile = screen.getAllByRole("mobileChoises");

    menuMobile.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    expect(menuMobile.length).toEqual(5);
  });
});
