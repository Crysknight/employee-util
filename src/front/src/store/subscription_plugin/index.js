import createInitialState from './create_initial_state';
import setSubscription from './set_subscription';
import handleSubscription from './handle_subscription';

export default store => {
    createInitialState(store);
    setSubscription(store);
    handleSubscription(store);
};
