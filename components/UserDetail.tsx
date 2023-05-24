import Image from "next/image";
import getRoboImage from "@/util/getRoboImage";
import getAddress from "@/util/getAddress";

function UserDetail({ user }:any) {
  return (
    <div className="hero h-96 bg-white ">
      <div className="hero-content flex-col lg:flex-row">
        <Image
        src={getRoboImage(user.username)}
        alt={user.username}
        className="max-w-sm rounded-lg shadow-2xl"
        width={400}
        height={400}
      />
        <div>
          <h1 className="text-5xl font-bold">{user.name}</h1>
          <h2 className="text-3xl pt-4">username : {user.username}</h2>
          <p className="py-6">
            {getAddress(user.address)}
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
