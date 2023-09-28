import React, { useEffect, useState } from 'react';
import './Categories.scss'
import Container from '../../utilis/Container'
import axios from 'axios';
import { Link } from 'react-router-dom';
import UseFetchData from '../../hooks/useFetchData';
import {useTranslation} from 'react-i18next'
import i18n from "../../language/i18next"

const Categories = ({}) => {
    const { t } = useTranslation()
    const [categoryData, loading] = UseFetchData("/categories?offset=0&limit=5")

  
    return (
        <section className='categories'>
            <Container>
                    <h3 className='categories__title'>
                        {t("categories")}
                    </h3>
                <div className="categories__wrapper">
                    {
                        categoryData.map(item => 
                            <Link to={`/category/${item.id}`} className='category-wrap' key={item.id}>
                                <div className='categories__img'>
                                        <img className='' src={item.image} alt="" />
                                </div>
                                <h2>{item.name}</h2>
                            </Link>
                            )
                    }
                </div>
            </Container>
        </section>
    );
}

export default Categories;
