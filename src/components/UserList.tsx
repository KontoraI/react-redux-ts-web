import React, { useEffect } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
