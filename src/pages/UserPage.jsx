import React, { useState } from 'react';
import UserForm from '../components/admin/UserForm';
import UserList from '../components/admin/UserList';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers((prev) => [...prev, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSubmit = (user) => {
    if (editingUser) {
      updateUser({ ...user, id: editingUser.id });
    } else {
      addUser(user);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <UserForm
        onSubmit={handleSubmit}
        initialData={editingUser}
        onCancel={() => setEditingUser(null)}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={deleteUser}
      />
    </div>
  );
};

export default UsersPage;
