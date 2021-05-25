import React from 'react';

import { connect } from 'react-redux';

import CollectionHeader from '../../components/CollectionHeader';
import CollectionPhotos from '../../components/CollectionPhotos';

import { getCollectionData } from '../../store/collection/collectionActions';

class Collection extends React.Component {
  componentDidMount() {
    this.props.getCollectionData(this.props.match.params.collectionId);
  }

  render() {
    const { collectionData, isLoadingCollection } = this.props.collection;
    const readyToDisplay = !isLoadingCollection && collectionData;

    return (
      <div>
        {isLoadingCollection && <div>Loading collection...</div>}
        {readyToDisplay && (
          <div>
            <CollectionHeader
              src={
                collectionData.cover_photo &&
                collectionData.cover_photo.urls.small
              }
              title={collectionData.title}
              description={collectionData.description}
              tags={collectionData.tags}
              totalPhotos={collectionData.total_photos}
              author={collectionData.user}
            />
            <CollectionPhotos collectionId={collectionData.id} />
          </div>
        )}
      </div>
    );
  }
}

const mapsStateToProps = state => ({
  collection: state.collection,
});

const mapDispatchToProps = {
  getCollectionData,
};

export default connect(mapsStateToProps, mapDispatchToProps)(Collection);
