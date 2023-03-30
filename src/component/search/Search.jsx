import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RedirectButton from '../../utilis/Button';
import Container from '../../utilis/Container';
import {BsSearch} from 'react-icons/bs'
import './Search.scss'
import { Link } from 'react-router-dom';
import instance from '../../api/instance';

const Search = () => {
    const [serachResult, setSerachResult] = useState([])
    const [searchValue, setSearchValue] = useState("")
    

    const giveSearchInfos = (e) => {
        setSearchValue(e.target.value)
        instance.get(`/products/?title=${e.target.value}&offset=10&limit=10`)
        .then(response => setSerachResult(response.data))
        .catch(err => console.log(err))
       
    }
    
    const error = []
    const giveMoreResult = (e) => {
        e.preventDefault();
        window.location.pathname = `/search/${searchValue}`;
    }

   
    return (
        <section className='search'>
            <Container>
                <form onSubmit={giveMoreResult}>
                    <div className='search__wrapper'>
                        <div className='search__elements'>
                            <BsSearch/>
                            <input onChange={giveSearchInfos}
                            type="text"
                            className='search__input'
                            placeholder='1 036 638 e‘lonlar yoningizda'
                            />
                            { serachResult?.length > 0 && searchValue
                                ? <div className='search__suggestions'>
                                    {
                                        serachResult.map(search => 
                                            <Link key={search.id} className='search__item--link' to={`/products/${search.id}`}>
                                                <span>{search.title}</span>
                                            </Link>
                                            
                                            )
                                    }
                                </div>
                                : <></>
                            }
                        </div>
                        <button className='btn__search'>
                        <BsSearch/>
                            Search
                        </button>
                    </div>
                </form>
            </Container>
        </section>
    );
}

export default Search;
