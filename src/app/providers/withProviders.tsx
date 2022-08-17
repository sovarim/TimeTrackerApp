import compose from 'compose-function';
import withSafeArea from './withSafeArea';
import withTheme from './withTheme';

export default compose(withSafeArea, withTheme);
