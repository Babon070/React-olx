import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Search from "../../component/search/Search";
import UseFetchData from "../../hooks/useFetchData";
import Container from "../../utilis/Container";
import "./Category.scss";

const Category = () => {
  const { t } = useTranslation();
  const categoryId = useParams();
  const [data, isLoading] = UseFetchData(
    `/categories/${categoryId.id}/products`
  );

  console.log(data);
  const trimDesc = (str) => {
    return str?.split(" ").splice(0, 5).join(" ") + "...";
  };

  return (
    <section className="by__category">
      <Container>
        <Search />
        <div className="single__category--wrapper">
          {data.map((category) => (
            <div key={category.id} className="category__item--products">
              <Link to={`/products/${category.id}`}>
                <img className="category__img" src={category.images} alt="" />
              </Link>
              <div className="title_categ">
                <div className="category_desc">
                  <h2>{category.title}</h2>
                  <p>{trimDesc(category.description)}</p>
                </div>
                <button className="btn__searchResult">Add to Card</button>
              </div>
              <div className="prices">
                <strong>
                  ${category.price}
                  <small>{t("product_sale")}</small>
                </strong>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
