import compose from 'compose-function';
import withSafeArea from './withSafeArea';
import withTheme from './withTheme';
import withRealm from './witRealm';

export default compose(withRealm, withSafeArea, withTheme);
