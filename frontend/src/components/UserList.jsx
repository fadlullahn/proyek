import React, { useState, useEffect } from "react";
import axios from "axios";
import Head from "./atoms/Head";
import Content from "./atoms/Content";
import { TH, TD, TDA, THA } from "./atoms/Table";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get("http://localhost:5001/user");
    setUser(response.data);
  };

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5001/user/${userId}`);
    getUser();
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Head
        Title="USER LIST"
        Deskripsi="A LIST OF ALL THE USER"
        ButtonText="Add User"
        LinkTo="/user/add"
      />
      <Content>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <TH Text="No." />
              <TH Text="Name" />
              <TH Text="Email" />
              <TH Text="Role" />
              <THA />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {user.map((user, index) => (
              <tr key={user.uuid}>
                <TD Variabel={index + 1} />
                <TD Variabel={user.name} />
                <TD Variabel={user.email} />
                <TD Variabel={user.role} />
                <TDA
                  LinkTo={`/user/edit/${user.uuid}`}
                  onDelete={() => deleteUser(user.uuid)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </div>
  );
};

export default UserList;
