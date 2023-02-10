import { FC, Fragment, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperClass from 'swiper/types/swiper-class';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'

import './swiper.css'

import { FreeMode, Thumbs, Scrollbar, Pagination, EffectFade } from 'swiper';

type ImageBookType = {
    id: number,
    src: string
}
type SwiperImagesPropsType = {
    images: ImageBookType[]
}

export const SwiperImages: FC<SwiperImagesPropsType> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const thumbsInit = thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null;

    return (
        <Fragment>
            <Swiper
                data-test-id='slide-big'
                className='mainSwiper'
                centeredSlides={true}
                effect='fade'
                spaceBetween={10}
                modules={[FreeMode, Thumbs, EffectFade, Pagination]}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsInit }}
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image.id}>
                            <img src={image.src} alt='book-el' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                className='subSwiper'
                modules={[Thumbs, Scrollbar]}
                onSwiper={setThumbsSwiper}
                scrollbar={{ draggable: true }}
                slidesPerView={5}
                spaceBetween={10}
                watchSlidesProgress={true}
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image.id}>
                            <img src={image.src} alt='book-el' data-test-id='slide-mini' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Fragment>
    );
};