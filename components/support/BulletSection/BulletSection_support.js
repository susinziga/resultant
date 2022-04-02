import React from 'react'
import { HeadingContainer } from '../Support.styled';
import { BulletContainer, BulletHeader, BulletList, Bullet } from './BulletSection.styled';

const BulletSection_support = ({ bulletList, heading }) => {

  return (
    <>
      <BulletContainer>
        <BulletHeader>{heading}</BulletHeader>
        <BulletList>
        {
          bulletList.map((bullet) => {
            return(
              <Bullet>{bullet.text}</Bullet>
            )
          })
        }
        </BulletList>
      </BulletContainer>
    </>
  )
}

export default BulletSection_support;