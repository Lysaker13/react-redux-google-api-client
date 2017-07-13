import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  initStart,
  authSignInStart,
  sheetStartLoading,
  sheetCellUpdatedStart
} from './actions/';

export function googleApiClientConnector(Component: any, options: any) {
  class GoogleApiClient extends Component<any, any> {
      componentWillMount() {
         this.props.googleApiClient.initStart(options)
      }
      render() {
          return (
              <div className="google-api-client">
                 <Component {...this.props}/>
              </div>
          );
      }
  }

  const mapStateToProps = (state: Map<string, any>) => {
      return state.get('googleApiClient').toJS();
  };

  const mapDispatchToProps = (dispatch: any) => {
      return bindActionCreators({
                initStart,
                authSignInStart,
                sheetStartLoading,
                sheetCellUpdatedStart
            }, dispatch);
  };

  const mergeProps = (stateProps, dispatchProps) => {
      return Object.assign({}, {
        googleApiClient: {
            ...stateProps,
            ...dispatchProps
        }
      });
  }

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(GoogleApiClient as any);
}
