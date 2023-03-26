import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { Button } from "../components/Button";

describe("Counter app testing", () => {
    it("should render without any error", () => {
        render(<Button>Click Me</Button>);
        const button = screen.getByTestId("custom-btn");
        expect(button).toBeInTheDocument();
    });

    it("should have add and reduce buttons", () => {
        render(<App />);
        const buttons = screen.getAllByTestId("custom-btn");
        expect(buttons[0]).toHaveTextContent("ADD");
        expect(buttons[1]).toHaveTextContent("REDUCE");
    });

    it("should have an element with counter value as default ( 0 )", () => {
        render(<App />);
        const text = screen.getByTestId("counter");
        expect(text).toHaveTextContent("Counter: 0");
    });

    it("onClick of ADD, value of Counter should increment by 5", () => {
        render(<App />);
        const text = screen.getByTestId("counter");
        const addBtn = screen.getByText("ADD");
        fireEvent.click(addBtn);
        expect(text).toHaveTextContent("Counter: 5");
    });

    it("onClick of REDUCE, the value of Counter should decrement by 5", ()=>{
        render(<App/>)
        const text=screen.getByTestId("counter")
        const reduceBtn = screen.getByText("REDUCE")
        fireEvent.click(reduceBtn)
        expect(text).toHaveTextContent("Counter: -5")
    })
});
