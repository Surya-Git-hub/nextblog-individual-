import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);
  return (
    <div>
      <h1>Member Server Session</h1>
      <div>
        user name === {session?.user} 
      </div>
    </div>
  );
};

export default page;
