import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import Container from '../../utilis/Container';
import './Category.scss'


const Category = () => {
    const categoryId = useParams()
    const [data, isLoading] = UseFetchData(`/categories/${categoryId.id}/products`);

    console.log(data);
    const trimDesc = (str) => {
        return str?.split(" ").splice(0, 5).join(" ") + '...'
    };

    return (
        <section className='by__category'>
            <Container>
                <div className='single__category--wrapper'>
                    {
                        data.map(category => 
                            <div key={category.id} className='category__item--products'>
                                <Link to={`/products/${category.id}`}>
                                    <img className='category__img' src={category.images} alt="" />
                                </Link>
                                <div>
                                    <h2>{category.title}</h2>
                                    <p>{trimDesc(category.description)}</p>
                                    <strong>${category.price}</strong>
                                    <button className='btn__searchResult'>Add to Card</button>
                                </div>
                            </div>
                            )
                    }
                </div>
            </Container>
        </section>
    );
}

export default Category;
