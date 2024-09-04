export type UserData = {
    name: string;
    password: string;
};

export const userTestData: UserData = {
    name: `Peter${Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000}`,
    password: 'Test1234',
};

export type OrderData = {
    name: string;
    country: string;
    city: string;
    creditCard: string;
    month: string;
    year: string;
};

export const orderTestData = {
    name: 'Test',
    country: 'Sweden',
    city: 'Malmo',
    creditCard: '123',
    month: '01',
    year: '2000',
};
