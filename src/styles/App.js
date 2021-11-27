import styled from 'styled-components';

function getShadow(n) {
  let result = ''
  for (let i = 0; i < n; i++) {
    result += shadow();
  }
  return result;
}

const shadowsSmall = getShadow(900);
const shadowsMedium = getShadow(200);
const shadowsLarge = getShadow(100);

function shadow() {
  return ` ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px  #fff ,`
}

export const Star = styled.div`
  background-color: transparent;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;

  #stars {
   width: 1px;
   height: 1px;
   background: transparent;
   box-shadow: ${shadowsSmall.substring(0, shadowsSmall.length -1)};
   animation: animStar 50s linear infinite;
  }
  #stars:after {
   content: " ";
   position: absolute;
   top: 2000px;
   width: 1px;
   height: 1px;
   background: transparent;
   box-shadow: ${shadowsSmall.substring(0, shadowsSmall.length -1)};
  }

  #stars2 {
   width: 2px;
   height: 2px;
   background: transparent;
   box-shadow: ${shadowsMedium.substring(0, shadowsMedium.length -1)};
   animation: animStar 50s linear infinite;
  }
  #stars2:after {
   content: " ";
   position: absolute;
   top: 2000px;
   width: 2px;
   height: 2px;
   background: transparent;
   box-shadow: ${shadowsMedium.substring(0, shadowsMedium.length -1)};
  }

  #stars3 {
   width: 3px;
   height: 3px;
   background: transparent;
   box-shadow: ${shadowsLarge.substring(0, shadowsLarge.length -1)};
   animation: animStar 50s linear infinite;
  }
  #stars3:after {
   content: " ";
   position: absolute;
   top: 2000px;
   width: 1px;
   height: 1px;
   background: transparent;
   box-shadow: ${shadowsLarge.substring(0, shadowsLarge.length -1)};
  }
  @keyframes animStar {
   from {
     transform: translateY(-2000px);
   }
   to {
     transform: translateY(-0px);
   }
 }
 
`;