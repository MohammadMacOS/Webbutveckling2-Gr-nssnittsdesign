//import { render, fireEvent } from "@testing-library/react"

let getByTestID

test(() => {
    const component = render(<Profile/>);
    getByTestID = component.getByTestId;
})

