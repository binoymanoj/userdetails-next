"use client";

import React from "react";
import Image from "next/image";
import getRoboImage from "@/util/getRoboImage";
import { useRouter } from "next/navigation";
import router from "next/router";

function UserList({ users }: any) {
  const router = useRouter();
  return (
    <div>
      {users.map((user: any) => (
        <div
          key={user.id}
          className="card card-side bg-base-100 shadow-xl dark:text-white mb-5"
        >
          <figure>
            <Image
              src={getRoboImage(user.username)}
              alt={user.username}
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <div className="card-actions">
              <button
                className="btn btn-primary"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
