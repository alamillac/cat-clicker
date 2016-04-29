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
            <img style={styles.img} src="public/images/cat.jpg" onClick={this.onClick} />
            <p>num clicks: <span>{this.state.clicks}</span></p>
        </div>
        );
    }

}

export default ClickCatCounter;
