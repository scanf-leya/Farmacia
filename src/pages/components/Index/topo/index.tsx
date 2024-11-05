import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,EffectFade} from 'swiper/modules'



export function Topo() {
  const fotos = [
    { id: 1, img: "/img/homepage/01.png" },
    { id: 2, img: "/img/homepage/02.png" },
    { id: 3, img: "/img/homepage/03.png" },
    { id: 4, img: "/img/homepage/04.png" },
    { id: 5, img: "/img/homepage/05.png" },
  ];
  return (
    <div className="h-screen bg-[#edf2fb] p-5 pt-40 pb-20 flex justify-center">
      <div id="home-top-wrapper">
        <div id="home-top-text">
          <h1 className="capitalize">Buy quality medicines at good prices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            enim? Facere iure molestiae non error cumque. Nisi ab, quasi
            laboriosam harum laudantium autem iste consequatur eveniet corrupti
            eos sed deleniti.
          </p>
          <button className="blue-button">see our catalog</button>
        </div>
        <div>
          <Swiper
          modules={[Autoplay,EffectFade]}
          effect="fade"
          autoplay={{delay:3000,disableOnInteraction:false,pauseOnMouseEnter:true}}
          slidesPerView={1}
          className="w-[550px] h-[450px] "
          >
            {fotos.map((foto) => (
              <SwiperSlide key={foto.id}>
                <Image src={foto.img} width={550} height={450}  alt="" className="bg-[#edf2fb]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
