import React from "react";
import CardTravel from "@material-ui/icons/CardTravel";
export const progress_data = [
  {
    // First story
    inverted: true,
    badgeColor: "success",
    title: "idea1",
    titleColor: "success",
    badgeIcon: CardTravel,
    body: (
      <p>
        Idea has been generated
      </p>
    ),
    footerTitle: "11 hours ago by Andrew Mike"
  },
  {
    // Second story
    inverted: true,
    badgeColor: "warning",
    title: "idea1",
    titleColor: "warning",
    badgeIcon: CardTravel,
    body: (
      <p>
        idea1 has been approved once
      </p>
    ),
    footerTitle: "11 hours ago by Yiming Zhang"
  },
  {
    // Third story
    inverted: true,
    badgeColor: "warning",
    title: "idea1",
    titleColor: "warning",
    badgeIcon: CardTravel,
    body: (
      <p>
        idea1 has been approved twice
      </p>
    ),
    footerTitle: "10 hours ago by Xizhao Deng"
  },
];