import { connect } from "react-redux";
import { State } from "../../application/state";
import Home from './Home';
import { getSelectedProfile } from '../../login/state';

const mapStateToProps = (state: State) => {
	return {
		profile: getSelectedProfile(state)
	}
};

const mapDispatchToProps = (dispatch: any) => {
	return {

	}
}

export const HomeContainer = connect( mapStateToProps, mapDispatchToProps)(Home);