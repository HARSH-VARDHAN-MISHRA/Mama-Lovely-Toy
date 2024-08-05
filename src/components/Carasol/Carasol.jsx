import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { Pagination ,Navigation } from 'swiper/modules';
import axios from 'axios';
import banner1 from './banner1.jpg'
import banner2 from './banner2.jpg'
import banner3 from './banner3.jpg'

const Carasol = () => {
    // const [caraImg,setImage]  = useState([])

    // const handleCaraImg= async()=>{
    //     try {
    //         const response = await axios.get("https://api.camrosteel.com/api/v1/All-Active-Banner");
    //         console.log(response.data.data)
    //         setImage(response.data.data)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(()=>{
    //     handleCaraImg()
    // },[])
    const caraImg = [
        {
            image:banner1
        },
        {
            image:banner2
        },
        {
            image:banner3
        }
    ]
  return (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                caraImg && caraImg.map((item,index)=>(
                    <SwiperSlide key={index}><img src={item.image} alt="carasoul-image" /></SwiperSlide>

                ))
            }
            
        </Swiper>
    </>
  )
}

export default Carasol