type ID = string | number;

let id1: ID = "abcde";
let id2: ID = 101;

// with objects
type Vehicle = {
  name: string;
  model: string;
  price: number;
};

// intersection types (&)
let config: { server: string; port: number } & {
  secure: boolean;
  timeout: number;
} = {
  server: "localhost",
  port: 8080,
  secure: true,
  timeout: 5000,
};
