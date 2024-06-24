import { useSelector } from "react-redux";
import { toggleFavorite } from "../store/reducers/slice";
import store from "../store/store";

interface Account {
  id: number;
  name: string;
  favorite: boolean;
}

const Bt7 = () => {
  const accounts = useSelector((state: any) => state.accounts.accounts);

  const handleFavoriteToggle = (accountId: number) => {
    store.dispatch(toggleFavorite(accountId));
  };

  return (
    <div>
      <h2>Account List</h2>
      <ul>
        {accounts.map((account: Account) => (
          <li key={account.id}>
            {account.name}
            <button onClick={() => handleFavoriteToggle(account.id)}>
              {account.favorite ? "Unfavorite" : "Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bt7;
