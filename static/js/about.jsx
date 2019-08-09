class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h3> This author is amazing and creative and fun!</h3>  
            </div>
        );
    }
}

ReactDOM.render(
    <About />, document.getElementById('about')
    );