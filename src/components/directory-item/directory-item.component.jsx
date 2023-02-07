
import React from 'react'

import { useNavigate } from 'react-router-dom';
import {BackGroundImage,Body,DirectoryItemContainer} from './directory-item.styles'


  function DirectoryItem({ category }) {
    const { imageUrl, title, route} = category; 
    const navigate = useNavigate();
    const onNavigateRender = ()=> { navigate(route)}
    return (
      <DirectoryItemContainer onClick={onNavigateRender}>
        <BackGroundImage  imageUrl={imageUrl}>
        </BackGroundImage>
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryItemContainer>
    )
  }

export default DirectoryItem
