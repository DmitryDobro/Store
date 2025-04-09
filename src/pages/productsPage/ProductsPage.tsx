import CardProduct from '@/shared/UI/Card/CardProduct';
import {useParams} from 'react-router-dom';
import {useGetProductsByGenderQuery} from '@/shared/api/productApi';

function List() {
  const {param} = useParams();
  const {data} = useGetProductsByGenderQuery(param);
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-7">
        {data?.map((cardData, index) => (
          <CardProduct
            key={index}
            id={cardData.id}
            name={cardData.name}
            prise={{
              mainPrise: cardData.prise.mainPrise,
              salePrise: cardData.prise.salePrise,
            }}
            sale={cardData.sale}
            specifications={cardData.specifications}
            img={cardData.img}
            type={cardData.type}></CardProduct>
        ))}
      </div>
    </section>
  );
}
export default List;
