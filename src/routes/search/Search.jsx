import React, { useEffect, useState } from 'react';
import './Search.scss'
import { Link, useParams } from 'react-router-dom';
import UseFetchdata from '../../hooks/useFetchData';
import Container from '../../utilis/Container';
import SearchCom from '../../component/search/Search'
import instance from '../../api/instance';
import { useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Search = () => {
    const [loverSelect, setLoverSelect] = useState(1)
    const [upperSelect, setUpperSelect] = useState(1)
    const [filterResult, setFilterResult] = useState([])
    const likedProducts = useSelector(state => state.likeReducer.likeProducts)
    

    const productsInfo = useParams()
    var [data, loading] = UseFetchdata(`/products/?title=${productsInfo.productName}`)
    const price = [1, 10, 100, 1000, 10000]

    useEffect(()=> {
        if(loverSelect > upperSelect){
            setLoverSelect(upperSelect)
            setUpperSelect(loverSelect)
        }
        instance.get(`/products/?title=${productsInfo.productName}&price_min=${loverSelect}&price_max=${upperSelect}`)
        .then(response => setFilterResult(response.data))
    },[loverSelect, upperSelect])

    if(filterResult.length > 0) data = filterResult
    console.log(filterResult);

    const trimDesc = (str) => {
            return str?.split(" ").splice(0, 5).join(" ") + '...'
    }
    return (
        <section className='search__result'>
                <SearchCom/>
            <Container>
                <div className="search__filters">
                    <select value={loverSelect} onChange={(e) => setLoverSelect(e.target.value)}>
                        {
                            price.map(price => 
                                <option  value={`${price}`}>
                                    {price}
                                </option>
                                )
                        }
                    </select>

                    <select value={upperSelect} onChange={(e) => setUpperSelect(e.target.value)}>
                        {
                            price.map(price => 
                                <option  value={`${price}`}>
                                    {price}
                                </option>
                                )
                        }
                    </select>
                </div>
                
               <div className='search__result--wrapper'>
                    {
                        data.map(item => 
                            <div key={item.id} className='product__item--search'>
                                <Link to={`/products/${item.id}`}>
                                    <img className='product__img' src={item.images} alt="" />
                                </Link>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{trimDesc(item.description)}</p>
                                    <strong>${item.price}</strong>
                                    <button className='btn__searchResult'>Add to Card</button>
                                    {
                                         likedProducts.find(p => p.id === item.id) ? <AiFillHeart style={{color: 'red', cursor: 'pointer'}} /> : <AiOutlineHeart style={{cursor: 'pointer'}} />
                                    }
                                </div>
                            </div>
                            )
                    }
               </div>
            </Container>
        </section>
    );
}

export default Search;
