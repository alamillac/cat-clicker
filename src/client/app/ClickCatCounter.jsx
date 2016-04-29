import React from 'react';

class ClickCatCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicks : 0};
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        const numClicks = this.state.clicks + 1;
        this.setState({clicks: numClicks});
    }

    render() {
        var styles = {
            img: {
                height: "200px"
            }
        };
        return (
        <div>
            <img style={styles.img} src={`public/images/${this.props.image}`} onClick={this.onClick} />
            <p>cat name: <span>{this.props.name}</span></p>
            <p>num clicks: <span>{this.state.clicks}</span></p>
        </div>
        );
    }
}

ClickCatCounter.propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string
};

export default ClickCatCounter;
