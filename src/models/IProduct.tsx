export default interface Product{
    name: string,
    prise: {
      mainPrise: number,
      salePrise: number,
    },
    specifications: string[],
    img: string,
    type: string,
    id:number
  }