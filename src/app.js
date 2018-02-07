console.log('hello world');

// JSX - Javascript XML
var template = (
    <div>
        hello world
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);