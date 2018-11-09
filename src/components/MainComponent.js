import React, { Component } from 'react';
import {Link} from 'react-router-dom'; //Для роутинга
import { connect } from 'react-redux'; //connect нужен для связи компонента со store
import store from '../store';
import {getData} from '../reducers'; //импортируем actions

class MainComponent extends Component {
    //Компонент componentDidMount сработает сразу после загрузки
    componentDidMount() {
 
    }

    render() {
        return (
            <div className="component">
                Второстипенный компонент
            </div>
        )
    }
};

//Для связи со store
const mapStateToProps = (state,ownProps={}) => ({
    id: state.mainReducer.id,
    price: state.mainReducer.price,
    apiData: state.mainReducer.fetchResult,
    apiFetching: state.mainReducer.isFetching
});

//Передаем thunk компонент
const mapDispatchToProps = {
    fetchData: getData
}

//Обвернем данный компонент в connect для свзяи с хранилищем
const ComponentMain = connect (
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default ComponentMain;