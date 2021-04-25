import { instance } from '../api/index';
import { fetchPostsSuccess } from '../store/toolkitSlice';

export const getPostsThunk = () => (dispatch) => {
  instance.get('posts').then(({ data }) => dispatch(fetchPostsSuccess(data)));
};
