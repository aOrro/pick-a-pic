import React from 'react';
import axios from 'axios';
import CollectionHeader from '../../components/CollectionHeader';
import CollectionPhotos from '../../components/CollectionPhotos';

class Collection extends React.Component {
  state = {
    collectionData: null,
    isLoading: false,
  };

  getCollectionData = async () => {
    try {
      this.setState({
        isLoading: true,
      });

      const { data } = await axios(
        `https://api.unsplash.com/collections/${this.props.match.params.collectionId}?&client_id=${process.env.REACT_APP_API_KEY}`
      );

      this.setState({
        collectionData: data,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getCollectionData();
  }

  render() {
    const { collectionData, isLoading } = this.state;
    const readyToDisplay = !isLoading && collectionData;

    return (
      <div>
        {isLoading && <div>Loading collection...</div>}
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

export default Collection;
