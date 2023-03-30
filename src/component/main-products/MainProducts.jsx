import React from "react";
import Container from "../../utilis/Container";
import "./MainProducts.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const MainProducts = () => {

    const likedProducts = useSelector(state => state.likeReducer.likeProducts)
    const addToBuy = useSelector(state=> state.ShopReducer.addToBuy)
    console.log(addToBuy);


  const dispatch = useDispatch();
  const [data, loading] = useFetchData("/products?offset=0&limit=20");
  const { t } = useTranslation();
  
  function trimDescription(str) {
    return str.split(" ").slice(0, 5).join(" ") + "...";
  }
 
  function addToLike(products) {
    dispatch(
        {
            products, type: "LIKE_PRODUCT"
        }
        );
  }

  function addToCard(products){
    dispatch(
      {
        products, type: "ADD_TO_BUY"
      }
    )
  }

  function removeFromLikeProducts(products){
    dispatch({id: products.id, type: "REMOVE_FROM_LIKE"})

  }
  function removeFromShopProducts(products){
    dispatch({id: products.id, type: "REMOVE_BY_SHOP"})
  }

 

  return (
    <section className="main__products">
      <Container>
        <h2 className="products__title">{t("Prosucts_title")}</h2>
        <div className="main__products--wrapper">
          {!loading ? (
            data.map((products) => (
              <div key={products.id} className="products__item">
                <Link to={`/products/${products.id}`}>
                  {products.images?.at(0) &&
                  products.images?.at(0).startsWith("https://") ? (
                    <img
                      className="product__item--img"
                      src={products.images?.at(0)}
                      alt=""
                    />
                  ) : (
                    <img
                      className="product__item--img"
                      src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
                      alt=""
                    />
                  )}
                  <h3>{products.title}</h3>
                </Link>
                <div className="product__info">
                  <div>
                    <p>{trimDescription(products.description)}</p>
                    <strong>${products.price}</strong>
                  </div>

                  {
                    addToBuy.find(p => p?.id === products?.id) ? <AiOutlineShoppingCart onClick={()=> removeFromShopProducts(products)} style={{color: 'red', cursor: 'pointer'}}  /> : <AiOutlineShoppingCart style={{cursor: 'pointer'}} onClick={()=> addToCard(products)}  />
                  }
                      
                  {
                     likedProducts.find(p => p?.id === products?.id) ? <AiFillHeart onClick={() => removeFromLikeProducts(products)} style={{color: 'red', cursor: 'pointer'}} /> : <AiOutlineHeart style={{cursor: 'pointer'}} onClick={() => addToLike(products)} />
                  }
                </div>
              </div>
            ))
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default MainProducts;
