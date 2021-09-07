import React, {Component} from 'react';
import '../App.css';

class KeyPadComponent extends Component {

    render () {
        return (
            <div className="button">
                <button className="button-2" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="button-2" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="button-2" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="button-2" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>

                <button className="button-num" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="button-num" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="button-num"name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="button-2" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>

                <button className="button-num" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="button-num" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="button-num" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="button-2" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button className="button-num"name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="button-num"name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="button-num"name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="button-2" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button className="button-2" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="button-num" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="button-equal" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="button-2" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;