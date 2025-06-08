import React from "react";

interface Props {
  params: { photoId: number };
}

const UserPhotoPage = ({ params: { photoId } }: Props) => {
  return <div>UserPhotoPage {photoId}</div>;
};

export default UserPhotoPage;
