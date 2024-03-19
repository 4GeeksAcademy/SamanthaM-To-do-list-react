import React, {useState} from "react";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	
	function saveToDo (e) {
		if (e.key=="Enter") {
			setTodos([...todos, inputValue])
			setInputValue("")
		}
	}
	
	
	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					
					value={inputValue}
					
					onKeyPress = {(e) => saveToDo(e)}
					
					placeholder="What do you need to do?"></input>
				
				
				</li>
				{todos.map((item, index) => (
				<li>
					key={index}
					{item}
					{""} 
					<i 
						class= "fas fa-trash-alt" 
							 onClick={() => 
								setTodos(
									todos.filter(
										(t, currentIndex) => 
											index != currentIndex))}></i>
				</li>
				))}	
			</ul>
			<div>{todos.length} tasks</div>
		</div>
	);
};

export default Home;