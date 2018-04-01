import { connect } from 'react-redux';

mapStateToProps = state => {
    return {
        appData: state.appData
    }
}

mapDispatchToProps = dispatch => {

};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
