import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPostsThunk } from '../store/thunk';
import { selectItem } from '../store/toolkitSlice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators({ getPostsThunk, selectItem }, dispatch);
};
