import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CardForSale.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/actions.js'
import Swal from 'sweetalert2'

function CardForSale({ forSale }) {

  const dispatch = useDispatch()
  let cart = useSelector(state => state.cart);
  let userOrders = useSelector(state => state.userOrders);
  

  const addGameToCart = (id) => {

  let owned = false;
  if (userOrders) {
    let gam = userOrders.filter((e) => e.game_id === id)
    if (gam.length > 0) {
      owned = true;
    }
  }

      let fC = cart.filter(e => e === id);
      if (owned) {
        Swal.fire({
          icon: 'warning',
          text: 'You already own this game!',
        })
      } else if (fC.length > 0) {
        Swal.fire({
          icon: 'warning',
          text: 'Game is already in cart!',
        })
      } else {
        dispatch(addToCart(id)) // dispacha al carrito de compras con el id del game en la db
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Succesfully added to your cart',
          showConfirmButton: false,
          timer: 1500
        })
      }
  }

  return (
<div id="carouselExampleIndicators" class="carousel slide mt-5 mb-5" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">

    {[0,1,2,3,4,5].map((e) => (
    <div class={`carousel-item ${e === 0 ? "active" : ""}`}>
      <div class="d-flex justify-content-center gap-3">
      <Link to={`/detail/${forSale[e]?.id}`}>
        <div class="bg-image" style={{borderRadius:"0.7rem", height:"30rem",width:"55rem", backgroundImage:`url(${forSale[e]?.background_image})`, backgroundSize:"cover", backgroundPosition:"center"}}></div>
      </Link>
      <div style={{height:"30rem",width:"20rem", padding:"2rem", backgroundColor: "rgb(37,37,39,0.2)", borderRadius:"0.7rem"}}>
        <h3>{forSale[e]?.name}</h3>
        <div style={{marginBottom:"2rem", marginTop:"2rem", lineHeight:1.2,maxHeight:"16.9em", width:"100%", overflow:"hidden", textOverflow:"ellipsis", textAlign:"justify"}}>
          <p>{forSale[e]?.description}</p>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <div className='price'>${forSale[e]?.price}</div>
          <button className="buttonCart" onClick={() => addGameToCart(forSale[e]?.id)}>
            Add to cart
          </button>
        </div>
      </div>
      </div>
    </div>
    ))}



  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


  )


  return (
    <div className={styles.containerCarr} class="d-flex justify-content-center align-items-center mt-3 w-100">
      {/* <div class={styles.banner}> */}
      {/*   <Link to="/detail/2aa2198c-bbba-4e74-9726-a886cd1cda75"> */}
      {/*     <img src={banner} alt="banner" /> */}
      {/*   </Link> */}
      {/* </div> */}
      <div class="m-2">
        <button className={styles.button} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" ></span>
        </button>
      </div>


      <div id="carouselExampleCaptions" class="carousel slide w-75 carousel-fade" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div class="carousel-inner w-100" className={styles.container}>
          {
            forSale?.map((e, i) => {
              return (
                <div class={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div class="w-100 h-8 bg-red">
                    hola
                  </div>
                  {/* <Link to={`/detail/${e.id}`}> */}
                    {/* <div class="d-flex w-100 h-100"> */}
                      {/* <div class="w-70"> */}
                        {/* <img className={styles.image} src={e?.background_image} class="d-block rounded w-100" style={{ maxHeight: '40rem', maxWidth: '100vw' }} alt="..." /> */}
                      {/* </div> */}
                      {/* <div class="bg-black"> */}
                        {/* hola */}
                      {/* </div> */}
                    {/* </div> */}
                  {/* </Link> */}
                  {/* <div class="carousel-caption d-none d-md-block"> */}
                  {/*   <h4>{e.name}</h4> */}
                  {/*   <span class={`${styles.spanLanding}`}>On Sale! 50% off</span> */}
                  {/* </div> */}
                </div>

              )
            })
          }
        </div>

        {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button> */}
        {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
      </div>

      <div >
        <button className={styles.button} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      {/* <div class={styles.banner}> */}
      {/*   <Link to="/login"> */}
      {/*     <img src={banner2} alt="banner2" /> */}
      {/*   </Link> */}
      {/* </div> */}
    </div>
  )
}

export default CardForSale
