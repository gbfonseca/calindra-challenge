import { ReactElement } from 'react';
import Image from 'next/image';
import { Scale, ScaleTape } from 'assets/images';
import { Footer, Navbar } from '../../components';

import * as S from './styles';

function Home(): ReactElement {
  return (
    <S.Container>
      <Navbar />
      <S.Mensuring>
        <h1>Measuring everything</h1>
        <Image
          src={Scale}
          alt="Scale Image"
          width={682}
          height={335}
          layout="intrinsic"
        />
      </S.Mensuring>
      <S.MensureTape>
        <article>
          <h1>We are Leader in Measure Tapes</h1>
          <p>There are 5x the circumference of planet earth in metric tapes.</p>
        </article>
        <S.Figure>
          <Image
            src={ScaleTape}
            alt="Scale Image"
            width={1038}
            height={689}
            layout="intrinsic"
          />
        </S.Figure>
      </S.MensureTape>
      <Footer />
    </S.Container>
  );
}

export default Home;
