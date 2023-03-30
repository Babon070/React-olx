import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../../utilis/Container";
import "./Shop.scss";
import { Link, useHistory } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";

const Shop = () => {
    const history = useHistory()
    const dispatch = useDispatch()

  const addToBuy = useSelector((state) => state.ShopReducer.addToBuy);
  console.log(addToBuy);

  function trimDescription(str) {
    return str.split(" ").splice(0, 10).join(" ") + "...";
  }

  function removebyShops(products){
    dispatch({id: products.id, type: "REMOVE_BY_SHOP"})

    if(addToBuy.length === 0) history.push('/')
  }

  return !addToBuy.length ? <p className="shop_card">No cards!</p> : (
    <section>
      <Container>
        <div className="main__products--wrapper">
          {addToBuy?.map((products) => (
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
                    addToBuy.find((p) => p?.id === products?.id) ?  <AiOutlineShoppingCart onClick={() => removebyShops(products)} style={{ cursor: "pointer", color: "red" }}/> : <AiOutlineShoppingCart />
                }

               
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Shop;
