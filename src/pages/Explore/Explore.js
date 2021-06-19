import { useEffect } from 'react';

import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { PhotoModal, AddToCollectionModal } from 'components';

import {
  getData,
  getMoreData,
  openPhotoModal,
  closePhotoModal,
} from 'store/explore';

import {
  Container,
  HoverDiv,
  ImageContainer,
  StyledImg,
} from './Explore.styles';

const Explore = props => {
  const { data, pageToLoad, hasMore, index } = props.explore;

  useEffect(() => {
    props.getData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.getData();
    //eslint-disable-next-line
  }, [pageToLoad]);

  const { showCollectionsModal } = props.featured.modal;
  const showPhotoModal = index > -1;

  return (
    <Container>
      <InfiniteScroll
        dataLength={data.length}
        next={props.getMoreData}
        hasMore={hasMore}
        loader={<div>Loading photos...</div>}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter='5px'>
            {data.map((item, index) => {
              return (
                <ImageContainer onClick={() => props.openPhotoModal(index)}>
                  <HoverDiv>{item.likes} likes</HoverDiv>
                  <StyledImg src={item.urls.small} alt={item.alt_description} />
                </ImageContainer>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
      {showPhotoModal && (
        <PhotoModal
          index={index}
          arrayOfPhotos={data}
          handleCloseClick={props.closePhotoModal}
        />
      )}
      {showCollectionsModal && <AddToCollectionModal />}
    </Container>
  );
};

const mapStateToProps = state => ({
  explore: state.explore,
  featured: state.featured,
});

const mapDispatchToProps = {
  getData,
  getMoreData,
  openPhotoModal,
  closePhotoModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
