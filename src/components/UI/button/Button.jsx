import style from './Button.module.css';

export const Button = ({ text, type, onClick }) => {
	return (
		<button onClick={onClick} type={type} className={style.ButtonA}>
			{text}
		</button>
	);
};
