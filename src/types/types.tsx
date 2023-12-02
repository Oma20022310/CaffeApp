export interface Dishes {
    id: string,
    name: string,
    img: string,
    price: number,
    description: string,
    weight: string,
    category: {
        id: string,
        name: string,
        img: string,
        url: string
    }
};

export interface Categories {
    id: string,
    name: string,
    img: string,
    url: string
};

export interface Basket {
    id: string,
    name: string,
    img: string,
    weight: string,
    price: number,
    count: number
};

export interface Orders {
    id: string,
    count: number,
    name: string,
    address: string,
    phone: string,
    totalPrice: number,
    order: Basket[]
};
