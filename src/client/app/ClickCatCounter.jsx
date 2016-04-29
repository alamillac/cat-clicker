import React from 'react';

class ClickCatCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {clicks : props.clicks};
    }

    render() {
        var styles = {
            img: {
                height: "200px"
            }
        };
        return (
        <div>
            <img style={styles.img} src={`public/images/${this.props.image}`} onClick={this.props.onClick} />
            <p>cat name: <span>{this.props.name}</span></p>
            <p>num clicks: <span>{this.props.clicks}</span></p>
        </div>
        );
    }
}

ClickCatCounter.propTypes = {
    name: React.PropTypes.string,
    image: React.PropTypes.string
};

export default ClickCatCounter;
