import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getAllProducts, getUsers, setCurrentPage, addWish, resetWish,/* getScreenShots */ } from '../../redux/actions';
import ProductCard from '../Cards/ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import SideBar from '../SideBar/SideBar';
import Filters from "../Filters/Filters"
import "./Home.css"
import MyChatBot from '../Chatbot/chatbot';
import config from '../Chatbot/Config/config';
import MessageParser from '../Chatbot/MessageParser/MessageParser';
import ActionProvider from '../Chatbot/ActionProvider/ActionProvider';
import Spinner from "../Spinner/Spinner"
import banner from "../../images/banner.png"
import banner2 from "../../images/banner2.png"
import { Link } from 'react-router-dom';

function Home() {
    let games = useSelector(state => state.products);
    let searchered = useSelector(state => state.searchered);
    let dispatch = useDispatch();
    let currentPage = useSelector((state) => state.currentPage);
    let [gamesPerPage, setgamesPerPage] = useState(9);
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = searchered.length ? searchered.slice(indexOfFirstGame, indexOfLastGame) : games.slice(indexOfFirstGame, indexOfLastGame);

    const user = useSelector((state) => state.users),
        token = window.sessionStorage.getItem('token');
     const [show, setShow] = useState(false);

    const paginado = (number) => {
        dispatch(setCurrentPage(number))
        setTimeout(()=> window.scroll({top: 0}),500)
    };

    useEffect(()=>{
        setTimeout(()=> setShow(true),1000)
    },[searchered])

    useEffect(() => {
        token && dispatch(getUsers(token));
        dispatch(getAllProducts());
    }, []);

    useEffect(() => {
        user.products?.length !== 0 ? user.products?.map(e => dispatch(addWish(e.id))):
        dispatch(resetWish());
    },[user]);

    return (
        <div class="d-sm-flex container-fluid cardsAndFilter justify-content-center">
            <div style={{ marginRight: '15px', marginLeft: '30px', marginTop: '46px', width: '122px' }}>
                <SideBar />
            </div>

            <div style={{ width: '60%' }}>

                <div class='ml-2'>
                    <Filters />
                </div>

                <div class="row pb-1 mb-1" className="allCardsConteiner" >
                    {currentGames.length > 0 && currentGames.map(e => (
                        <div /* class="col-lg-4 col-md-2 mb-1 mb-lg-0" */>
                            <ProductCard name={e.name} id_api={e.id_api} id={e.id} img={e.background_image} /* Screenshots={screenshots} */ rating={e.rating} genres={e.genres} platforms={e.platforms} price={e.price} fromApi={e.fromApi} isDisabled={e.isDisabled} />
                        </div>
                    ))}
                    {
                        !show && <Spinner />
                    }
                    {
                       show && (currentGames.length < 1) && <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    }


                </div>
                <Pagination
                    currentPage={currentPage}
                    gamesPerPage={gamesPerPage}
                    games={searchered.length
                        ? searchered.length
                        : games.length} paginado={paginado}
                />

            </div>
            {/* <div className='bannerhome'> */}
            {/*     <Link to={user.user?"/detail/2aa2198c-bbba-4e74-9726-a886cd1cda75":"/login"}> */}
            {/*         <img style={{width:"17rem", height: "auto", marginBottom: "50px"}} src={user.user? banner : banner2} alt="banner"/> */}
            {/*     </Link> */}
            {/*     <div style={{marginLeft: '4rem'}}> */}
            {/*     <MyChatBot */}
            {/*         config={config} */}
            {/*         messageParser={MessageParser} */}
            {/*         actionProvider={ActionProvider} */}

            {/*     /> */}
            {/*     </div> */}
            {/* </div> */}
        </div>

    )
}

export default Home
