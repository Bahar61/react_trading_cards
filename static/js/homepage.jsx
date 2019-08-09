class Homepage extends React.Component {
  render() {
    return (
      <div className="landing">
        <a href={this.props.url}><h3>Let's Start!</h3></a>
        <img src={this.props.imgUrl}/>
      </div>
    );
  }
}

ReactDOM.render(
    <Homepage url="/cards"
    imgUrl="/static/img/balloonicorn.jpg" />, document.getElementById('app')
  );