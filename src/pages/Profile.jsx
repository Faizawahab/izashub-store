import React from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        {user ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome, {user.title ? `${user.title} ${user.lastName}` : user.firstName || user.phone}!
            </h1>
            
            <div className="text-gray-600 mb-6">
              {user.firstName && (
                <p>
                  <span className="font-semibold">Name:</span>{" "}
                  {user.title} {user.firstName} {user.lastName}
                </p>
              )}
              <p>
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
            </div>

            <button
              onClick={signOut}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <p className="text-gray-500">No user logged in</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
