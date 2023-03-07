import React from "react";
import { useParams } from "react-router-dom";
import { DetailList } from "./detail-components/DetailList";
import { DivImg } from "./detail-components/DivImg";
import { DetailContainer } from "./detail-styles/DetailContainer";
import { EventDetail } from "./EventDetail";


export const DetailPage: React.FC = () => {

  const { id } = useParams();

  const { member } = EventDetail(id);
  
  return (
    <DetailContainer>
      <DetailList member={member} id={id} />
      <DivImg avatar={member.avatar_url} />
    </DetailContainer>
  );
};
