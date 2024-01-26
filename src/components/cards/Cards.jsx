import React from 'react';
// import style from './Cards.module.css';
import style from 'styled-components';
console.log(style);

const Cards = ({ cards }) => {
	const StyleDiv = style.div`
    display: flex;
	align-items: center;
	justify-content: center;
    flex-wrap:wrap;


  `;
	const StyleContainer = style.div`
    width: 320px;
	height: auto;
    cursor: pointer;
	text-align: center;
	background: radial-gradient(2900.76% 50.13% at 50% 53.89%, rgba(58, 52, 86, 0.95) 0%, #211E2E 100%);
	margin :4px 10px;
	border-radius:10px;

`;
	const StyleImg = style.img`
	border-radius:27px;
	padding:10px;
    width: 250px;
    height: 230px;
  `;
  let StyleH2 = style.h2`
	color:rgb(181, 181, 181);
	font-size: 20px;
  `
 let StyleH1 = style.h1`
 color:rgb(181, 181, 181);

 `

	return (
		<StyleDiv>
			{cards.map((el) => {
				return (
					<StyleContainer key={el.index} className={style.container}>
						<StyleImg src={el.img} alt="" />
						<StyleH2>{el.filmName}</StyleH2>
						<StyleH1>{el.name}</StyleH1>
					</StyleContainer>
				);
			})}
		</StyleDiv>
	);
};

export default Cards;
