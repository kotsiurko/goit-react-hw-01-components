import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div className="container">
      <h2>Task 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <hr />
      <Statistics stats={data} />
      <hr />
      <h2>Task 3</h2>
      <FriendList friends={friends} />;
      <hr />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
