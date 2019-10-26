import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Dummy Test", () => {
  it("is dumb", () => {
    expect(true).toBeTruthy();
  });
});


describe("Button Component", () => {

  it("should render to page", () => {
    
  })
  it("should increment the counter by one", () => {

  })
})