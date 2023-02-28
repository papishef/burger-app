import React from 'react';
import { useLocation, useNavigate, useParams, useMatch } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      let match = useMatch(location.pathname);
      return (
        <Component
          {...props}
          router={{ location, navigate, params, match }}
        />
      );
    }
  
    return ComponentWithRouterProp;
}

export default withRouter;