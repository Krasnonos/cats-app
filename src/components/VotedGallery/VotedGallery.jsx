import { Component } from 'react';
import { MainContentNav } from '../MainContentNav/MainContentNav';
import { ActionHistoryList } from '../ActionHistoryList/ActionHistoryList';
import { VotedGalleryItem } from '../VotedGalleryItem/VotedGalleryItem';
import { Loader } from '../Loader/Loader';
import { sortVotedCats } from '../../utils/sortVotedCatsByOption';
import { List, Wrap, ErrorMsg } from './VotedGallery.styled';
import { Api } from '../../utils/apiService';

const API = new Api();

export class VotedGallery extends Component {
  state = {
    votingCats: null,
    actions: [],
  };

  async componentDidMount() {
    try {
      const votingCats = await sortVotedCats(this.props.page);

      const catsImagesPromis = votingCats.map(cat =>
        API.getCatImagesById(cat.image_id)
      );
      const catImages = await Promise.all(catsImagesPromis);
      let newCatsObj = [];
      for (let i = 0; i < catImages.length; i += 1) {
        newCatsObj = [
          ...newCatsObj,
          { catImages: catImages[i], votingCats: votingCats[i] },
        ];
      }
      this.setState({ votingCats: newCatsObj });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps, _) {
    try {
      if (prevProps.page !== this.props.page) {
        this.setState({ votingCats: null });
        const votingCats = await sortVotedCats(this.props.page);
        const catsImagesPromis = votingCats.map(cat =>
          API.getCatImagesById(cat.image_id)
        );
        const catImages = await Promise.all(catsImagesPromis);
        let newCatsObj = [];
        for (let i = 0; i < catImages.length; i += 1) {
          newCatsObj = [
            ...newCatsObj,
            { catImages: catImages[i], votingCats: votingCats[i] },
          ];
        }
        this.setState({ votingCats: newCatsObj });
      }
    } catch (error) {
      console.log(error);
    }
  }

  removeCatFromVoted = async (cat, vote = 2) => {
    try {
      if (vote === 1 || vote === 0) {
        API.delateVotes(cat.votingCats.id);
      } else {
        API.delateFavorite(cat.votingCats.id);
      }
      const catsAfterRemove = this.state.votingCats.filter(
        item => item.votingCats.id !== cat.votingCats.id
      );

      this.setState({ votingCats: catsAfterRemove });
      this.addActions(cat.catImages.id, vote);
    } catch (error) {
      console.log(error);
    }
  };

  addActions = (id, vote) => {
    this.setState(prevState => {
      return {
        actions: [
          ...prevState.actions,
          {
            id,
            vote,
            time: Date.now(),
          },
        ],
      };
    });
  };

  render() {
    const { votingCats, actions } = this.state;

    return (
      <Wrap>
        <MainContentNav currentPage={this.props.page} />
        {!votingCats && <Loader />}
        {votingCats && (
          <List>
            {votingCats.map(cat => (
              <VotedGalleryItem
                cat={cat}
                key={cat.votingCats.id}
                removeCatFromVoted={this.removeCatFromVoted}
              />
            ))}
          </List>
        )}
        {votingCats?.length === 0 && <ErrorMsg>No item found</ErrorMsg>}
        {actions && <ActionHistoryList actions={actions} remove={true} />}
      </Wrap>
    );
  }
}
