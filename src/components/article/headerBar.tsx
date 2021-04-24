import React, { useState } from 'react';
import { PrimaryBtn } from 'components/button';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap';
import { useRecoilValue } from 'recoil';
import { userState } from 'shared/store';
import { useHistory, Link } from 'react-router-dom';
import { NavItem } from 'components/nav/navItem';
import { PrimeInput } from 'components/input';

export interface HeaderBarProps {
  isLogin: boolean;
}

export function HeaderBar({ isLogin }: HeaderBarProps) {
  // const user = useRecoilValue(userState);
  const history = useHistory();
  const [enableEdit, setEdit] = useState(false);
  return (
    <Cover>
      <Logo onClick={() => history.push('/')}>
        <h1>Why Do That?</h1>
      </Logo>

      <CustomNav>
        <ul>
          <NavItem name="대기업" route="/대기업" />
          <NavItem name="채용 공고" route="/채용 공고" />
        </ul>
      </CustomNav>

      <ButtonContainer>
        <Search
          size="24"
          style={{ margin: '0 1rem ', cursor: 'pointer' }}
          onClick={() => setEdit(!enableEdit)}
        />
        <SearchBar placeholder="검색" enableEdit={enableEdit} />

        <PrimaryBtn
          label={isLogin ? '로그아웃' : '로그인'}
          onClick={() => console.log('test')}
        />
      </ButtonContainer>
    </Cover>
  );
}

const Cover = styled.header`
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  /* border-bottom: 0.5px solid #e4e4e4; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  z-index: 1000;

  ul {
    display: flex;
    list-style: none;
    padding: 0.6rem 0;
    margin: 0 0;

    li {
      list-style: none;
      font-size: 1.1rem;
      padding: 0 1.5rem;
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;

  p {
    font-weight: bolder;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;
`;

const CustomNav = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  .nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    min-width: 100px;
    text-align: center;
  }
`;

const SearchBar = styled.input<{ enableEdit: boolean }>`
  width: ${({ enableEdit }) => (enableEdit ? '10vw' : 0)};
  min-width: ${({ enableEdit }) => (enableEdit ? '150px' : 0)};
  height: 28px;
  opacity: ${({ enableEdit }) => (enableEdit ? 1 : 0)};
  transition: 0.3s all ease;
  margin-right: 1rem;
  border-radius: 10px;
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

// import React from 'react';
// import styled from 'styled-components';

// export function NavBar() {
//   return (
//     <Cover>
//       <nav>
//         <div className="inner">
//           <div className="nav-container">
//             <div className="nav-brand">WhyDoThat</div>
//             <ul>
//               <li className="nav-bigCompany">대기업</li>
//               <li className="nav-recruit">채용 공고</li>
//             </ul>
//             <SearchLogin>
//               <ul>
//                 <li className="nav-search">
//                   <button>
//                     <i className="fas fa-search searchIcon"></i>
//                   </button>
//                 </li>
//                 <li className="nav-login">로그인</li>
//               </ul>
//             </SearchLogin>
//           </div>
//         </div>
//       </nav>
//     </Cover>
//   );
// }

// const Cover = styled.div`
//   nav {
//     width: 100%;
//     height: 50px;
//     border-bottom: 0.5px solid #e4e4e4;
//     top: 0;
//     left: 0;
//     z-index: 1000;
//   }
//   .nav-container {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   .nav-brand {
//     font-weight: bold;
//     font-size: 1.5rem;
//   }
//   ul {
//     display: flex;
//     list-style: none;
//     padding: 0.6rem 0;
//     margin: 0 0;
//   }
//   .nav-bigCompany {
//     font-size: 1.1rem;
//     padding: 0 1.5rem;
//   }
//   .nav-recruit {
//     font-size: 1.1rem;
//     padding: 0 1.5rem;
//   }
// `;

// const SearchLogin = styled.div`
//   button {
//     background-color: #fff;
//     border: none;
//     outline: 0;
//   }
//   button:hover {
//     cursor: pointer;
//   }
//   .nav-search {
//     padding: 0 1rem;
//   }
//   .searchIcon {
//     font-size: 1.2rem;
//   }
//   .nav-login {
//     border-left: 1px solid #e4e4e4;
//     padding: 0 1rem;
//   }
// `;
