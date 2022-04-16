/* eslint-disable react/react-in-jsx-scope */
import Icon from './components/Icon';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, CardBody, Button, Row, Col, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import './App.css';

const itemArray = new Array(9).fill('empty');

const App = () => {
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState('');

	const reloadGame = () => {
		setIsCross(false);
		setWinMessage('');
		itemArray.fill('empty', 0, 9);
	};

	// eslint-disable-next-line complexity
	const checkIsWinner = () => {
		if (itemArray[0] !== 'empty'
    && itemArray[0] === itemArray[1]
    && itemArray[1] === itemArray[2]) {
			setWinMessage(`${itemArray[0]} won`);
		} else if (itemArray[3] !== 'empty'
      && itemArray[3] === itemArray[4]
      && itemArray[4] === itemArray[5]) {
			setWinMessage(`${itemArray[3]} won`);
		} else if (itemArray[6] !== 'empty'
      && itemArray[6] === itemArray[7]
      && itemArray[7] === itemArray[8]) {
			setWinMessage(`${itemArray[6]} won`);
		} else if (itemArray[0] !== 'empty'
      && itemArray[0] === itemArray[3]
      && itemArray[3] === itemArray[6]) {
			setWinMessage(`${itemArray[0]} won`);
		} else if (itemArray[1] !== 'empty'
      && itemArray[1] === itemArray[4]
      && itemArray[4] === itemArray[7]) {
			setWinMessage(`${itemArray[1]} won`);
		} else if (itemArray[2] !== 'empty'
      && itemArray[2] === itemArray[5]
      && itemArray[5] === itemArray[8]) {
			setWinMessage(`${itemArray[2]} won`);
		} else if (itemArray[0] !== 'empty'
      && itemArray[0] === itemArray[4]
      && itemArray[4] === itemArray[8]) {
			setWinMessage(`${itemArray[0]} won`);
		} else if (itemArray[2] !== 'empty'
      && itemArray[2] === itemArray[4]
      && itemArray[4] === itemArray[6]) {
			setWinMessage(`${itemArray[2]} won`);
		} else if (!isItemArrayEmpty() && !winMessage) {
			setWinMessage('Draw');
		}
	};

	const isItemArrayEmpty = () => {
		for (let i = 0; i < itemArray.length; i++) {
			if (itemArray[i] === 'empty') {
				return true;
			}
		}

		return false;
	};

	const changeItem = itemNumber => {
		if (winMessage) {
			return toast(winMessage, {type: 'success'});
		}

		if (itemArray[itemNumber] === 'empty') {
			itemArray[itemNumber] = isCross ? 'cross' : 'circle';
			setIsCross(!isCross);
		} else {
			return toast('This square is already filled!', {type: 'warning'});
		}

		checkIsWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="top-right" />
			<Row>
				<Col md={6} className="offset-md-3">
					{
						winMessage ? (
							<div className="my-2">
								<h1 className="text-success text-uppercas text-center">
									{ winMessage }
								</h1>
								<Button
									color="success"
									block
									className="my-3"
									onClick={reloadGame}>
                    Try Again
								</Button>
							</div>
						) : (
							<h1 className="text-center text-warning">
								{ isCross ? 'Cross' : 'Circle' } Turn
							</h1>
						)
					}
					<div className="grid">
						{
							itemArray.map((item, index) => (
								<Card key={index}
									onClick={() => changeItem(index)}
									color="warning"
								>
									<CardBody className="box">
										<Icon name={item} />
									</CardBody>
								</Card>
							))
						}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;
