import React from "react";
import {Swiper,SwiperSlide} from 'swiper/react'
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import condom from '../../assets/images/condom.jpg';
import condom2 from '../../assets/images/condom2.jpg';
import dicklength from '../../assets/images/dick-length.jpg';
import pussy1 from '../../assets/images/pussy1.jpg';
import pussy2 from '../../assets/images/pussy2.jpg';

function Dashboard() {

	
  return (
	  <div className="w-full h-full">
		  <Swiper  modules={[EffectFade]} effect="fade" autoplay={1000}
      >
        <SwiperSlide>
          <div className="w-full h-full">
              <img src={condom} className="w-full h-full object-fit"/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full">
              <img src={condom2} className="w-full h-full object-fit"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
              <img src={pussy2} className="w-full h-full object-fit"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
              <img src={dicklength} className="w-full h-full object-fit"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
              <img src={pussy1} className="w-full h-full object-fit"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Dashboard;
