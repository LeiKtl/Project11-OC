import './profile.css';
import Accounts from '../../components/accounts';
import { accountsInfo } from '../../datas/accountsInfo';

function Profile () {
    return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        {/* changer nom selon user avec API */}
        <button className="edit-button">Edit Name</button>
        {/* créer un composant pour editer nom avec un form */}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountsInfo.map(({id, title, amount, description}) => (
        <Accounts key={`accounts${id}`} title={title} amount={amount} description={description}  />
      ))}
    </main>
    )
}

export default Profile;