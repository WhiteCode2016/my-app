import { connect } from 'react-redux';
import Home from "../pages/Home";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer