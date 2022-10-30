import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe(Footer, () => {
  it("display the footer fixed (footer have fixed class)", () => {
    render(<Footer />);
    const footerVal = screen.getByTestId("footer").classList;
    expect(footerVal).toContain("fixed");
  });

  it("display the footer icnos)", () => {
    render(<Footer />);
    const footerIcon = screen.getAllByRole("footerIcon");

    expect(footerIcon.length).toEqual(4);
  });

  it("display the copy right)", () => {
    render(<Footer />);
    const footerCopy = screen.getByTestId("copyRight").textContent;

    expect(footerCopy).toEqual(" © with love be moha");
  });
});
