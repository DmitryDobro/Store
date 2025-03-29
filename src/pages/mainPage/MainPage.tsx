import Banner from "@/pages/mainPage/components/Banner/Banner";
import CategoryList from "./components/CategoryList/CategoryList";
import ProductList from "./components/ProductList/ProductList";
import Brends from "./components/Brends/Brends";
import Blogs from "./components/Blogs/Blogs";
import { useGetProductsQuery } from "@/api/productApi";

function MainPage() {
  const test = useGetProductsQuery()
  console.log(test);
  
  return (
  <>
  <Banner></Banner>
  <CategoryList></CategoryList>
  <ProductList></ProductList>
  <Brends></Brends>
  <Blogs></Blogs>
  </>
  );
}
export default MainPage;
