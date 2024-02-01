import { useEffect, useState } from "react";
import { User } from "./User";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Nihal",
      lastName: "Dhore",
      _id: 1,
    },
  ]);
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="mx-16 my-6">
        <input
          className="py-2.5 w-full rounded-md px-2.5 border-solid border-[1px] border-gray-400"
          type="text"
          placeholder="Search contacts"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};
