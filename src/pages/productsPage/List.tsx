import CardProduct from '@/UI/Card/CardProduct';
import {useParams} from 'react-router-dom';
import {useGetProductsByGenderQuery} from '@/api/productApi';

function List() {
  const {param} = useParams();
  const {data} = useGetProductsByGenderQuery(param);
  return (
    <section>
      <div className="flex gap-7 justify-between flex-wrap">
        {data?.map(cardData => (
          <CardProduct
            key={cardData.id}
            id={cardData.id}
            name={cardData.name}
            prise={{
              mainPrise: cardData.prise.mainPrise,
              salePrise: cardData.prise.salePrise,
            }}
            specifications={cardData.specifications}
            img={cardData.img}
            type={cardData.type}></CardProduct>
        ))}
      </div>
    </section>
  );
}
export default List;
