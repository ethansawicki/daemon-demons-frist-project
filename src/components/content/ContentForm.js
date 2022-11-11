import { useParams } from "react-router-dom";

export const ContentForm = () => {
  const { contentId } = useParams();
  return (
    <>
      <h2>{`Edit Content ${contentId}`}</h2>
    </>
  );
};
