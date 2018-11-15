class IndecisionApp extends React.Component{
	render() {
	const title = 'Indecision';
	const subtitle = 'Put your lives in hands of a computer.';
	const options = ['Option one', 'Option two', 'Option four'];
		return(
			<div>
				<Header title={title} subtitle = {subtitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}
class Header extends React.Component{
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}
class Action extends React.Component{
	handlePick(){
		alert('Button Clicked!');
	}
	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}
class Options extends React.Component{
	handleRemoveAll(){
		alert('Removed Everything!');
	}
	render() {
		return (
			<div>
				{this.props.options.map((option) => <Option key={option} optionText={option} />)}
				<button onClick={this.handleRemoveAll}> Remove All </button>
			</div>
		);
	}
}
class Option extends React.Component{
	render() {
		return(
			<div>
				{this.props.optionText}
			</div>
		);
	}
}
class AddOption extends React.Component{
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.addOption.value;
		if(option)
		{
			alert(option);
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='addOption'/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));