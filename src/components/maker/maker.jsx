import React, {useEffect, useState} from 'react'
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from './../editor/editor';
import Preview from './../preview/preview';

const Maker = ({authService}) => {
	const [cards, setCards] = useState([
		{
			id: '1',
			name: 'Steave',
			company: 'apple',
			theme: 'light',
			title: 'Software Engineer',
			email: 'steave@gamil.com',
			message: 'go for it',
			fileName: 'steave',
			fileURL: ''
		},
		{
			id: '2',
			name: 'Han',
			company: 'apple',
			theme: 'dark',
			title: 'Designer',
			email: 'Han@gamil.com',
			message: 'for real?',
			fileName: 'han',
			fileURL: ''
		},
		{
			id: '3',
			name: 'jake',
			company: 'apple',
			theme: 'colorful',
			title: 'Software Engineer',
			email: 'jake@gamil.com',
			message: 'how are you?',
			fileName: 'jake',
			fileURL: ''
		},
	]);
	const navigate = useNavigate();
	const onLogout = () =>{
			authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange(user => {
			if (!user) {
				navigate('/');
			}
		});
	}) ;

  return (
    <section className={styles.maker}>
        <Header onLogout={onLogout} />
					<div className={styles.container}>
						<Editor cards={cards} />
						<Preview cards={cards} />
					</div>
        <Footer />
    </section>
  )
}

export default Maker;