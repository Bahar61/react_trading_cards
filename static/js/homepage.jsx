class Homepage extends React.Component {
  render() {
    return (
      <div className="landing">
        <h3>Let's Start!</h3>
        <a src={this.props.url}/>
        <img src={this.props.imgUrl}/>
      </div>
    );
  }
}

ReactDOM.render(
    <Homepage url="/cards"
    imgUrl="/static/img/balloonicorn.jpg" />, document.getElementById('app')
  );