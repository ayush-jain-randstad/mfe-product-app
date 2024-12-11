import { screen,render } from "@testing-library/react";
import ProductList from "../Components/ProductPage";
import { IResponse } from "../Components/ProductPage";

test("Product List Page", async()=> {
    const response: IResponse = {
        limit : "1",
        products : [{
            id: 1,
            images: [''],
            price : '3234',
            title: 'test title'
        }],
        skip: '',
        total: ''
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => response,
    });
    render (<ProductList />)    
    const productTitle = await screen.findByText('test title')
    expect(productTitle).toBeInTheDocument()
})


