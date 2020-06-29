import React from 'react';
import styled from 'styled-components';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('assets/icons', true, /\.svg$/));
} catch (e) {
  console.log(e);
}

type Props = {
  name: string
}

const SvgWrapper = styled.div`
  > .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
  }
`;

const Icon = (props: Props) => {
  return (
    <SvgWrapper>
      <svg className="icon">
        <use xlinkHref={'#' + props.name}/>
      </svg>
    </SvgWrapper>
  );
};

export default Icon;