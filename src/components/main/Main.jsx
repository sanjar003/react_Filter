import React, { useState } from 'react';
import Cards from '../cards/Cards';
import style from './Main.module.css';
import { Button } from '../UI/button/Button';

const Main = () => {
	const cards = [
		{
			img: 'https://irecommend.ru/sites/default/files/product-images/10297/WnQRA75bJJCBDA75yumVg.jpg',
			filmName: 'мультики',
			name: 'Маша и Медведь'
		},
		{
			img: 'https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg',
			filmName: 'мультики',
			name: 'Босс-молокосос'
		},
		{
			img: 'https://yt3.ggpht.com/a/AGF-l7_bVK5j16GBQDoqNQ34r9Yxc-YbJXe5qWYqDQ=s900-c-k-c0xffffffff-no-rj-mo',
			filmName: 'мультики',
			name: 'Том и Джери'
		},
		{
			img: 'https://th.bing.com/th/id/R.dcf06596236e92a0e9bf9e6a4b676db5?rik=fpLcOMpo7xJouA&riu=http%3a%2f%2fst-im.kinopoisk.ru%2fim%2fposter%2f1%2f5%2f1%2fkinopoisk.ru-The-Medallion-1516674--o--.jpg&ehk=%2bpPxW3%2f1h0EAQA150S3peE12CkGsLtqYS1QkVrNrLx8%3d&risl=&pid=ImgRaw&r=0',
			filmName: 'Фильм',
			name: 'Джеки Чан'
		},
		{
			img: 'https://conkingclub.files.wordpress.com/2019/12/the_revenant_01.jpg',
			filmName: 'Фильм',
			name: 'Выживший'
		},
		{
			img: 'https://i.ytimg.com/vi/0V81mN6nvGw/0.jpg',
			filmName: 'Фильм',
			name: 'Джеки Чан'
		},
		{
			img: 'https://th.bing.com/th/id/R.255bec944077650654bb76aef2ca335d?rik=h6eTly1Jt9uStw&pid=ImgRaw&r=0',
			filmName: 'avatar',
			name: 'Фантастика'
		}
	];
	const [mainCards, setMainCards] = useState(cards);
	function getResult(genre) {
		const updateRender =
			genre === '' ? cards : cards.filter((i) => i.filmName === genre);
		setMainCards(updateRender);
	}
	const changeGenre = (e) => {
		const selectGenre = e.target.innerText;
		getResult(selectGenre);
	};
	const changeGenree  = () => {
		setMainCards(cards);
	};
	return (
		<div className={style.container}>
			<div className={style.containerButton}>
				<Button text="avatar" onClick={changeGenre} />
				<Button text="мультики " onClick={changeGenre} />
				<Button text="Фильм" onClick={changeGenre} />
				<Button text="Все" onClick={changeGenree } />
			</div>
			<div className={style.containerCards}>
				<Cards cards={mainCards} />
			</div>
		</div>
	);
};

export default Main;
