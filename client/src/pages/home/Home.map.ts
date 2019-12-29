import { bindActionCreators } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../../app/App.map'
import { actions } from './Home.actions'

export interface StateProps {}

export interface DispatchProps {}

const mapState = (appState: AppState): StateProps => ({})

const mapDispatch = (dispatch: any): DispatchProps => ({})

export const connector = connect<StateProps, DispatchProps>(mapState, mapDispatch)
export type HomeProps = ConnectedProps<typeof connector>
