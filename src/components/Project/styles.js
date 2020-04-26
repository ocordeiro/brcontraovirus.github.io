import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0.5rem 0.25rem
    ${({ theme, color }) => theme.colors.shadows[color]};
  text-align: center;
  border-radius: 2.5rem;
  overflow: hidden;
  cursor: pointer;
  flex-basis: calc(33.33333% - 2rem);
  margin-bottom: 2rem;
  margin-right: 2rem;
`

const ImageWrapper = styled.div`
  height: 13rem;
  overflow: hidden;
  margin-bottom: 2rem;
  position: relative;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme, color }) => theme.colors.gradients[color]};
    z-index: 0;
    opacity: 0.8;
  }
`

const Buttons = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.5rem;
`

const Category = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 2rem;
`

export { Container, ImageWrapper, ButtonsWrapper, Buttons, Title, Category }
