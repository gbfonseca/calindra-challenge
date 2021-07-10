import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'assets/icons';
import * as S from './styles';

function Footer(): ReactElement {
  return (
    <S.Container>
      <S.FollowBox>
        <h1>Follow Us</h1>
        <div>
          <Link href="https://www.youtube.com/">
            <a>
              <Image
                src={Youtube}
                alt="Youtube"
                width={43}
                height={43}
                layout="fixed"
              />
            </a>
          </Link>
          <Link href="https://www.facebook.com/">
            <a>
              <Image
                src={Facebook}
                alt="Facebook"
                width={43}
                height={43}
                layout="fixed"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/">
            <a>
              <Image
                src={Twitter}
                alt="Twitter"
                width={43}
                height={43}
                layout="fixed"
              />
            </a>
          </Link>
        </div>
      </S.FollowBox>
      <S.ContactBox>
        <h1>Contact</h1>
        <p>2490 Leisure Lane San Luis Obispo California</p>
      </S.ContactBox>
    </S.Container>
  );
}

export default Footer;
