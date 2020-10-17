import React, { useContext } from 'react';
import { UserContext } from '../../App';
import AddService from './AddService/AddService';
import Sidebar from './Sidebar/Sidebar';

const containerStyle = {
  backgroundColor: "#F4FDFB",
}

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <section>
    <div>
        <AddService></AddService>
    </div>
</section>
  );
};

export default Dashboard;