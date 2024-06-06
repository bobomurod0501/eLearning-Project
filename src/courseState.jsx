import js from "./images/js.webp";
import js2 from "./images/js2.webp";
import react from "./images/react.webp";
import react2 from "./images/react2.jpg";
import soon from "./images/soon.avif";
import soon2 from "./images/soon2.avif";

export const courseState = () => {
  return [
    {
      title: "Interactive React va Redux",
      mainImg: react,
      secondaryImg: react2,
      url: "/courses/react",
      awards: [
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
      ],
    },
    {
      title: "Tez kunda",
      mainImg: soon,
      secondaryImg: soon2,
      url: "/courses/soon",
      awards: [
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
      ],
    },
    {
      title: "Interactive JavaScript",
      mainImg: js,
      secondaryImg: js2,
      url: "/courses/javascript",
      awards: [
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
        {
          title: "lorem ipsun",
          description: "lorem Ipsum is simply dummy text of the printing",
        },
      ],
    },
  ];
};
