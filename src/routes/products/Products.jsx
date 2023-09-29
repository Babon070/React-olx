import React from "react";
import "./Products.scss";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
const Products = () => {
  const likedProducts = useSelector((state) => state.likeReducer.likeProducts);
  const productIdData = useParams();
  const dispatch = useDispatch();
  const [data, setLoading] = useFetchData(`/products/${productIdData.id}`);
  console.log(data);

  function addToLike(products) {
    dispatch({
      products,
      type: "LIKE_PRODUCT",
    });
  }

  function removeFromLikeProducts(data) {
    dispatch({ id: data.id, type: "REMOVE_FROM_LIKE" });
  }

  const trimDescProducts = (str) => {
    return str?.split(" ").slice(0, 7).join(" ") + "...";
  };

  return (
    <section className="single__product">
      <Container>
        <div className="product__wrapper">
          {data.images?.at(0) && data.images?.at(0).startsWith("https://") ? (
            <img
              className="single__product--img"
              src={data.images?.at(0)}
              alt="img"
            />
          ) : (
            <img
              className="single__product--img"
              src="https://avatars.mds.yandex.net/get-mpic/6780724/img_id5398870021742881284.jpeg/orig"
              alt=""
            />
          )}

          <div className="product__item--info">
            <div className="title_product">
                <h2>{data.title}</h2>
                <p>{trimDescProducts(data.description)}</p>
                <strong>${data.price}</strong>

              <div className="like_heart_product">
                <button>Add to card</button>
                {likedProducts.find((p) => p?.id === data?.id) ? (
                  <AiFillHeart
                    onClick={() => removeFromLikeProducts(data)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => addToLike(data)}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
