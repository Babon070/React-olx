import React from 'react';
import { Link, useHistory} from 'react-router-dom';
import Container from '../../utilis/Container';
import './Like.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Like = () => {

    const dispatch = useDispatch()
    const history = useHistory()
  
    const likedProducts = useSelector(state => state.likeReducer.likeProducts)
    console.log(likedProducts);

    function removeFromLikeProducts(item){
        dispatch({id: item.id, type: "REMOVE_FROM_LIKE"})

        if(likedProducts.length === 0) {
            history.push('/')
        }
    }

    function trim(str) {
        return str.split(" ").slice(0, 5).join(" ") + '...'
    }

    return !likedProducts.length ? <p className='note_liked_products'>No liked product!</p> : (
        <section>
            <Container>
                <div className='search__result--wrapper'>
                    {
                        likedProducts?.map(item => 
                            <div key={item.id} className='product__item--search'>
                                <Link to={`/products/${item?.id}`}>
                                    <img height={285} className='product__img' src={item.images} alt="" />
                                </Link>
                                <div className='product__item-info'>

                                    <div className='produc_desc'>
                                        <h2>{item.title}</h2>
                                        <p>{trim(item.description)}</p>
                                    </div>

                                    <div className='product__price'>
                                        <strong className='like__price'>${item.price}</strong>
                                        <div className='like_heart'>
                                            <button className='btn__like-products'>Add to Card</button>
                                                {
                                                     likedProducts?.find(p => p?.id === item?.id) ? <AiFillHeart onClick={() => removeFromLikeProducts(item)} style={{color: 'red',  cursor: 'pointer'}} /> : <AiOutlineHeart/>
                                                }
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            )
                    }
                </div>
            </Container>
           
        </section>
    );
}

export default Like;
