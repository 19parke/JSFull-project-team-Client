import React from 'react';
import S from './style';
import CardListComponents from './CardListComponents';
import NavigatePageComponents from './NavigatePageComponents';

const CardListContainer = (props) => {
    const { contentData, setClickCardListIndex } = props;

    const handleClickEvent = (index) => {
        setClickCardListIndex(index);
    };

    return (
        <S.CardListContainer>
            <S.SideMarginWrapper>
                <S.AccommodationTotal>
                    <h6>숙소 {contentData && contentData.length}개 이상</h6>
                </S.AccommodationTotal>

                <S.CardListsWrapper>
                    {
                        contentData && contentData.map((cardList, i) => (
                            <CardListComponents key={i} cardList={cardList} index={i} handleClickEvent={handleClickEvent}/>
                        ))
                    }
                </S.CardListsWrapper>

                {
                    contentData.length > 18 ? <NavigatePageComponents /> : <></>
                }
            </S.SideMarginWrapper>
        </S.CardListContainer>
    );
};

export default CardListContainer;