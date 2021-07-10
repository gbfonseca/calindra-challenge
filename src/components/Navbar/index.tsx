import { ReactElement, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Logo } from 'assets/images';
import { MenuDot } from 'assets/icons';
import * as S from './styles';

function Navbar(): ReactElement {
  const [openNav, setOpenNav] = useState(false);
  function handleOpenNav() {
    setOpenNav((prevState) => !prevState);
  }

  return (
    <S.Container>
      <S.CollapseButton onClick={handleOpenNav}>
        <Image src={MenuDot} alt="Menu" />
      </S.CollapseButton>
      <div>
        <Link href="/">
          <a>
            <Image
              src={Logo}
              alt="Logo Z"
              width={71}
              height={70}
              layout="intrinsic"
            />
          </a>
        </Link>
        <Link href="/">
          <a>
            <h1>zutterman</h1>
            <h6>Measure Tapes</h6>
          </a>
        </Link>
      </div>

      <S.Nav open={openNav}>
        <ul>
          <li>About us</li>
          <li>Models</li>
          <li>GUARANTEE</li>
        </ul>
      </S.Nav>
    </S.Container>
  );
}

export default Navbar;
