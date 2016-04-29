import React from 'react';
import {render} from 'react-dom';
import ClickCatCounter from './ClickCatCounter.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {catId : 0};
        this.onSelectedCat = this.onSelectedCat.bind(this);
        this.onClick = this.onClick.bind(this);
        this.cats = [
            {
                id: 0,
                name: "cat1",
                image: "cat.jpg",
                clicks: 0
            },
            {
                id: 1,
                name: "cat2",
                image: "cat2.jpg",
                clicks: 0
            },
            {
                id: 2,
                name: "cat3",
                image: "cat3.jpg",
                clicks: 0
            },
            {
                id: 3,
                name: "cat4",
                image: "cat4.jpg",
                clicks: 0
            },
            {
                id: 4,
                name: "cat5",
                image: "cat5.jpg",
                clicks: 0
            },
            {
                id: 5,
                name: "cat6",
                image: "cat6.jpg",
                clicks: 0
            }
        ];
    }

    onSelectedCat(event) {
        const selectedCatId = event.currentTarget.dataset.id;
        this.setState({catId: selectedCatId});
    }

    onClick() {
        const selectedCat = this.cats[this.state.catId];
        selectedCat.clicks += 1;
        this.setState({clicks: selectedCat.clicks});
    }

    render() {
        const selectedCat = this.cats[this.state.catId];

        return (
                <div>
                    <ul>
                        {
                            this.cats.map(cat => <li key={cat.id} data-id={cat.id} onClick={this.onSelectedCat}>{cat.name}</li>)
                        }
                    </ul>
                    <h1>Click cat counter</h1>
                    <ClickCatCounter onClick={this.onClick} name={selectedCat.name} image={selectedCat.image} clicks={selectedCat.clicks}/>
                </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
