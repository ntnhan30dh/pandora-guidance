import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const MenuItem = (props) => {
  const data = useStaticQuery(graphql`
    {
      combos1: file(relativePath: { eq: "menuCombos_pic1.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosClassicFishChips: file(
        relativePath: { eq: "menuCombos_ClassicFishChips.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosClassicCalamariChips: file(
        relativePath: { eq: "menuCombos_ClassicCalamariChips.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosSpicyFishChips: file(
        relativePath: { eq: "menuCombos_SpicyFishChips.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosSpicyCalamariChips: file(
        relativePath: { eq: "menuCombos_SpicyCalamariChips.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosCaptainsChoice: file(
        relativePath: { eq: "menuCombos_CaptainsChoice.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      combosChiefMatesChoice: file(
        relativePath: { eq: "menuCombos_ChiefMatesChoice.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sidesFries: file(relativePath: { eq: "menuSides_Fries.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sidesColeslaw: file(relativePath: { eq: "menuSides_Coleslaw.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

     sidesRise: file(relativePath: { eq: "menuSides_Rise.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      sidesGarlicMayo: file(relativePath: { eq: "menuSides_GarlicMayo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      drinks1: file(relativePath: { eq: "menuDrinks_cola.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const pic = (picName) => {
    switch (picName) {
      // starters
      case "combosClassicFishChips":
        return data.combosClassicFishChips.childImageSharp.fluid;
      case "combosClassicCalamariChips":
        return data.combosClassicCalamariChips.childImageSharp.fluid;
      case "combosSpicyFishChips":
        return data.combosSpicyFishChips.childImageSharp.fluid;
      case "combosSpicyCalamariChips":
        return data.combosSpicyCalamariChips.childImageSharp.fluid;
      case "combosCaptainsChoice":
        return data.combosCaptainsChoice.childImageSharp.fluid;
      case "combosChiefMatesChoice":
        return data.combosChiefMatesChoice.childImageSharp.fluid;
      case "sidesFries":
        return data.sidesFries.childImageSharp.fluid;
      case "sidesColeslaw":
        return data.sidesColeslaw.childImageSharp.fluid;
      case "sidesRise":
        return data.sidesRise.childImageSharp.fluid;
      case "sidesGarlicMayo":
        return data.sidesGarlicMayo.childImageSharp.fluid;
      case "drinks1":
        return data.drinks1.childImageSharp.fluid;
    
      default:
        return data.combos1.childImageSharp.fluid;
    }
  };

  return (
    <div className="mMenuItem relative px-16 md:px-10 lg:px-16 ">
      <h1 className="menuItemName text-center furious pb-6 ">{props.name}</h1>
      <Img className="w-full " fluid={pic(props.pic)} />
    </div>
  );
};

export default MenuItem;
