import styled from 'styled-components';

export const LoaderCss = styled.div`
  float: left;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin-top: -60px;
  margin-left: -60px;

  -webkit-animation-name: spin;
  -webkit-animation-duration: 4000ms;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  -moz-animation-name: spin;
  -moz-animation-duration: 4000ms;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;

  -ms-animation-name: spin;
  -ms-animation-duration: 4000ms;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;

  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(360deg);
    }
    to {
      -ms-transform: rotate(0deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(360deg);
    }
    to {
      -moz-transform: rotate(0deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(360deg);
    }
    to {
      -webkit-transform: rotate(0deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export const LoaderImg = styled.img`
  width: 100%;
  height: 100%;
`;
