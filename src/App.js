import React, { useEffect, useState } from "react";
import { FormControl, IconButton, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
// import { IconButton } from "@mui/material";

function App() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();

		db.collection("messages").add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput("");
	};

	return (
		<div className="App">
			<img
				className="app_img"
				src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg?"
				alt="image"
			/>
			<h1>Hello Amit.</h1>
			<h2>Welcome {username}</h2>

			<form className="app_form">
				<FormControl className="app_formControl">
					<Input
						className="app_input"
						placeholder="Enter a message..."
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<IconButton
						className="app_iconButton"
						disabled={!input}
						variant="contained"
						color="primary"
						type="submit"
						onClick={sendMessage}
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>

			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
}

export default App;
