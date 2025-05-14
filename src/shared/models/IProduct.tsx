export default interface Product {
  id: number;
  name: string;
  text?: string;
  prise: {
    mainPrise: number;
    salePrise: number;
  };
  specifications: string[];
  img: string;
  type: string;
  sale: boolean;
}
