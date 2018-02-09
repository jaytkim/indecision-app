class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: ['Thing one', 'Thing two', 'Thing four']
        };
    }
    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option and alert it
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

// class Header extends React.Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    );
};

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick');
//     // }
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                     >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// Options -> Options component here
// Setup options prop for Options component
// Render the length of the array
// Render new p tag for each options (set text, set key)
// Add Remove All button
// Setup handleRemoveAll -> alert some message
// Setup onClick to fire the method

// stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} />) 
            }
        </div>
    );
};

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     // alert('handleRemoveAll');
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />) 
//                 }
//             </div>
//         );
//     }
// }

// Option -> Option component here
// stateless functional component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

// AddOption -> AddOption component here
// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });

        // if(option) {
        //     this.props.handleAddOption(option);
        // }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));