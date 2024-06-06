import React from 'react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const CardListComponents = ({cardList}) => {
    const { title, address, imgUrl, price, linkUri } = cardList;

    const swiperOptions = {
        pagination: { dynamicBullets: true },
        navigation: true,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
    };

    const priceAsString = price.toLocaleString();


    return (
        // <S.Link to={linkUri}> // 누를 때마다 이동되서 임시로 주석!
        <S.Link to="#">
            <S.CardListComponentsContainer>
                <S.Swiper {...swiperOptions}>
                    {
                        imgUrl.map((img, i) => (
                            <S.SwiperSlide key={i}>
                                <img src={img} alt="숙소 이미지"/>
                            </S.SwiperSlide>
                        ))
                    }
                </S.Swiper>
                
                <S.DescriptionSection>
                    <h6>
                        {title}
                    </h6>
                    <S.AddrPrice>
                        <div>{address.first_addr}/{address.second_addr}</div>
                        <div>￦{priceAsString}</div>
                    </S.AddrPrice>
                    <S.Reservation>
                        예약하기
                    </S.Reservation>
                </S.DescriptionSection>
            </S.CardListComponentsContainer>
        </S.Link>
    );
};

export default CardListComponents;