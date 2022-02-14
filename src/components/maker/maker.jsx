import React, {useEffect, useState} from 'react'
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from './../editor/editor';
import Preview from './../preview/preview';

const Maker = ({authService}) => {
	const [cards, setCards] = useState({
		'1': {
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
		'2': {
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
		'3': {
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
	});


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

	const createOrUpdateCard = (card) => {		
		setCards(cards => {
			const updated = {...cards};
			updated[card.id] = card;
			return updated;
		});
	};

	const deleteCard = (card) => {
		setCards(cards => {
			const updated = {...cards};
			delete updated[card.id];
			return updated;
		});
	};

  return (
    <section className={styles.maker}>
        <Header onLogout={onLogout} />
					<div className={styles.container}>
						<Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
						<Preview cards={cards} />
					</div>
        <Footer />
    </section>
  )
}

export default Maker;